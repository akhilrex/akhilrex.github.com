---
layout: post
title: "Disable or block popup ads from websites"
description: "Disable or block popup ads from websites"
category: tutorial
tags: [popup , ads, block]
---
{% include JB/setup %}

There are a lot of sites on the internet that will show a popup ad for any and everyway you interact with them. They will even show a popup if you click somewhere in the empty space. Not only are these ads extremely annoying but these are mostly powered by shady ad providers who do very little to control the quality of their ads. This means these popucs could be anything - malicious, offensive or pornographic. Although the inbuilt popup blocker of chrome is very efficient some sites are still able to bypass it. I have a neat trick for such sites. For the case of example I am going to use <a href="#" target="_blank">http://songspk.name</a> since is the most spammy site that I know. Please note that I do not promote the use of this or such sites and recommend that you do not pirate music. 

1. Open the site that you want to use <a href="#" target="_blank">http://songspk.name</a> in our case.
2. Hit F12 or right click anywhere in the empty space and select "Inspect Element".
3. A small box will open in the bottom of the window. In the bottom right corner of a window you will see a "gear" icon. Click it.
4. It will open another secondry window inside the previous window. 
5. In this window under the "General" tab you will see an unselected checkbox (tick box). Mark the box as selected and that will disable all the javascript on the page.
6. Now you can enjoy the website without worrying about the popups.

Now this process might disable some other features of the website as well but if the site has been developed logically and syntactically everything should work fine. In case the site does not work as you had expected you can always revert back using the exact same process. For more clarity check out the screenshots below

![Open Web Developer Console](/assets/files/img/inspect.JPG "Open Web developer console")

![Disable Javascript](/assets/files/img/disable.JPG "Disable Javascript")