# TODO Import the validators to be executed
from post_scripts.change_ip_dynamically import CurrentIPChange

# TODO List the validators to be executed
POST_SCRIPTS = [
    CurrentIPChange("ip_change"),
]
