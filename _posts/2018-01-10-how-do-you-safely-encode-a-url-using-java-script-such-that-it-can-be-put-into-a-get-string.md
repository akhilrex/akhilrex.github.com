---
layout: post
title: "How do you safely encode a URL using JavaScript such that it can be put into a GET string?"
description: "How do you safely encode a URL using JavaScript such that it can be put into a GET string?"
category: javascript
tags: [javascript , jquery, script]
---
{% include JB/setup %}


You can use the built-in function encodeURIComponent(str) and encodeURI(str).


    var myOtherUrl = 
         "http://example.com/index.html?url=" + encodeURIComponent(myUrl);

