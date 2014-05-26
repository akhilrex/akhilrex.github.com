---
layout: post
title: "Disable / prevent embedding of website page in an iFrame"
description: "Disable or block popup ads from websites"
category: tutorial
tags: [javascript , hack, protect]
---
{% include JB/setup %}

There are a lot of sites on the internet that will use/embed your content using iFrames. In case you do not want people to do that you can prevent it using this simple javascript code. What this code will do is that it will redirect the page embedding your page to your page only. :)

All you have to do is just include this piece of code in the page you want to prevent from embedding.


	<script type="text/javascript">
	   function noiFrame() {
        try {
            if (window.top !== window.self) {
                document.write = "";
                window.top.location = window.self.location;
                setTimeout(function() {
                    document.body.innerHTML = '';
                }, 0);
                window.self.onload = function() {
                    document.body.innerHTML = '';
                };
            }
        } catch (err) {
        }
    }
    noiFrame();
	</script>
