from datetime import datetime

from pydantic import BaseModel, ConfigDict, EmailStr


class BaseEmailAccount(BaseModel):
    email: EmailStr
    model_config = ConfigDict(from_attributes=True)


class EmailAccount(BaseEmailAccount):
    id: int
    created_at: datetime
