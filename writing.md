---
layout: base
title: Writing Portfolio
permalink: /writing
include_in_nav: true
---

# Writing Portfolio
Maybe there's some stuff here, I dunno.


{% assign portfolio_pages = site.pages | where_exp:"item", "item.path contains 'writing/'" %}

<div class="portfolio_gallery">
    {%- for page in portfolio_pages -%}
      {%- assign hero_image = page.images | where: "hero", true %}
      <div class="gallery_card">
	      <div class="portfolio_item">
	        <a href="{{ page.permalink }}" data-fancybox="gallery" data-caption="{{ hero_image[0].text }}">
	          <img class="thumbnail" src="{{ hero_image[0].filename }}" />
	          <div class="page_title"> {{ page.title }} </div>
	        </a>
	      </div>
	  </div>
    {%- endfor -%}
</div>