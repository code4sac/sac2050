---
layout: default
title: Health and Families
tagline: How healthy are we? Is our social safety net working?
---

<ul>
{% for indicator in site.data.indicators.health-families %}
  <li>
    {{ indicator.name }}
  </li>
{% endfor %}
</ul>
