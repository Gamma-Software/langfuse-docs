==============
Inventory File
==============

Introduction
------------

The inventory file is a yaml file and lists all architectures flavours of the terminal models.
Only on inventory exists for a *reference package*. :ref:`vocabulary <voca>`

It also detail the applications and contexts of each terminal models for the different architectures.

File structure
--------------

This is one example of an inventory file:

.. literalinclude:: ../declaration_examples/valid/.inventory
   :language: yaml
   :linenos:


Fields
------

:architecture:
    The terminal architecture (``t2`` or ``t3``...).
:model_range:
    The terminal range (``self`` or ``open``...).
:model:
    Detail of model compatibility  (``2000`` or ``4000``...).
:catalog_extension:
    The catalog extension depending of the terminal (``M90`` or ``M92``...).
:apps:
    application compatible (``ams`` or ``ame`` or ``emv`` or ``ssc`` or ``cpa``)
:contexts:
    Context compatible (``evcharging`` or ``vending`` or ``parking`` or ``transport``).
:envs:
    envs compatible (``dev`` or ``prod`` or ``bench`` or ``test``).
