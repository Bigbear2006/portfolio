from typing import Any


class ApplicationError(Exception):
    def __init__(
        self,
        message: str,
        **context: Any,
    ) -> None:
        self.message = message
        self.context = context


class ValidationError(ApplicationError):
    pass


class NotFoundError(ApplicationError):
    pass


class AlreadyExistsError(ApplicationError):
    pass


class NotAuthenticatedError(ApplicationError):
    def __init__(self) -> None:
        super().__init__('Not authenticated')
