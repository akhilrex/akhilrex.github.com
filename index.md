---
layout: page
---
{% include JB/setup %}

<div class="posts">
  {% for post in site.posts %}
	<div>
	<a href="{{ BASE_PATH }}{{ post.url }}"><h3>{{ post.title }}</h3></a>
	<span>{{ post.date | date_to_string }}</span>
	<br/>	<br/>
	<div>{{post.content}}</div>
	</div>
	<script type="text/javascript">
    google_ad_client = "ca-pub-3038637209475832";
    google_ad_slot = "3145966558";
    google_ad_width = 320;
    google_ad_height = 50;
</script>
<!-- Social India Small footer -->
<script type="text/javascript"
src="//pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
  {% endfor %}
</div>



