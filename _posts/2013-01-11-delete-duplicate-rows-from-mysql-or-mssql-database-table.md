---
layout: post
title: "Delete duplicate rows from MSSQL or MySql database table"
description: "Delete duplicate rows from MSSQL or MySql database table"
category: tutorial
tags: [databse , utility, script]
---
{% include JB/setup %}

This is a very simple and efficient sql script that will help you delete duplicate entries from your sql databases. This is known to work well on MySQL and MSSQl but I am sure it will work well on any RDBMS system. You simply replace the column names with the ones which decide if the records are getting duplicated, table name and primary key identifier.


 DELETE FROM [TABLENAME] WHERE PRIMARYKEY NOT IN 
  (SELECT Min(PRIMARYKEY) FROM [TABLENAME] GROUP BY COLUMN1,COLUMN2,COLUMN3...)


Lets take an example. Assuming you have a table called *Students* with columns *Name, Email, DOB *and *FatherName*. This table has an integer primary key column named *Id*. If you want to remove all but  1 entries for the rows where the Name and Email are same the query would be

 DELETE FROM Students WHERE Id NOT IN 
  (SELECT Min(Id) FROM Students  GROUP BY Name,Email)


Note: I recommend that you always take a backup of the data before you run any command that deletes any rows. Its a very good habit and saves a lot of hassles in case something goes wrong.
