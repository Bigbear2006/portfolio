from dataclasses import dataclass

from pydantic import BaseModel, EmailStr

from portfolio.domain.entities import (
    BaseEmailAccount,
    BaseContactRequest,
    BaseTelegramAccount,
    ContactRequest,
)
from portfolio.infrastructure.db.repositories import (
    EmailAccountRepository,
    ContactRequestRepository,
    TelegramAccountRepository,
)
from portfolio.infrastructure.db.uow import UnitOfWork


class CreateContactRequestDTO(BaseModel):
    message: str
    email: EmailStr | None = None
    telegram: str | None = None


@dataclass
class CreateContactRequest:
    contact_request_repository: ContactRequestRepository
    email_repository: EmailAccountRepository
    telegram_repository: TelegramAccountRepository
    uow: UnitOfWork

    async def __call__(self, data: CreateContactRequestDTO) -> ContactRequest:
        async with self.uow:
            email_account = None
            if data.email:
                email_account = await self.email_repository.get_or_create(
                    BaseEmailAccount(email=data.email)
                )

            telegram_account = None
            if data.telegram:
                telegram_account = (
                    await self.telegram_repository.get_or_create(
                        BaseTelegramAccount(username=data.telegram)
                    )
                )

            contact_request = BaseContactRequest(
                message=data.message,
                email_account_id=email_account.id if email_account else None,
                telegram_account_id=telegram_account.id
                if telegram_account
                else None,
            )
            return await self.contact_request_repository.create(contact_request)
