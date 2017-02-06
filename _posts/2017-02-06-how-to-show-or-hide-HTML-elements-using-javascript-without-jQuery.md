---
layout: post
title: "How to show or hide HTML elements using javascript without jQuery"
description: "How to show or hide HTML elements using javascript without jQuery"
category: javascript
tags: [javascript , jquery, script]
---
{% include JB/setup %}

Sometimes you need to show and hide HTML elements using javascript. Ideally jQuery makes is very easy to do so but sometimes jquery is overkill if this is all you have to do. Use following code to accomplish this plain javascript.


    // select the element by its id
	var elem = document.getElementById('idOfTheElement');

    // following line shows the element
    elem.style.display = 'block';
    
    // following line hides the element.
    elem.style.display = 'none';
    
	
