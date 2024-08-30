---
layout: home
include_in_nav: true
---

{% assign portfolio_items = site.pages | where_exp:"item", "item.path contains 'portfolio/'" | sort: "display_order" %}
{% assign portfolio_tags = site.pages | map: "tags" | uniq %}

<div class="portfolio_tags center">
	<strong>Filter by:</strong>
	{%- for tag in portfolio_tags -%}
	<a class="tag" href="">{{ tag }}</a>
	{%- endfor -%}
<div>

<div class="portfolio_gallery center">
    {%- for item in portfolio_items -%}
    <div class="portfolio_item">
	     <div class="gallery_card">
	      	<a href="{{ item.permalink }}" data-fancybox="gallery" data-caption="Thumbnail image for {{ item.title }}">
		      	<div class="gallery_card_top">
		      		<img class="thumbnail" src="{{ item.thumbnail_image }}"/>
		      	</div>
		      	<div class="gallery_card_bottom">
		      		<div class="page_title"> {{ item.title }} </div>
		      	</div>
	      	</a>
	      </div>
		  </div>
    {%- endfor -%}
</div>