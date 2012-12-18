---
layout: post
title: "Create scrollable readonly textarea without using disabled"
description: "Create scrollable readonly textarea without using disabled"
category: fix
tags: [textarea, web development, internet explorer]
---
{% include JB/setup %}

It is a common practice for sites to use a disabled textarea as a container for "Terms and Conditions" at the end of forms. The text area provides a nice and easily configurable structure and it is disabled so that no one is able to modify the contents. Though this technique works in most of the good browsers, our "favorite" Internet Explorer acts in its own way in this situation. Apart from setting the text to be non-editable which was desired, it renders the text area un-scrollable. Which means that if the complete text in the text area is not visible, the visitor using IE will not be able to scroll and read it. This is highly undesirable.

I encountered this problem recently. Though there could be many css and javascript solution of this problem, the easiest one and the most sensible one is using the power of the _readonly_ attribute of text area. Instead of setting the text area as disable, you simply mark it as readonly. Now you have achieved both the requirements - the text area is uneditable as well as scrollable. The syntax to do this is very simple.

      <textarea readonly>Your awesome "Terms and Conditions here"<textarea>

If you want to try I have setup a small example <a href="http://jsfiddle.net/wBjg3/" target="_blank">here</a>
