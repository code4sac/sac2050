---
layout: default
title: The Economy
tagline: What's our economic outlook? Are jobs increasing or decreasing?
---

<ul>
{% for indicator in site.data.indicators.economy %}
  <li>
    {{ indicator.name }}
  </li>
{% endfor %}
</ul>
