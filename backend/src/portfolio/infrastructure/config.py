from dataclasses import dataclass, field

from environs import env

env.read_env()


@dataclass
class AppConfig:
    SECRET_KEY: str = field(default_factory=lambda: env('SECRET_KEY'))
    CORS_ALLOWED_ORIGINS: list[str] = field(
        default_factory=lambda: env.list('CORS_ALLOWED_ORIGINS', [])
    )
