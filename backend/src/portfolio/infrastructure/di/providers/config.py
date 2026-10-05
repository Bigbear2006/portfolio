from dishka import Provider, Scope, provide

from portfolio.infrastructure.config import AppConfig


class AppConfigProvider(Provider):
    @provide(scope=Scope.APP)
    def provide_app_config(self) -> AppConfig:
        return AppConfig()
