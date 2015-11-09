---
layout: default
title: Transportation and Housing
tagline: How much time do we spend in traffic? Is housing plenty and affordable?
---

<ul>
{% for indicator in site.data.indicators.transportation-housing %}
  <li>
    {{ indicator.name }}
  </li>
{% endfor %}
</ul>
