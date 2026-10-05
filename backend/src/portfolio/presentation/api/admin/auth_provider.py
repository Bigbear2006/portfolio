from collections.abc import Sequence

from starlette.requests import Request
from starlette.responses import Response
from starlette_admin.auth import AuthProvider
from starlette_admin.exceptions import LoginFailed

from portfolio.domain.exceptions import NotAuthenticatedError
from portfolio.presentation.api.admin.config import AdminConfig
from portfolio.presentation.api.admin.token_processor import JWTTokenProcessor


class JWTAuthProvider(AuthProvider):
    def __init__(
        self,
        token_processor: JWTTokenProcessor,
        admin_config: AdminConfig,
        *,
        login_path: str = '/login',
        logout_path: str = '/logout',
        allow_paths: Sequence[str] | None = None,
        allow_routes: Sequence[str] | None = None,
    ) -> None:
        super().__init__(login_path, logout_path, allow_paths, allow_routes)
        self.token_processor = token_processor
        self.admin_config = admin_config

    async def login(
        self,
        username: str,
        password: str,
        remember_me: bool,
        request: Request,
        response: Response,
    ) -> Response:
        if (
            username != self.admin_config.USERNAME
            or password != self.admin_config.PASSWORD
        ):
            raise LoginFailed('Неверный логин или пароль')

        token = self.token_processor.create_token(username)
        max_age = (
            int(self.token_processor.token_lifetime.total_seconds())
            if remember_me
            else None
        )
        response.set_cookie(
            'token',
            token,
            httponly=True,
            max_age=max_age,
        )
        return response

    async def is_authenticated(self, request: Request) -> bool:
        token = request.cookies.get('token')
        if not token:
            return False

        try:
            self.token_processor.validate_token(token)
        except NotAuthenticatedError:
            return False
        else:
            return True

    async def logout(self, request: Request, response: Response) -> Response:
        response.delete_cookie('token', httponly=True)
        return response
