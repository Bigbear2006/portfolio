from sqlalchemy import BigInteger, ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from portfolio.infrastructure.db.models.base import Base


class ContactRequestModel(Base):
    __tablename__ = 'contact_requests'

    message: Mapped[str] = mapped_column(String(1000), nullable=False)
    email_account_id: Mapped[int | None] = mapped_column(
        BigInteger,
        ForeignKey('email_accounts.id', ondelete='SET NULL'),
        index=True,
        nullable=True,
    )
    telegram_account_id: Mapped[int | None] = mapped_column(
        BigInteger,
        ForeignKey('telegram_accounts.id', ondelete='SET NULL'),
        index=True,
        nullable=True,
    )

    email_account = relationship('EmailAccountModel', passive_deletes=True)
    telegram_account = relationship(
        'TelegramAccountModel', passive_deletes=True
    )

    def __repr__(self) -> str:
        return (
            f'ContactRequest(message={self.message[:25]!r})'
        )
