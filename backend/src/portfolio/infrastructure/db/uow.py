from types import TracebackType
from typing import Self

from sqlalchemy.ext.asyncio import AsyncSession

from portfolio.infrastructure.log import logger


class UnitOfWork:
    def __init__(self, session: AsyncSession) -> None:
        self.session = session

    async def commit(self) -> None:
        await self.session.commit()

    async def rollback(self) -> None:
        await self.session.rollback()

    async def flush(self) -> None:
        await self.session.flush()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self,
        exc_type: type[BaseException] | None,
        exc_val: BaseException | None,
        exc_tb: TracebackType | None,
    ) -> None:
        try:
            await self.commit()
        except Exception as e:
            logger.exception(
                f'Unexpected exception during commit: '
                f'{e.__class__.__name__}: {e}',
                exc_info=e,
            )
            await self.rollback()
