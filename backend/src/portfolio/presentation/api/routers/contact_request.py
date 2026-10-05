from dishka import FromDishka
from dishka.integrations.fastapi import DishkaRoute
from fastapi import APIRouter

from portfolio.application.use_cases.contact_request import (
    CreateContactRequestDTO,
    CreateContactRequest,
)
from portfolio.domain.entities import ContactRequest

contact_request_router = APIRouter(
    prefix='/contact-requests', tags=['Contact Requests'], route_class=DishkaRoute
)


@contact_request_router.post('/', status_code=201)
async def create_contact_request_endpoint(
    data: CreateContactRequestDTO, create_contact_request: FromDishka[CreateContactRequest]
) -> ContactRequest:
    return await create_contact_request(data)
