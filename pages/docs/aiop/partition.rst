===========
declaration File
===========

Introduction
============

A declaration file describes which files will be selected to contribute to a Package and how they'll be transformed.

Some rules guide the creation of declaration files:

- A file not listed in a declaration file or part of a directory listed by a declaration file won't be present in the resulting Package

- Builder parses all directories of the *Reference*, there is no need to create an empty declaration file in all folders

- Multiple declaration file can be present in each folder. You can name it as you want, but it's recommended to use a name that describes the content of the declaration file


File structure
==============

.. literalinclude:: ../declaration_examples/all/.declaration
   :language: yaml
   :linenos:

Fields
------

:source:
   Path to the source file.

   It can be relative or absolute.

   It could be a directory, in that case, destination is the resulting folder name in the destination tree.

   Several pattern are available in order to indicate the origin of the source. It can be a relative file,
   local sdk file (with the prefix <sdk>), a repository or a basic remote file (with the prefix <url>).

   For .PAR sources of parameter, multiple sources can be merged by having each one separated by a |

   Example: "source: a.PAR|b.PAR"

   .. important::
      If the source does not exist you'll get an error.

:destination:
   Path to resulting file or directory in the destination tree.

:download_catalog:
   If set to true, the files in the catalog will be downloaded.
   Otherwise only the catalog (in the source) is downloaded.

   .. important::
      This field is only valid for catalogs in the source.

:compatibility:
   List of Key-value pairs as:

   - key: terminal targeted by this declaration in the from ``t3/self/2000`` or ``t3/self`` or ``t3``or ``all``
   - value: list of apps and contexts targeted by this key

   :apps:
      List of apps targeted by this declaration.
      You can specify all apps by using ``all``.
      ``all`` apps means that the declaration is compatible with all apps from the terminal family.


   :contexts:
      List of contexts targeted by this declaration.
      You can specify all contexts by using ``all``.
      ``all`` contexts means that the declaration is compatible with all contexts from the terminal family.

   :envs:
      Define the usage of the resulting Package, could either be ``dev`` (default) or ``prod``.
      You can specify all envs by using ``all``.

   .. important::
      The terminal target must be declared in the :doc:`inventory <./inventory>`.
      The terminal must be declared for this target in the inventory.
   .. important::
      Make sure when using ``all`` that the targeted apps or context are common to all terminals.
:authors:
    Email addresses of the authors of the file or directory on which the declaration is applied.

:executable:
    **[Optional]** Under Unix, define the execution right of the resulting file, ``true`` or ``false`` (default).


Examples
========

Local relative file
-------------------

Retrieve a file from the relative local file system.

E.g:

.. literalinclude:: ../declaration_examples/all/relative_local_file.declaration
   :language: yaml
   :linenos:

SDK relative file
-----------------

Retrieve a file from the relative sdk path.

Use the field ``download_catalog`` to download the catalog.

.. attention::
    The ``download_catalog`` field is only valid for catalogs retrieved in the sdk not remotly.

E.g:

.. literalinclude:: ../declaration_examples/all/download_catalog.declaration
   :language: yaml
   :linenos:

Fetch from a generic url server
-------------------------------

It's possible to fetch a file from a url using a special syntax.
In case we're trying to get a file from an url (no dependency manager specific), we can use a special notation in the source field in our declaration file.

The source pattern is as follow: ``<url>domain.com/file_path/filename.sh``

E.g:

.. literalinclude:: ../declaration_examples/remote_generic/.declaration
   :language: yaml
   :linenos:

Here the field ``executable`` is used because it is a shell script.

Fetch artifacts from repositories
---------------------------------

aiop is capable of fetching artifacts from different registry servers.
Here is the way to do it:

Fetch from an artifactory url server
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In order to fetch a artifactory resource from an Artifactory server you need a special prefix.
The prefix is `<repo:artifactory:COMPANY>` where `COMPANY` is either ingenico or worldline.

.. note::
   For now, only the Ingenico and Worldline Artifactory server is available.

The source pattern is as follow: ``<repo:artifactory:company>channel/architecture/APP/version/filename``

E.g:

.. literalinclude:: ../declaration_examples/all/nexus_url.declaration
   :language: yaml
   :linenos:

Fetch from an nexus url server
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Fetching a file from a nexus server is done in the same way as for an artifactory server.

.. note::
   For now, only the Ingenico Nexus server is available.

The source pattern is as follow: ``<repo:nexus:ingenico>channel/architecture/APP/version/filename``

E.g:

.. literalinclude:: ../declaration_examples/all/nexus_url.declaration
   :language: yaml
   :linenos:

Unzip a source file
-------------------

In case you want to unzip a source file, you can use the ``unzip`` field in your declaration file. The zipped source file will be unzipped in the destination folder.
In the destination, you must define the folder name where the unzipped files will be placed.

.. important::
    The destination must be a folder, i.e. ends with a ``/``. Otherwise an error will be raised.

.. important::
    The source file won't be present in the resulting Package.

E.g:
Here the files will be unzipped in the folder ``ssc``.

.. literalinclude:: ../declaration_examples/all/unzip.declaration
   :language: yaml
   :linenos:


Add the destination to a Catalog
--------------------------------

aiop is able to add the destination file(s) to a Catalog that is created at build. The name of the catalog is store in the field ``to_catalog``.
The catalog extention will be added automatically using the ``catalog_extension`` from the :doc:`inventory <./inventory>` and the target terminal from the command.
In case the source is a zip file the catalog will add the resulting files from the zip.

E.g:
Here the destination file will be added to the catalog ``c3_applications/apps.M94``.

.. literalinclude:: ../declaration_examples/all/to_catalog.declaration
   :language: yaml
   :linenos:

Here the unzipped files will be added to the catalog ``c3_applications/apps.M94``.

.. literalinclude:: ../declaration_examples/all/to_catalog_zip.declaration
   :language: yaml
   :linenos:

Merge multiple .PAR files
-------------------------

It's possible to merge multiple .PAR files into one unique file, the generated file contains data from all the files.
If multiple files define the same key the last file in the list override the others. All the sources files are defined at the same time, each one is separated by the token "|"

E.g:
Merging 2 different files in one

.. literalinclude:: ../declaration_examples/combine_par/.declaration
   :language: yaml
   :linenos:


E.g:
Here the declaration that have the most of the apps compared to the command line will be used.
If we run the command ``aiop build path t3/self/4000 cpa emv ssc vending_mdb --mode dev``

.. literalinclude:: ../declaration_examples/combine_par/most_restrictive_app.declaration
   :language: yaml
   :linenos:

Multiple compatibilities
------------------------

For tidier declarations, it is possible to define multiple compatibilities in one source declaration.
The `compatibility` field is a list, so you just have to list the systems compatible.

E.g:
Declaring a file for two different systems

.. literalinclude:: ../declaration_examples/multiple_compat/.declaration
   :language: yaml
   :linenos:

Generate a PDF file out of a Markdown file
------------------------------------------

A source Markdown file (with the extension ``.md``) can be converted to a PDF file if the destination file has the ``.pdf`` extension.
You can also combine multiple Markdown files into one PDF file by separating the source files with the token ``|``.

E.g:
Parsing a Markdown file into one PDF file

.. literalinclude:: ../declaration_examples/md_to_pdf/.declaration
   :language: yaml
   :linenos:

E.g:
Merging 2 Markdown files into one PDF file

.. literalinclude:: ../declaration_examples/md_to_pdf/combine.declaration
   :language: yaml
   :linenos:

.. warning::
   Only Markdown files with the extension ``.md`` can be converted to PDF files. Any other file will prompt an error. This includes when merging multiple files.

E.g:
The two following instructions will fails because the source file is not a Markdown file.

.. literalinclude:: ../declaration_examples/md_to_pdf/fail.declaration
   :language: yaml
   :linenos:

Generate for specific architecture
----------------------------------

If you want retrieve a source for a set of terminal architecture or terminal range you can specify it in the compatibility field.

E.g:
Here all the generated package for the range of self terminal will be generated.
You can also set up the compatibility field to ``t3`` to generate the package for all tetra models.
Don't forget that ``all`` is also a valid value for the compatibility field.

.. literalinclude:: ../declaration_examples/all/sub_terminal.declaration
   :language: yaml
   :linenos:

Generate for all terminals
--------------------------

When you want a file to be retrieved for all terminals use the ``all`` keyword.

.. Attention::
   Make sure when using ``all`` that the targeted apps and context are common to all terminals.
   Here all the terminal must at least have the payapp ``emv`` and the context ``evcharging`` in their inventory.

E.g:

.. literalinclude:: ../declaration_examples/all/all_terminals.declaration
   :language: yaml
   :linenos:



Generate for all apps or contexts
------------------------------------

When you want a file to be retrieved for all apps or contexts use the ``all`` keyword.

E.g:

Here if the apps compatible with the terminal is ``t3/self/4000`` are ``emv`` and ``ssc`` the  ``[all]`` is equivalent to ``[emv, ssc]``.
Similarly if the context compatible with the terminal is ``t3/self/4000`` are ``evcharging`` and ``vending_mdb`` the  ``[all]`` is equivalent to ``[evcharging, vending_mdb]``.

.. literalinclude:: ../declaration_examples/all/all_apps_contexts_envs.declaration
   :language: yaml
   :linenos:


declaration destination conflict resolution
======================================

When several instruction of the declarations wants the to generate the same file (in other words, destination is the same), the best instruction is used.
**How is the best instruction is chosen?**
The instruction that have the least symmetric difference of application compatible is choosen.


Resolve conflict depending on the application
---------------------------------------------

E.g:

Here aiop need to generate the file ``config`` but two instructions wants to generate it.
The only difference is the application compatible.

.. literalinclude:: ../declaration_examples/most_restrictive/config1.declaration
   :language: yaml
   :linenos:

.. literalinclude:: ../declaration_examples/most_restrictive/config2.declaration
   :language: yaml
   :linenos:


Build for 2 applications
^^^^^^^^^^^^^^^^^^^^^^^^

If we run the command

.. code-block:: shell

    aiop build path t3/self/4000 emv ssc vending_exe --mode dev

.. program-output:: aiop build declaration_examples/most_restrictive t3/self/4000 emv ssc vending_exe --mode dev --dryrun
   :cwd: ../

The two instructions are compatibles with the terminal and the apps but...
The instruction compatible with ``[emv, ssc]`` from the first instruction (the one with config1) is the best because it has the least symmetric difference of application compatible.
Indeed the difference between the target ``[emv, ssc]`` and the second instruction compatible application ``[ssc]`` have a symmetric difference of 1, it's ``[emv]``.

Build for 1 application
^^^^^^^^^^^^^^^^^^^^^^^

If we run the command

.. code-block:: shell

    aiop build path t3/self/4000 ssc vending_exe --mode dev

.. program-output:: aiop build declaration_examples/most_restrictive t3/self/4000 ssc vending_exe --mode dev --dryrun
   :cwd: ../

The two instructions are compatibles with the terminal and the apps but...
The instruction compatible with ``[ssc]`` from the second instruction (the one with config2) is the best because it has the least symmetric difference of application compatible.
Indeed the difference between the target ``[ssc]`` and the first instruction compatible application ``[emv, ssc]`` have a symmetric difference of 1, it's ``[emv]``.

Thus you can see that aiop is capable of choosing the best instruction to generate the file.


Resolve conflict depending on the system
----------------------------------------

E.g:

Here aiop need to generate the file ``config`` but two instructions wants to generate it.
The only difference is the terminal compatible.

.. literalinclude:: ../declaration_examples/most_restrictive_2/config1.declaration
   :language: yaml
   :linenos:

.. literalinclude:: ../declaration_examples/most_restrictive_2/config2.declaration
   :language: yaml
   :linenos:


Build for a specific terminal
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If we run the command

.. code-block:: shell

    aiop build path t3/self/4000 ssc vending_exe --mode dev

.. program-output:: aiop build declaration_examples/most_restrictive_2 t3/self/4000 ssc vending_exe --mode dev --dryrun
   :cwd: ../

Here the compatibility is the same between the two instructions but we want to generate the package for the terminal ``t3/self/4000`` so the declaration that is most specific is the first one.

Build for an other terminal
^^^^^^^^^^^^^^^^^^^^^^^^^^^

If we run the command

.. code-block:: shell

    aiop build path t3/self/2000 ssc vending_exe --mode dev

.. program-output:: aiop build declaration_examples/most_restrictive_2 t3/self/2000 ssc vending_exe --mode dev --dryrun
   :cwd: ../


Here the compatibility is the same between the two instructions but we want to generate the package for the terminal ``t3/self/2000`` so the declaration that is compatible is the second one.

Thus you can see that aiop is capable of choosing the best instruction to generate the file.