from sqlalchemy.ext.asyncio import AsyncSession

from portfolio.domain.entities import BaseContactRequest, ContactRequest
from portfolio.infrastructure.db.models import ContactRequestModel
from portfolio.infrastructure.db.repositories.base import create


class ContactRequestRepository:
    def __init__(self, session: AsyncSession) -> None:
        self.session = session

    async def create(self, contact_request: BaseContactRequest) -> ContactRequest:
        contact_request_model = ContactRequestModel(
            message=contact_request.message,
            email_account_id=contact_request.email_account_id,
            telegram_account_id=contact_request.telegram_account_id,
        )
        contact_request_model = await create(self.session, contact_request_model)
        return ContactRequest.model_validate(contact_request_model)
