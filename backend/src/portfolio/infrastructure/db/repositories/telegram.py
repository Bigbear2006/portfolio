from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from portfolio.domain.entities import BaseTelegramAccount, TelegramAccount
from portfolio.domain.exceptions import AlreadyExistsError, NotFoundError
from portfolio.infrastructure.db.models import TelegramAccountModel
from portfolio.infrastructure.db.repositories.base import create


class TelegramAccountRepository:
    def __init__(self, session: AsyncSession) -> None:
        self.session = session

    async def get_or_create(
        self, telegram_account: BaseTelegramAccount
    ) -> TelegramAccount:
        telegram = await self.get_or_none(telegram_account.username)
        if telegram:
            return telegram
        try:
            telegram = await self.create(telegram_account)
        except AlreadyExistsError as e:
            telegram = await self.get_or_none(telegram_account.username)
            if telegram:
                return telegram
            raise NotFoundError('Telegram account not found') from e
        else:
            return telegram

    async def create(
        self, telegram_account: BaseTelegramAccount
    ) -> TelegramAccount:
        telegram = TelegramAccountModel(username=telegram_account.username)
        telegram = await create(self.session, telegram)
        return TelegramAccount.model_validate(telegram)

    async def get_or_none(self, username: str) -> TelegramAccount | None:
        stmt = select(TelegramAccountModel).where(
            TelegramAccountModel.username == username
        )
        result = await self.session.execute(stmt)
        telegram = result.scalar_one_or_none()
        if telegram:
            return TelegramAccount.model_validate(telegram)
        return None
