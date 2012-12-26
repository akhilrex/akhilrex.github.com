---
layout: post
title: "Add smooth scrolling 'back to top' button on site with jQuery"
description: "Add smooth scrolling back to top button on site with jQuery"
category: utility
tags: [html, javascript, tips, jQuery]
---
{% include JB/setup %}

Many websites, particularly blogs, that require a lot of scrolling to be read completely now contain a "Go to top" or "Scroll to top" feature. I am particularly fond of this feature as it enhances the usability of the site and saves a lot of time. I myself have added this feature to a lot of sites. It is a very easy implementation and you can easily add a "Scroll to top" button on your website using jQuery and CSS. No extra plugins required and i works across all browsers. You just need to include the following code in your website and your "Back to top" button would work easily.

###Javascript Code

	$(document).ready(function(){
		 $('body').append('<div id="toTop">^ Back to Top</div>');
			$(window).scroll(function () {
				if ($(this).scrollTop() != 0) {
					$('#toTop').fadeIn();
				} else {
					$('#toTop').fadeOut();
				}
			});   
	});    
	
###CSS Code

	#toTop
	{
		width: 100px;
		border: 2px solid #f7f7f7;
		background: #f7f7f7;
		text-align: center;
		position: fixed;
		bottom: 10px;
		right: 10px;
		cursor: pointer;
		display: none;
		color: #333;
		font-family: verdana;
		font-size: 11px;
		opacity: 0.6;
		filter: alpha(opacity=60);
		-webkit-border-radius: 30px;
		-moz-border-radius: 30px;
		-o-border-radius: 30px;
		border-radius: 20px;
		-webkit-transition: all .25s linear;
		-moz-transition: all .25s linear;
		-o-transition: all .25s linear;
		transition: all .25s linear;
		padding: 5px;
	}
	#toTop:hover
	{
		background: #b3b3b3;
		border: 2px solid #b3b3b3;
	}​
	​


Needless to say, with basic understanding of HTML and CSS you can customize the look and feel of the button. In case you want to add a fancy image instead of simple button you can easily customize the code to make that work. Feel free to catch me on twitter in case you feed any clarification.


