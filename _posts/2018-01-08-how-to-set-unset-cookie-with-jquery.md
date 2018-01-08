---
layout: post
title: "How to set/unset cookie with jquery"
description: "How to set/unset cookie with jquery"
category: javascript
tags: [javascript , jquery, script]
---
{% include JB/setup %}

Use the plugin:

https://github.com/carhartl/jquery-cookie

You can then do:

      $.cookie("test", 1);
      To delete:

      $.removeCookie("test");
      Additionally, to set a timeout of a certain number of days (10 here) on the cookie:

      $.cookie("test", 1, { expires : 10 });
      If the expires option is omitted, then the cookie becomes a session cookie, and is deleted when the browser exits.

	
