from starlette.requests import Request
from starlette_admin import (
    DateTimeField,
    EmailField,
    HasOne,
    IntegerField,
    StringField,
    TextAreaField,
)
from starlette_admin.contrib.sqla import ModelView

from portfolio.infrastructure.db.models import (
    EmailAccountModel,
    TelegramAccountModel,
)


class ContactRequestModelView(ModelView):
    name = 'Запрос'
    label = 'Запрос'
    identity = 'contact_request'
    fields = (
        IntegerField('id'),
        TextAreaField('message'),
        HasOne('email_account', identity='email_account'),
        HasOne('telegram_account', identity='telegram_account'),
        DateTimeField('created_at'),
    )
    fields_default_sort = (('created_at', True),)


class EmailAccountModelView(ModelView):
    name = 'Почта'
    label = 'Почты'
    identity = 'email_account'
    fields = (
        IntegerField('id'),
        EmailField('email'),
        DateTimeField('created_at'),
    )
    fields_default_sort = (('created_at', True),)

    async def repr(self, obj: EmailAccountModel, request: Request) -> str:
        return obj.email


class TelegramAccountModelView(ModelView):
    name = 'Телеграм'
    label = 'Телеграм'
    identity = 'telegram_account'
    fields = (
        IntegerField('id'),
        StringField('username'),
        DateTimeField('created_at'),
    )
    fields_default_sort = (('created_at', True),)

    async def repr(self, obj: TelegramAccountModel, request: Request) -> str:
        return obj.username
