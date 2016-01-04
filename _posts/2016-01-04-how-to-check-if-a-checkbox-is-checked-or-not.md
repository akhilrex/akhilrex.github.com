---
layout: post
title: "How to check if a checkbox is checked or not using jquery/javascript"
description: "Disable or block popup ads from websites"
category: tutorial
tags: [javascript , hack, jquery]
---
{% include JB/setup %}

Use this simple code to check if a checkbox is checked or not using jquery/javascript

### Using simple javascript

	<script type="text/javascript">
	   if(document.getElementById('idOfCheckbox').checked) {
			//checkbox is checked
		} else {
			//checkbox is not checked
		}
	</script>
	
	
### Using jquery


	<script type="text/javascript">
	   if($('#idOfCheckbox').prop('checked')) {
			//checkbox is checked
		} else {
			//checkbox is not checked
		}
	</script>