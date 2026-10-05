from dishka import make_async_container

from portfolio.infrastructure.di.providers.config import AppConfigProvider
from portfolio.infrastructure.di.providers.database import DatabaseProvider
from portfolio.infrastructure.di.providers.repository import RepositoryProvider
from portfolio.infrastructure.di.providers.use_case import UseCaseProvider

providers = [
    AppConfigProvider(),
    DatabaseProvider(),
    RepositoryProvider(),
    UseCaseProvider(),
]
container = make_async_container(*providers)
