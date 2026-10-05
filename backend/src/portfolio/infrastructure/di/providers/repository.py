from dishka import Provider, Scope, provide_all

from portfolio.infrastructure.db.repositories import (
    EmailAccountRepository,
    ContactRequestRepository,
    TelegramAccountRepository,
)


class RepositoryProvider(Provider):
    scope = Scope.REQUEST

    repositories = provide_all(
        EmailAccountRepository,
        TelegramAccountRepository,
        ContactRequestRepository,
    )
