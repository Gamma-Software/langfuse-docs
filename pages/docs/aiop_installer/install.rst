=======
Install
=======

.. warning::
   Be sure to have the prerequisites installed before installing aiop. See prerequisites.

The installation is really simple. Just run the following command:

.. code-block:: shell

   pip install aiop

The first 3 instructions will add the artifactory repository to the pip index url, the next one will install the package.

.. note::
   Before using aiop you will have to setup the aiop Installer. See the next section.


Setup aiop
-----------------------

After the pip installation, you can run the aiop_installer with the following command:

.. code-block:: shell

   aiop_installer install

.. program-output:: aiop_installer
   :cwd: ../../

aiop Installer will ask for several informations, such as the location of your SDK installation path, the different registry api key and credentials and the cache location.

:SDK path: The path to the SDK installation directory. This is the directory where the SDK is installed. This is the directory where the aiop_installer will look for the SDK files.

:Registry API key and passwords: The API key to access the different Artefacts registries. This key is used to retrieve the artifacts from Nexus, Gitlab, Artifactory...

.. warning::
   The installer will open a browser window to ask for the API key. If you are using a browser that is not Chrome, you will have to copy the API key from the browser and paste it in the terminal.

:Cache location: The location where the aiop_installer will store the downloaded artifacts. This is the location where the aiop_installer will look for the artifacts before downloading them again.

.. note::
   You can run the installer as many times as you want to fill the missing parameters. So that when an update is available, you can just run the installer again to update the aiop_installer.

=========
Reinstall
=========

You can also reinstall aiop parameters by removing the configuration file and running the installer again.

This is how you can remove the configuration file:

.. code-block:: shell

   rm ~/.aioprc

Then run the installer:

.. code-block:: shell

   aiop_installer install

.. note::
   No arguments to reinstall is yet implemented. The operation is done manually for now.

======
Update
======

aiop will warn you if a new version is available. You can update it by running the following command:

.. code-block:: shell

   pip install git+https://gitlab.com/leap_tech/aiop-group/aiop.git -U

Reinstall the aiop parameters as they may have changed.

.. code-block:: shell

   aiop_installer install
