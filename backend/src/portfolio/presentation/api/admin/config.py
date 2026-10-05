from dataclasses import dataclass, field

from environs import env

env.read_env()


@dataclass
class AdminConfig:
    USERNAME: str = field(default_factory=lambda: env('ADMIN_USERNAME'))
    PASSWORD: str = field(default_factory=lambda: env('ADMIN_PASSWORD'))
