from dishka import Provider, Scope, provide_all

from portfolio.application.use_cases.contact_request import CreateContactRequest


class UseCaseProvider(Provider):
    scope = Scope.REQUEST

    contact_request = provide_all(
        CreateContactRequest,
    )
