from aiop_tools.validator.abstract_validator import (
    AbstractValidator, ValidatorException)
from aiop.builder import load_ignore
import os
from pathlib import Path

REFERENCE_PATH = Path(__file__).parent.parent


class NamingConvention(AbstractValidator):

    def is_snake_case(self, name):
        return all(x.islower() or x.isdigit() for x in name.split('_'))

    def before_run(self):
        # Retrieve all the folders in the reference package and remove the
        # folders and files that are in the ignore list
        self.ignore_files = load_ignore(REFERENCE_PATH, set())

        self.folders = []
        for root, dirs, _ in os.walk(REFERENCE_PATH):
            dirs[:] = [
                d for d in dirs if not self.ignore_files(Path(root) / d)]
            self.folders.extend([str(Path(root) / Path(dir)) for dir in dirs])

    def run(self):
        not_snake_case_folders = []
        for folder in self.folders:
            if not self.is_snake_case(os.path.basename(folder)):
                not_snake_case_folders.append(folder)

        if len(not_snake_case_folders) == 1:
            raise ValidatorException(
                f"Folder {not_snake_case_folders} is not in snake case")
        elif len(not_snake_case_folders) > 1:
            raise ValidatorException(
                f"Folders {not_snake_case_folders} are not in snake case")

    def after_run(self):
        pass