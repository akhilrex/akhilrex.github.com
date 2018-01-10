---
layout: post
title: "How to check if a particular key exists in a JavaScript object or array?"
description: "How to check if a particular key exists in a JavaScript object or array?"
category: javascript
tags: [javascript , jquery, script]
---
{% include JB/setup %}


if you want to particularly test for properties of the object instance (and not inherited properties), use hasOwnProperty:

    obj.hasOwnProperty("key") // true

