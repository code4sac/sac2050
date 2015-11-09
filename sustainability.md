---
layout: default
title: Environmental Sustainability
tagline: Are we taking care of the environment? Do we have clean air and water?
---

<ul>
{% for indicator in site.data.indicators.sustainability %}
  <li>
    {{ indicator.name }}
  </li>
{% endfor %}
</ul>
