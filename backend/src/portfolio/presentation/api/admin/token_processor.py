from datetime import UTC, datetime, timedelta
from typing import Any, Literal, cast

import jwt

from portfolio.domain.exceptions import NotAuthenticatedError

Algorithm = Literal[
    'HS256',
    'HS384',
    'HS512',
    'RS256',
    'RS384',
    'RS512',
]


class JWTTokenProcessor:
    def __init__(
        self,
        secret_key: str,
        algorithm: Algorithm,
        token_lifetime: timedelta,
    ) -> None:
        self.secret_key = secret_key
        self.algorithm = algorithm
        self.token_lifetime = token_lifetime

    def _create_token(
        self,
        username: str,
        lifetime: timedelta,
    ) -> str:
        payload = {
            'sub': username,
            'exp': datetime.now(UTC) + lifetime,
        }
        return jwt.encode(payload, self.secret_key, self.algorithm)

    def create_token(self, username: str) -> str:
        return self._create_token(username, self.token_lifetime)

    def validate_token(self, token: str) -> dict[str, Any]:
        try:
            payload = jwt.decode(token, self.secret_key, self.algorithm)
        except jwt.InvalidTokenError as e:
            raise NotAuthenticatedError from e
        return payload

    def extract_username(
        self,
        token: str,
    ) -> str:
        payload = self.validate_token(token)
        return cast(str, payload['sub'])
