---
layout: default
title: The Economy
---

<ul>
{% for indicator in site.data.indicators.economy %}
  <li>
    {{ indicator.name }}
  </li>
{% endfor %}
</ul>
