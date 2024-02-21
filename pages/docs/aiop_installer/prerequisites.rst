=============
Prerequisites
=============

The aiop tool does not require a lot of software. You just need a Windows or Linux machine and at least Python 3.6.

Python can be downloaded from https://www.python.org/downloads/ and the installation instructions can be found at https://docs.python.org/3/using/windows.html#installing-python.

.. warning:: You must also have access to Global Infra Gitlab https://google.com

Windows
-------

Download the latest Python 3.11 installer from https://www.python.org/downloads/release/python-3110/

Linux
-----

Install Python 3.11, curl and ping applications using your package manager.

```bash
sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get install python3.11
sudo apt-get install curl iputils-ping -y
```

Python Post-install
-------------------

Make sure to have Python installed.

.. code-block:: shell

   python --version

The result must return the version of your Python environment. Make sure to have the version 3.6 or above.

.. program-output:: python --version
   :cwd: ../../

.. note::  Windows: Open a command prompt by typing ``cmd`` in the Windows search bar or "Win+R", then type:

.. note::  Linux: Open a terminal by typing ``Ctrl+Alt+T`` in the Linux search bar.

Artifactory Registry
--------------------

To get the aiop from the Artifactory registry, you need to have an Artifactory account. If you don't have one, please contact your local IT team.

Next you need to create an API Key to access the Artifactory registry. To do so, please follow the instructions on the following page: https://google.com/ui/admin/artifactory/user_profile

Click on the Generate an API Key button and add a meaning full description like "aiop":

.. image:: artifactory_api_key.png
  :width: 300
  :alt: Alternative text

Get the API key and set the next environment variable.

.. code-block:: shell

   artifactory_username=<your_artifactory_username>
   artifactory_api_key=<your_artifactory_api_key>
   export PIP_EXTRA_INDEX_URL="https://${artifactory_username}:${artifactory_api_key}@google.com/artifactory/api/pypi/local-axis-pypi-axis-ci/simple"

The PIP_EXTRA_INDEX_URL environment variable is used to tell pip to use the Artifactory registry to get the aiop.
