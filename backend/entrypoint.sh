#!/bin/sh
alembic upgrade head
python -m portfolio.presentation.api.main