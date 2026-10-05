from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from portfolio.infrastructure.db.models.base import Base


class TelegramAccountModel(Base):
    __tablename__ = 'telegram_accounts'

    username: Mapped[str] = mapped_column(
        String(32), unique=True, nullable=False
    )

    def __repr__(self) -> str:
        return self.username
