---
layout: category
category: health-families
title: Health and Families
tagline: How healthy are we? Is our social safety net working?
---

{% for indicator in site.data.indicators.[page.category] %}
  <h2>
    {{ indicator.name }}
  </h2>
  <hr>
  <p>Chart...</p>
  <p>Description...</p>
{% endfor %}
