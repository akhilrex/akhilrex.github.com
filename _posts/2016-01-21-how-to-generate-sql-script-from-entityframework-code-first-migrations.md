---
layout: post
title: "How to generate sql script from Entity Framework code first migrations"
description: "How to generate sql script from Entity Framework code first migrations"
category: database
tags: [entityframework , sql, script]
---
{% include JB/setup %}

Just run the following command in the nuget package manager. This will generate the complete sql script for your migrations. This script would even work if some migrations have already been run on your database.



	Update-Database -Script -SourceMigration:0
	
	

