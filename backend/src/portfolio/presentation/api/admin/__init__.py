from datetime import timedelta

from dishka import AsyncContainer
from fastapi import FastAPI
from sqlalchemy.ext.asyncio import AsyncEngine
from starlette_admin.contrib.sqla import Admin

from portfolio.infrastructure.config import AppConfig
from portfolio.infrastructure.db.models import (
    EmailAccountModel,
    ContactRequestModel,
    TelegramAccountModel,
)
from portfolio.presentation.api.admin.auth_provider import JWTAuthProvider
from portfolio.presentation.api.admin.config import AdminConfig
from portfolio.presentation.api.admin.token_processor import JWTTokenProcessor
from portfolio.presentation.api.admin.views import (
    EmailAccountModelView,
    ContactRequestModelView,
    TelegramAccountModelView,
)


def setup_admin_panel(_app: FastAPI, _container: AsyncContainer) -> None:
    engine = _container.get_sync(AsyncEngine)
    app_config = _container.get_sync(AppConfig)
    admin = Admin(
        engine=engine,
        base_url='/slop',
        auth_provider=JWTAuthProvider(
            token_processor=JWTTokenProcessor(
                secret_key=app_config.SECRET_KEY,
                algorithm='HS256',
                token_lifetime=timedelta(days=3),
            ),
            admin_config=AdminConfig(),
        ),
    )
    admin.mount_to(_app)
    admin.add_view(ContactRequestModelView(ContactRequestModel))
    admin.add_view(EmailAccountModelView(EmailAccountModel))
    admin.add_view(TelegramAccountModelView(TelegramAccountModel))


__all__ = ('setup_admin_panel',)
