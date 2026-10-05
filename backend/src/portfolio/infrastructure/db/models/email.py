from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from portfolio.infrastructure.db.models.base import Base


class EmailAccountModel(Base):
    __tablename__ = 'email_accounts'

    email: Mapped[str] = mapped_column(
        String(320), unique=True, nullable=False
    )

    def __repr__(self) -> str:
        return self.email
