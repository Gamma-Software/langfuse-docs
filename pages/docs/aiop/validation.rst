Validation
----------

This page will explain how to write a validation script for the aiop to understand.

This is pretty straightforward. The validation script is a Python script and aiop will provide you a sample validation script to get you started.

.. note::
   If your reference package does not have a validators folder, the validate command will first create the folder then ask you if you want to add a sample validation script.

Your first Validation Script
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The sample validation script is located in the `validator` folder of the reference package.

Follow the TODOs in the sample validation script to add your own validation scripts:

(In the __init__.py file)

.. literalinclude:: ../../aiop_tools/resources/validators/__init__.py
   :language: python

#. Import the validators to be executed

#. List the validators to be executed

#. Give them a name


(In the sample_validator.py file)

.. literalinclude:: ../../aiop_tools/resources/validators/sample_validator.py
   :language: python
   :name: sample_validator

#. Rename the `sample_validator.py` filename

#. Rename the `Sample` Class name

#. Rename the `validator_name` variable

#. Implement the abstract methods

    * `before_run()` is called before the validation script is run

    * `run()` is called to run the validation script

    * `after_run()` is called after the validation script is run

#. Raise a ValidatorException if the validation fails. It can be raised in any of the methods above.

.. important::
    Do not modify the `result_file = sys.argv[1]` line, otherwise the validation script will not work.