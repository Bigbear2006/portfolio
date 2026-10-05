from fastapi import APIRouter

from portfolio.presentation.api.routers.contact_request import contact_request_router

api_router = APIRouter(prefix='/api/v1')
api_router.include_router(contact_request_router)

__all__ = ('api_router',)
