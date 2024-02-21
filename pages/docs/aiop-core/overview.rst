========
Overview
========

Pre-checks
----------

For any given commands below aiop will check the configuration of the tool and check if the servers can be pinged.
It will prompt warning.

Command line example
--------------------

To build a package for dev purposes installing the ssc application and in vending context:

.. code-block:: shell

   aiop build path/to/ref t3/self/2000 ssc vending --mode dev

To check that the edit you made did not break the reference

.. code-block:: shell

   aiop validate path/to/ref

Build Command
-------------
The Cast command allows you to generate a Package from a Reference.

.. code-block:: shell

    aiop build path/to/ref t3/self/2000 ssc vending

.. program-output:: aiop  build --help
   :cwd: ../../

Validate Command
----------------

After changing files in the Reference and before committing you need to make sure all the .declarations files are still valid by running the following command:

.. code-block:: shell

    aiop validate /path/to/ref

.. program-output:: aiop  validate --help
   :cwd: ../../

The validate command will also execute the validation scripts in the reference package.

It will look for a validators folder in the root reference package path and execute all the scripts in that folder then print the results.

For details on how to write a validation script see `validation` section.

Test Command
------------

.. warning:: This command is not yet implemented

After building a package we can run test to make sure everything is working as expected, the test is run on the default package folder

.. code-block:: shell

    aiop test


Apply Changes Command
---------------------

.. warning:: This command is not yet implemented

If you edit files in the built package and you want to propagate these changes back to the Reference you can run the following command:
It will copy all files that changed since the build instantiation back to the Reference
If you only want to see the change without actually copying the file you can add '''-dryrun''' flag to the command


.. code-block:: shell

    aiop apply_changes path/to/ref


.. code-block:: shell

    aiop apply_changes path/to/ref --dryrun

Stats Command
-------------

aiop stores some statistics about the packages it builds, you can access them by running the following command:

.. code-block:: shell

    aiop stats

It will display you in a table some statistics such as the number of packages built, success rate, average build time, total build time.
The stats are stored in the aiop folder.

.. note:: The stats will be more detailed in the future