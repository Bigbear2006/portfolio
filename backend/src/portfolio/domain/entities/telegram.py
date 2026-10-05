from datetime import datetime

from pydantic import BaseModel, ConfigDict, field_validator

from portfolio.domain.exceptions import ValidationError


class BaseTelegramAccount(BaseModel):
    username: str
    model_config = ConfigDict(from_attributes=True)

    @field_validator('username')
    @classmethod
    def validate_telegram(cls, value: str) -> str:
        if not value.startswith('@'):
            raise ValidationError('Telegram URL must start with @')
        return value


class TelegramAccount(BaseTelegramAccount):
    id: int
    created_at: datetime
