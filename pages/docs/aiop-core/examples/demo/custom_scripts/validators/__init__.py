# TODO Import the validators to be executed
from validators.snakecase import NamingConvention

# TODO List the validators to be executed
VALIDATORS = [
    NamingConvention("snake_case_convention")
]
