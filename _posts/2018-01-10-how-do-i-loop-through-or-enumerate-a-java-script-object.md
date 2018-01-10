---
layout: post
title: "How do I loop through or enumerate a JavaScript object?"
description: "How do I loop through or enumerate a JavaScript object?"
category: javascript
tags: [javascript , jquery, script]
---
{% include JB/setup %}


You have to use the for-in loop


    for (var prop in p) {
        if (!p.hasOwnProperty(prop)) {
            //The current property is not a direct property of p
            continue;
        }
        //Do your logic with the property here
    }

