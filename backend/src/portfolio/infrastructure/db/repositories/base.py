from sqlalchemy.exc import IntegrityError
from sqlalchemy.ext.asyncio import AsyncSession

from portfolio.domain.exceptions import AlreadyExistsError


async def create[T](session: AsyncSession, obj: T) -> T:
    session.add(obj)
    try:
        await session.flush()
        return obj
    except IntegrityError as e:
        if 'UniqueViolationError' in str(e.orig):
            raise AlreadyExistsError('Object already exists') from e
        raise
