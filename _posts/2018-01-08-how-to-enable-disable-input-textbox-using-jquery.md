---
layout: post
title: "How to disable/enable input/textbox using jQuery"
description: "How to disable/enable input/textbox using jQuery"
category: javascript
tags: [javascript , jquery, script]
---
{% include JB/setup %}

# jQuery 1.6+

To change the disabled property you should use the .prop() function.

      $("input").prop('disabled', true);
      $("input").prop('disabled', false);
      
# jQuery 1.5 and below

The .prop() function doesn't exist, but .attr() does similar:

Set the disabled attribute.

      $("input").attr('disabled','disabled');
To enable again, the proper method is to use .removeAttr()

      $("input").removeAttr('disabled');
    
	
