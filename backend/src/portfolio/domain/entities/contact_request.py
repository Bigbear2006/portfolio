from datetime import datetime
from typing import Self

from pydantic import (
    BaseModel,
    ConfigDict,
    Field,
    model_validator
)

from portfolio.domain.exceptions import ValidationError


class BaseContactRequest(BaseModel):
    message: str = Field(..., min_length=10, max_length=1000)
    email_account_id: int | None
    telegram_account_id: int | None
    model_config = ConfigDict(from_attributes=True)

    @model_validator(mode='after')
    def validate_telegram_and_email(self) -> Self:
        if not self.email_account_id and not self.telegram_account_id:
            raise ValidationError('Email or Telegram must be provided')
        return self


class ContactRequest(BaseContactRequest):
    id: int
    created_at: datetime
