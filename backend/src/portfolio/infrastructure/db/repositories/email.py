from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from portfolio.domain.entities import BaseEmailAccount, EmailAccount
from portfolio.domain.exceptions import AlreadyExistsError, NotFoundError
from portfolio.infrastructure.db.models import EmailAccountModel
from portfolio.infrastructure.db.repositories.base import create


class EmailAccountRepository:
    def __init__(self, session: AsyncSession) -> None:
        self.session = session

    async def get_or_create(
        self, email_account: BaseEmailAccount
    ) -> EmailAccount:
        account = await self.get_or_none(email_account.email)
        if account:
            return account
        try:
            account = await self.create(email_account)
        except AlreadyExistsError as e:
            account = await self.get_or_none(email_account.email)
            if account:
                return account
            raise NotFoundError('Email account not found') from e
        else:
            return account

    async def create(self, email_account: BaseEmailAccount) -> EmailAccount:
        account = EmailAccountModel(email=email_account.email)
        account = await create(self.session, account)
        return EmailAccount.model_validate(account)

    async def get_or_none(self, email: str) -> EmailAccount | None:
        stmt = select(EmailAccountModel).where(
            EmailAccountModel.email == email
        )
        result = await self.session.execute(stmt)
        account = result.scalar_one_or_none()
        if account:
            return EmailAccount.model_validate(account)
        return None
