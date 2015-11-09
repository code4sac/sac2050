---
layout: category
category: transportation-housing
title: Transportation and Housing
tagline: How much time do we spend in traffic? Is housing plenty and affordable?
---

{% for indicator in site.data.indicators.[page.category] %}
  <h2>
    {{ indicator.name }}
  </h2>
  <hr>
  <p>Chart...</p>
  <p>Description...</p>
{% endfor %}
