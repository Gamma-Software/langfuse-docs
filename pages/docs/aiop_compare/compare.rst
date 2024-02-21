=======
Compare
=======

The `aiop_compare` command allows you to compare the content of 2 packages.

.. note:: The comparator will compare the tree folder of the packages and the content of the files.

.. code-block:: shell

   aiop_compare --help

.. program-output:: aiop_compare --help

You can compare 2 packages built by different commits or 2 packages built by the same commit but with different parameters.

Compare by commit
-----------------

Comparing 2 packages built by different commits is done by running the following command:

.. code-block:: shell

   aiop_compare compare_by_commit--help

.. program-output:: aiop_compare compare_by_commit --help

You have to specify the 2 commits you want to compare first and then give the same parameters as you would build the packages.

For instance you can compare with the following command:

.. code-block:: shell

   aiop_compare compare_by_commit 8e002928917d4d1f4fc0054fbaa936388e20d98d 655f3d9e8980fb7a4f7b97136bb0e19497507522 <path_to_ref> t3/self/2000 cpa vending_c3

The `save_diff` parameter is optional and will save the difference report in a file.

.. note:: The tool will raises an error if the reference path does not exist, if the commits does not exists or if the packages cannot be created.

This is the steps that will be performed by the tool:

#. Make a copy of the reference package in a temp folder
#. Checkout the first commit A
#. Build the package A
#. Checkout the second commit B
#. Build the package B
#. Run the diff command on the two packages and print the result
#. Remove the temp folder


Compare by configuration
------------------------

Comparing 2 packages built by different configuration is done by running the following command:

.. code-block:: shell

   aiop_compare compare_by_config--help

.. program-output:: aiop_compare compare_by_config --help

You have to give the same parameters as you would build the packages then add the optional extra parameters that will be compared of.
You can add as much extra parameters as you want.


Compare terminals
^^^^^^^^^^^^^^^^^

For instance you can compare two different terminals (the t3/self/2000 and t3/self/4000) with the following command:

.. code-block:: shell

   aiop_compare compare_by_config <path_to_ref> t3/self/2000 cpa vending_c3 --compare_terminal_type t3/self/4000


Compare apps
^^^^^^^^^^^^

You can compare two different apps (the cpa and ssc) with the following command:

.. code-block:: shell

   aiop_compare compare_by_config <path_to_ref> t3/self/2000 cpa vending_c3 --compare_apps ssc

Compare terminals and apps
^^^^^^^^^^^^^^^^^^^^^^^^^^

You can compare two differents configurations such as terminals and apps (the t3/self/2000 cpa and t3/self/4000 emv) with the following command:

.. code-block:: shell

   aiop_compare compare_by_config <path_to_ref> t3/self/2000 cpa vending_c3 --compare_terminal_type t3/self/4000 --compare_apps emv

The `save_diff` parameter is optional and will save the difference report in a file.

.. note:: The tool will raises an error if the reference path does not exist, if no compare configs are given or if the packages cannot be created.

This is the steps that will be performed by the tool:

#. Build the package A with config given
#. Build the package B with the compared config
#. Run the diff command on the two packages and print the result
#. Remove the temp folder



Comparison report
-----------------

The comparison report is a text file that contains the differences between the 2 packages.

In order to generate the report you have to add the `save_diff` parameter to the command.

Here is an example of a difference report:

.. include:: compare.txt
   :literal:


