---
layout: post
title: "How to disable right click on images using jQuery"
description: "How to disable right click on images using jQuery"
category: tutorial
tags: [jquery, user experience, javascript]
---
{% include JB/setup %}

Many a times I get requests from clients and fellow developers that they want to secure the images on their sites and prevent people from downloading or saving them. Most of them want us to update the site so that no one can right click and save the images or drag the images on to their desktops or applications like Photoshop. My first response to such requests is __DON'T__. Not only does this degrade the user experience, it could be extremely annoying to many users. Many of the users might think that your site is malfunctioning or is infected. Also any kind of script that you might be using can be rendered useless by simply disabling javascript in the browser. 

Even then a lot of people still insist that the script should be added to their site. So here is the script that will disable right clicking and dragging on images. Please note that this script uses jQuery and will only work if jQuery is added.

	<script type="text/javascript">
		$(document).ready(function(){
              // this part disables the right click
			$('img').live('contextmenu', function(e) {
				return false;
			}); 
             //this part disables dragging of image
			$('img').live('dragstart', function(e) {
				return false;
			}); 

		});
	</script>

You can test the code <a href="http://jsfiddle.net/7RYB2/" target="_blank">here</a>

If you know a little bit of jQuery and css-selectors you can see that you can easily modify this script to disable/enable right click and dragging on any kind of HTML element. You can specifically disable right click on images with a special class or children of a specific element.
I would again repeat that I do not recommend using this script if it can be avoided.
