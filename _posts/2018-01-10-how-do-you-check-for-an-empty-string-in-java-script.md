---
layout: post
title: "How do you check for an empty string in JavaScript?"
description: "How do you check for an empty string in JavaScript?"
category: javascript
tags: [javascript , jquery, script]
---
{% include JB/setup %}


For checking if a string is empty, null or undefined I use:

    function isEmpty(str) {
        return (!str || 0 === str.length);
    }
For checking if a string is blank, null or undefined I use:

    function isBlank(str) {
        return (!str || /^s*$/.test(str));
    }
For checking if a string is blank or contains only white-space:

    String.prototype.isEmpty = function() {
        return (this.length === 0 || !this.trim());
    };

