from collections.abc import AsyncIterable

from dishka import Provider, Scope, provide
from sqlalchemy.ext.asyncio import (
    AsyncEngine,
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)

from portfolio.infrastructure.db.config import DatabaseConfig
from portfolio.infrastructure.db.uow import UnitOfWork


class DatabaseProvider(Provider):
    uow = provide(UnitOfWork, scope=Scope.REQUEST)

    @provide(scope=Scope.APP)
    def provide_database_config(self) -> DatabaseConfig:
        return DatabaseConfig()

    @provide(scope=Scope.APP)
    def provide_engine(self, db_config: DatabaseConfig) -> AsyncEngine:
        return create_async_engine(db_config.url)

    @provide(scope=Scope.APP)
    def provide_sessionmaker(
        self,
        engine: AsyncEngine,
    ) -> async_sessionmaker[AsyncSession]:
        return async_sessionmaker(
            engine,
            class_=AsyncSession,
            expire_on_commit=False,
        )

    @provide(scope=Scope.REQUEST)
    async def provide_session(
        self,
        sessionmaker: async_sessionmaker[AsyncSession],
    ) -> AsyncIterable[AsyncSession]:
        async with sessionmaker() as session:
            yield session
