---
layout: post
title: "Database Backup Script"
description: "This is the script that is used to backup databases"
category: 
tags: [databse backup, utility, script, windows]
---
{% include JB/setup %}


Backing up and Restoring backups of databases are very common in any kind of project that involves databases. It is a common practice to take the backup of a database before you make any change to it. It is  important in the way that it allows you to restore the database back to its original state in case anything goes wrong. 

There are many ways to backup databases but the most common one is to run a database backup script that will take a backup of all the databases in the system excluding the system databases. Since the primary reason of maintaining this "geek" version of [akhil.me](http://akhil.me "my main blog") is to maintain a repository of such utility items. It makes sense for us to include this database backup script in the system. Please note that this script is written keeping MS SQL in mind but I am sure you can easily modify it to use with other RDBMS systems.


The file can be downloaded [here](/assets/files/db_backup.sql)


	DECLARE @name VARCHAR(50) -- database name 
	DECLARE @path VARCHAR(256) -- path for backup files 
	DECLARE @fileName VARCHAR(256) -- filename for backup 
	DECLARE @fileDate VARCHAR(20) -- used for file name

	SET @path = 'C:\Backup\' 

	SELECT @fileDate = CONVERT(VARCHAR(20),GETDATE(),112)

	DECLARE db_cursor CURSOR FOR 
	SELECT name 
	FROM master.dbo.sysdatabases 
	WHERE name NOT IN ('master','model','msdb','tempdb') 

	OPEN db_cursor  
	FETCH NEXT FROM db_cursor INTO @name  

	WHILE @@FETCH_STATUS = 0  
	BEGIN  
	       SET @fileName = @path + @name + '_' + @fileDate + '.BAK' 
	       BACKUP DATABASE @name TO DISK = @fileName 

	       FETCH NEXT FROM db_cursor INTO @name  
	END  

	CLOSE db_cursor  
	DEALLOCATE db_cursor



