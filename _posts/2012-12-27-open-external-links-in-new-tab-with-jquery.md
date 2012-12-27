---
layout: post
title: "Open external links in new tab with jQuery"
description: "Open external links in new tab with jQuery"
category: utility
tags: [jQuery, javascript, SEO]
---
{% include JB/setup %}

Be it writing a blog post or simply creating a website sometimes one has to add links of external sites to his web page. These could be reference posts to the current posts, links to external entities being talked about or even links to partner sites. It is a good practice to add external links in such a way that they open in a nw tab/window when clicked. This helps you in retaining your visitor without the risk of him not coming back once the reaches the external site. 

One way of doing this is by being extra cautious at the time of adding the link and setting its _target_ attribute to _'\_blank'_ so that it opens in a new tab. An easier and extremely convenient approach would be to add a small piece of javascript to the website that automatically identifies external links and updates them to open in a new tab. Following is the javascript snippet that can be used to achieve this

	jQuery(function($){
	    //Replace your domain name here
		var domain="geek.akhil.me";    
		
		//Takes care of http
		$('a[href^="http://"]')
			.not('[href*="'+domain+'"]')
			.attr('target','_blank');
			
		//Takes care of https	
		$('a[href^="https://"]')
			.not('[href*="'+domain+'"]')
			.attr('target','_blank');
	});​


This code uses jQuery and just needs to be placed in the site and it will start working. Just change the domain name to your domain name.
