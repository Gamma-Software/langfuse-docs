=============
Prerequisites
=============

First follow this guide to be able to use the aiop SDK Installer:

On Windows
----------

In a terminal run the following command

.. code-block:: shell

   pip install . & aiop_installer install

and follow the instructions. Web pages may open in your browser to get the api keys.

On Linux
--------

.. code-block:: shell

   pip install . & aiop_installer install


and follow the instructions. Web pages may open in your browser to get the api keys.

Please make sure to have `~/.local/bin` in your PATH, otherwise:
.. code-block:: shell

   echo "export PATH=$PATH:$HOME/.local/bin" >> ~/.bashrc


=======================
List Ingenico Resources
=======================

aiop SDK Installer is capable of listing all Ingenico resources that are available to you or installed on your computer.

.. code-block:: shell

   aiop_sdk_installer -h

.. program-output:: aiop_sdk_installer -h
   :cwd: ../../

Installed on your system
------------------------

You can list all the SDK, Addon, Kernels installed on your computer by running the following command:

.. code-block:: shell

   aiop_sdk_installer installed

.. warning:: You must have setup the aiop SDK path before you can list the resources.

Available on the Registry
-------------------------

You can list all the SDK, Addon, Kernels available on the registry by running the following command:

.. code-block:: shell

   aiop_sdk_installer available

.. warning:: You must have your Ingenico VPN setup and connected before you can list the resources.

==========================
Install Ingenico Resources
==========================

aiop SDK Installer is capable of installing Ingenico resources needed for the reference.
The app will parse the declarations from the reference and compare the SDK / Addon / Kernel versions with the ones installed on your computer.
The app will then install the missing resources.

The follow command will install all the resources needed for the reference:

.. code-block:: shell

   aiop_sdk_installer update path/to/reference

.. program-output:: aiop_sdk_installer update -h
   :cwd: ../../

.. warning::
   You must have setup the aiop SDK path, Cache path, setup your Ingenico VPNand connected to it, have a reference before you can run the command.
