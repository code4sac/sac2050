---
layout: default
title: Public Safety
tagline: Are we safe? Is crime on the rise or staying steady?
---

<ul>
{% for indicator in site.data.indicators.public-safety %}
  <li>
    {{ indicator.name }}
  </li>
{% endfor %}
</ul>
