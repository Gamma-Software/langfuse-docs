Post Scripts
============

This page will explain how to write a post_script script for aiop to understand.

This is pretty straightforward. The post_script script is a Python script and aiop will provide you a sample validation script to get you started.

The post_script script are located in the post_scripts folder of you reference package and are executed after the package is built. It is executed in the same environment as the package is built in. This means that you can use the same Python libraries that you used to build the package.

Post Scripts also have access to the data from the build.

.. note::
   aiop will create a `.post_script_report` to report the build modifications done by the post scripts. So that you can track the changes done by the post scripts.

The following documentation will explain how to write a post_script script and what are the available methods and data that comes with.


Your first Post Script
----------------------

The post_scripts folder is located in the root of your reference package. It contains a ``__init__.py`` file and the post_scripts ``*.py`` Python files.

| ref_package
| ├── post_scripts
| │   ├── __init__.py
| │   ├── post_script_1.py
| │   └── post_script_2.py
| └── .declaration

Root module
^^^^^^^^^^^

Follow the TODOs in the post_script sample script to add your own validation scripts:

.. literalinclude:: ../../aiop_tools/resources/post_scripts/__init__.py
   :language: python
   :caption: post_scripts/__init__.py

#. Import the post_scripts to be executed

#. List the post_scripts to be executed

#. Give them a name

Post Script
^^^^^^^^^^^

.. literalinclude:: ../../aiop_tools/resources/post_scripts/sample_post_scripts.py
   :language: python
   :name: post_scripts
   :caption: post_scripts/post_script_*.py

#. Rename the `Sample` Class name

#. Implement the abstract methods

   * `check_validity()` is called before everything else to check if the post_script should be executed

   .. program-output:: python -c "import aiop_tools.post_scripts.abstract_post_scripts as sample; help(sample.AbstractPostScripts.check_validity)"
      :cwd: ../..

   * `before_run()` is called before the validation script is run

   .. program-output:: python -c "import aiop_tools.post_scripts.abstract_post_scripts as sample; help(sample.AbstractPostScripts.before_run)"
      :cwd: ../..

   * `run()` is called to run the validation script

   .. program-output:: python -c "import aiop_tools.post_scripts.abstract_post_scripts as sample; help(sample.AbstractPostScripts.run)"
      :cwd: ../..

   * `after_run()` is called after the validation script is run

   .. program-output:: python -c "import aiop_tools.post_scripts.abstract_post_scripts as sample; help(sample.AbstractPostScripts.after_run)"
      :cwd: ../..

#. Raise a PostScriptsException if the poste script fails. It can be raised in any of the methods above.

#. The post scripts comes with data from the build. The following data are available:

   * self.data.playbook_path: is the path to the reference package

   * self.data.target: is the target to build

   .. program-output:: python -c "import aiop.target as target; help(target.SystemTarget.__init__)"
      :cwd: ../..

   * self.data.loaded_declarations: is the list of declarations loaded

   .. program-output:: python -c "import aiop.declaration.declaration as declaration; help(declaration.declaration.__init__)"
      :cwd: ../..

   * self.data.package_path: is the path to the package

   * self.data.setup_version: is the setup version data

Real world example
------------------

Now let's look at a real world example of a post_script script.

The following post_script script will check if the package contains a ``TRACE_IP.TXT`` file and then dynamically update the IP parameter of the current local IP address of the DEV/QA computer.

Context
^^^^^^^

For the context, the ``TRACE_IP.TXT`` is a configuration file that configures the trace server in the Ingenico Terminal to redirect the traces to the IP configured.
So every time the DEV/QA computer changes IP, the ``TRACE_IP.TXT`` file needs to be updated. aiop and the post scripts will take care of that.

Code
^^^^

Here is the post script script:


.. literalinclude:: ../../aiop_tools/resources/post_scripts/real_sample_post_scripts.py
   :language: python
   :caption: post_scripts/update_ip.py


Explanation
^^^^^^^^^^^^

* import

First it imports the necessary libraries like ``import re, socket``.

* check_validity()

   Then in the ``check_validity()`` method, it checks if the ``TRACE_IP.TXT`` file exists in the package.
   It does it by iterating over the declarations taken into account for the package and check if the destination is ``TRACE_IP.TXT``.
   If it does, it returns True, otherwise it returns False.
   So if the ``TRACE_IP.TXT`` file is not in the package, the post script will not be executed.

* before_run()

   Is skipped by returning `True` because it is not needed.

* run()

   In the ``run()`` method, it will update the IP address of the ``TRACE_IP.TXT`` file.
   It reads the file and then uses the ``re`` library to replace the IP address with the current IP address of the DEV/QA computer.
   The current IP address is retrieved using the ``socket`` library.
   Then it writes the file back.

* after_run()

   Is skipped by returning `True` because it is not needed.