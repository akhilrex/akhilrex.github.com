---
layout: post
title: "My First jQuery plugin - PageQR"
description: "This is a very lightweight and easy to use jQuery plugin which will add a small QR code of the current page url and add it at the corner of the page"
category: utility
tags: [jquery, plugin]
---
{% include JB/setup %}

I just released my first open source jQuery plugin. Many a time I feel the need to open the webpage that I am browsing on my mobile phone. Usually I simply email the url of the page to myself and check the mail on my phone and open the link there. Then I installed a browser plugin that would create a QR code for the current page at the click of a button and I can scan that the page is open on the phone. Having done this quite a lot of time I felt that it makes sense for a website to have such a provision that whenever a page is being browsed it should have a QR code corresponding to that page url. Potential use cases for this plugin are

1. Extremely useful during development of responsive design or checking the responsiveness of a webpage
2. Reduce the time in opening the page on mobile device.

To fulfill this requirement I wrote a simple jQuery plugin that when added to the page will automatically add a QP code of the url to the page in a very unobtrusive manner (Example [here](http://geek.akhil.me/jquery.pageqr.js/)) The plugin comes with a variety of useful options using which you can easily customize the behavior of the plugin. You can download the plugin from [github here](https://github.com/akhilrex/jquery.pageqr.js) and the detail page for the project can be found [here](http://geek.akhil.me/jquery.pageqr.js/).

In case you have a feedback or have a suggestion please get in touch with me [here](http://twitter.com/akhilrex)
