"""
This is a sample post script to be used as a template for new post scripts.
The post script class must inherit from AbstractPostScripts. This class defines
before_run(), run(target, declarations, package_path), after_run() methods that must be implemented.
The run method receives the declarations loaded and the package path.

If any of the methods returns False, the execution stops but aiop
will not raise any errors.

If any of the methods raises the PostScriptsException, the execution stops and
aiop will raise an error.
"""
from aiop_tools.post_scripts.abstract_post_scripts import (
    AbstractPostScripts,
    PostScriptsException,
)
import re
import socket
from pathlib import Path


class CurrentIPChange(AbstractPostScripts):
    """
    Use the arguments to do your post script, where:
    self.data.playbook_path: is the path to the reference package
    self.data.target: is the target to build
    self.data.loaded_declarations: is the list of declarations loaded
    self.data.package_path: is the path to the package
    self.data.setup_version: is the setup version data

    invoke the help function to get more information about the arguments like:
        print(help(self.data.target))

    Raise the exception PostScriptsException with a message
    to stop the execution and raise an error
    """

    def check_validity(self) -> bool:
        # Check whether the trace file is present
        for declaration in self.data.loaded_declarations:
            if "ip" in declaration.destination:
                self.trace_file = declaration.destination
                return True
        return False

    def before_run(self) -> bool:
        return True

    def run(self) -> bool:
        # Read the trace file and update the IP address
        with open(self.data.package_path / Path(self.trace_file), "r") as trace_file:
            trace_content = "".join(trace_file.readlines())

        # Update the IP address parameter REMOTE and write the file
        ip = socket.gethostbyname(socket.gethostname())
        trace_content = re.sub(r"ip=.*", f"ip={ip}", trace_content)
        print(f"Updating IP address to ip={ip}...")
        with open(self.data.package_path / Path(self.trace_file), "w") as trace_file:
            trace_file.writelines(trace_content)

        return True

    def after_run(self) -> bool:
        return True
