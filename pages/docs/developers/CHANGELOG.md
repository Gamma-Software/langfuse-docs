# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Reference package validator, you can now add validators scripts in your reference package to validate the content of the reference package

## [2.4.1] - 2022-12-08

### Added

- Integration tests: add first integration test that test the local file build

### Changed

- Apply flake8 linting on some files

### Fixed

- Zip files where not correctly handled, they were unzipped even though they were not supposed to be
- Lint errors in main declaration python module
- Duplicated entry lines in the generated catalog
- False warning when not pinging the Nexus registry

## [2.4.0] - 2022-12-02

### Added

- Build stage in CI to build page and Deploy stage to deploy it on Gitlab Pages
- Dev extensions recommendations

### Changed

- Remove api key in fetching the SDK resources and use the one from the Environment variable
- Remove the Raise error when fetching Nexus resources

### Fixed

- CI doc deploy: move redirects to public for CI
- lint and fix possibility to add apps in a single string (used in a reference skeleton task)
- Caching retrieval was stuck when the server was not reachable

## [2.3.0] - 2022-11-27

Reinstall aiop as you want. For devs, the dev container is the best way to start doing some work.
The documentation is better than ever, and the code is more readable with the linting of flake8.

### Added

- Missing requirement
- Reinstall aiop_installer option
- Versioning in documentation
- Dev requirements and update dev container accordingly
- Publish html coverage report

### Changed

- Rearchitectures the documentation
- Better error handling on bad zip file
- No need to change ownership in CI
- Removed the zip_catalog unused command
- Better error handling on no vpn connection in sdk installation
- Remove unecessary task
- Generate the pipeline on certain conditions

### Fixed

- Bad zip in CI

## [2.2.0] - 2022-11-22

Make the Windows Installer and Build work

### Added

- Create the cached folder if not exists at installation

### Changed

- When using cached files, copy them instead of symlink
- Add project wiki submodule
- Better handle error when pinging Ingenico Artifactory
- Default cache folder in windows

### Fixed

- SDK Installer launch in Windows

## [2.1.0] - 2022-11-21

### Added

- Merge request template
- Show coverage in Gitlab CI

## [2.0.1] - 2022-11-18

### Fixed

- Changelog format
- Gitlab ci temporary fix

## [2.0.0] - 2022-11-18

### Added

- The possibility to add several .declarations in the same folder (naming them differently)
- User, Pass, Api for Ingenico Artifactory
- User, Pass, Api for Worldline Artifactory
- User, Pass, Api for Nexus registry
- Flake8 for linting with configuration
- Pytest for gitlab-ci
- Coverage for testing (in gitlab-ci)
- Advanced pipeline for gitlab-ci
- Install Flake8 and Pytest in the docker image
- Vocabulary in the documentation

### Changed

- More verbose output in installation
- More verbose output if the installation is not right at TP instance
- Remove unwanted test file
- Better handle family or all targets in declaration
- Progress bar color

### Fixed

- Take mode into account in declaration
- Better choose the right instruction with the least symmetric difference from the target
- Setup summary format
- Install template from git
- Linux environment variable export api complex keys
- Remove unwanted print
- Catalog extension creation when the declaration indicates a range of terminal
- Incorrect pairs for terminal range selection

## [1.0.0] - 2022-11-15

### Added

- First PoC of aiop (TP)
- Easy installation
- Easy CLI
- declaration, Inventory concepts
- Build commands with extra parameters
- Retrieve data from Nexus, Url, Local, SDK
- Devcontainer
- Documentation
- First test units
- CONTRIBUTION.md guidelines