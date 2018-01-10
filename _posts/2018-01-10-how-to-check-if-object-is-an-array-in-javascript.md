---
layout: post
title: "How to check if object is an array in Javascript"
description: "How to check if object is an array in Javascript"
category: javascript
tags: [javascript , jquery, script]
---
{% include JB/setup %}


First check if your js implementation supports isArray:

    if (Array.isArray)
        return Array.isArray(v);
    
You could also try using the instanceof operator

    v instanceof Array
