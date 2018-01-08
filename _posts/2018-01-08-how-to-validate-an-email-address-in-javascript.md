---
layout: post
title: "How to validate and email address in javascript without jQuery"
description: "How to validate and email address in javascript without jQuery"
category: javascript
tags: [javascript , jquery, script]
---
{% include JB/setup %}

You can use the following regex (regular expression) to validate if a string is a valid email addredd or not.


    function validateEmail(email) {
     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email.toLowerCase());
    }
    
    validateEmail('asdf@gmail.com');
    // returns true
    
    validateEmail('wrong@email@com');
    // returns false
    
	
