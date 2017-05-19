---
layout: post
title: "How to open new page or redirect to a new page using plain javascript without jQuery"
description: "How to open new page or redirect to a new page using plain javascript without jQuery"
category: javascript
tags: [javascript , jquery, script]
---
{% include JB/setup %}

Sometimes you need to open a new page or redirect to a webpage using javascript. You can do that without using a library like jQuery


    // plain javascript
    window.location.replace("http://geek.akhil.me");


    // another method
    window.location.href = "http://geek.akhil.me";
    
    // if you are insistent on using jquery
    $(location).attr('href', 'http://geek.akhil.me')
    
	
