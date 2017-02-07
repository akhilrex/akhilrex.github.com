---
layout: post
title: "How to reload page using plain javascript without jQuery"
description: "How to reload page using plain javascript without jQuery"
category: javascript
tags: [javascript , jquery, script]
---
{% include JB/setup %}

Sometimes you need to reload/refresh the webpage using javascript. You can do that without using a library like jQuery


    // plain javascript
    window.location.reload();

    // another method
    window.location.href=window.location.href;
    
    // one more if you like to be fancy
    history.go(0);
    
	
