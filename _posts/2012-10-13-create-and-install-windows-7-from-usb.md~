---
layout: post
title: "Create and Install Windows 7 from USB"
description: ""
category: tutorial
tags: [windows, tutorial, usb]
---
{% include JB/setup %}

I know there are multiple ways to get this done and the internet is full of resources that will teach you how to do it but I am making this entry so that I know where to come back to whenever I have to create a new Windows 7 Bootable USB.

1. Open the command prompt in "administrator mode"
2. DISKPART
3. LIST DISK
4. SELECT DISK 1 (here disk 1 is the name of the USB drive)
5. CLEAN
6. CREATE PARTITION PRIMARY
7. SELECT PARTITION 1
8. ACTIVE
9. FORMAT FS=NTFS
10. ASSIGN
11. EXIT
12. Using the command prompt only navigate to the Windows DVD or the Windows ISO
13. Navigate into the Boot folder
14. D:/BOOT/BOOTSECT.EXE /NT60 U:
15. Copy the content of the DVD on to the USB

And you are done :) 
