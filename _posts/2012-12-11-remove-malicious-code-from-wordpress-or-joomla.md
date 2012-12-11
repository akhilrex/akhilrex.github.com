---
layout: post
title: "Remove Malicious code from Wordpress or Joomla"
description: ""
category: tutorial
tags: [joomla,wordpress,hacking, fix]
---
{% include JB/setup %}

Hacking of sites is not a new phenomenon. Every day thousands of sites get hacked and serve as vehicles for hackers to carry forward with their vicious plans. Out of these most of the hacks are executed by bots that crawl the internet to find websites/servers with exploits and vulnerabilities and harness them to inject malicious code or functionality into the site. Prime purpose for this is Black Hat SEO or get traffic but some do it just for fun. 

Recently some of my older sites that were built on Joomla (never use Joomla) were hacked where the hacker injected a piece of code into ever single php file of the application recursively. In this case manual cleaning and removal of code would amount to insane about of work and also is not feasible. I searched through the net and have found a nice php script that does the finding and removing very efficiently. It is a good quick start to recovery and gets rid of the malicious code very effectively. Following is the code that you can use. 

Just create a new php file on your server and paste this code in it. Change the 'Malicious Code' to the actual malicious code and execute the script.

__Disclaimer__: This script worked for me and might also work in most of the cases. Even then I would recommend that you take a backup of everything before executing. I shall not be liable or responsible for any damage or loss of data due to using this script.

	<?php 
	//Enter it as it is and escape any single quotes
	$find='Malicious Code';

	echo findString('./',$find);

	function findString($path,$find){
		$return='';
		ob_start();
		if ($handle = opendir($path)) {
			while (false !== ($file = readdir($handle))) {
				if ($file != "." && $file != "..") {
					if(is_dir($path.'/'.$file)){
						$sub=findString($path.'/'.$file,$find);
						if(isset($sub)){
							echo $sub.PHP_EOL;
						}
					}else{
						$ext=substr(strtolower($file),-3);
						if($ext=='php'){
							$filesource=file_get_contents($path.'/'.$file);
							$pos = strpos($filesource, $find);
							if ($pos === false) {
								continue;
							} else {
							//The cleaning bit
							echo "The string '".htmlentities($find)."' was found in the file '$path/$file and exists at position $pos and has been removed from the source file.<br />";
							$clean_source = str_replace($find,'',$filesource);
							file_put_contents($path.'/'.$file,$clean_source);
							}
						}else{
							continue;
						}
					}
				}
			}
			closedir($handle);
		}
		$return = ob_get_contents();
		ob_end_clean();
		return $return;
	}
	?>
