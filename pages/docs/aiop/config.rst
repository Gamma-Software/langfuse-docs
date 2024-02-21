=============
Configuration
=============

Introduction
------------

aiop's behaviors can be modified using its configuration file. It's a YAML file divided in sections.

This file is located in the aiop's data folder. By default, it's located in ``${HOME}/.aiop/aiop.yml``.
If you don't find it, simply run `aiop` in the console and it will be created with default values.

Configurable behaviors
----------------------

Configure the automatic "check for updates"
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Use the key ``check_update`` to enable or disable the automatic check for updates on each aiop's command (default is true):

.. literalinclude:: ../../tests/unit/data/config_files/check_update.yaml
   :language: yaml
   :linenos:

Configure the build timeout
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Use the key ``build_timeout`` to change the default timeout on the build command (default is 15 minutes):

.. literalinclude:: ../../tests/unit/data/config_files/build_timeout.yaml
   :language: yaml
   :linenos: