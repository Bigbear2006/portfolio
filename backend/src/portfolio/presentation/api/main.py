from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager

import uvicorn
from dishka import AsyncContainer
from dishka.integrations.fastapi import setup_dishka
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from portfolio.infrastructure.config import AppConfig
from portfolio.infrastructure.di.container import container
from portfolio.infrastructure.log import configure_logging, logger
from portfolio.presentation.api.admin import setup_admin_panel
from portfolio.presentation.api.exception_handler import setup_exception_handlers
from portfolio.presentation.api.routers import api_router


@asynccontextmanager
async def lifespan(_app: FastAPI) -> AsyncGenerator[None]:
    yield
    await _app.state.dishka_container.close()


def create_app(_container: AsyncContainer) -> FastAPI:
    configure_logging()
    logger.info('Application started')

    app = FastAPI(lifespan=lifespan)
    app.include_router(api_router)

    app_config = container.get_sync(AppConfig)
    if app_config.CORS_ALLOWED_ORIGINS:
        app.add_middleware(
            CORSMiddleware,
            allow_origins=app_config.CORS_ALLOWED_ORIGINS,
            allow_methods=['GET', 'POST'],
        )

    setup_dishka(_container, app)
    setup_admin_panel(app, _container)
    setup_exception_handlers(app)
    return app


if __name__ == '__main__':
    uvicorn.run(
        create_app(container),
        host='0.0.0.0',
        port=8000,
        forwarded_allow_ips='*',
        proxy_headers=True,
    )
