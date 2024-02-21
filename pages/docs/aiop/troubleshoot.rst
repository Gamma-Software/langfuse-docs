Troobleshoot
------------

Build command fail
~~~~~~~~~~~~~~~~~~
Make sure you correctly set your Artifactory Api Key, you can check in environment variable that ``API_ARTIFACTORY_KEY`` exists. If not go to Artifactory and generate a new one then add it as environment variable

Other issues
~~~~~~~~~~~~
Make sure you have the last version of aiop by running the following command :

.. code-block:: shell

    pip install aiop -U & aiop_installer


If you are still facing issues ask for help on the `aiop Slack Channel`_ or create an issue on `Gitlab Issue`_.

.. _Gitlab Issue: https://gitlab.com/leap_tech/aiop-group/aiop/-/issues/new
.. _aiop Slack Channel: https://bambora.slack.com/archives/C04ANUUMWGL