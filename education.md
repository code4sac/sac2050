---
layout: default
title: K-12 and Higher Education
---

<ul>
{% for indicator in site.data.indicators.education %}
  <li>
    {{ indicator.name }}
  </li>
{% endfor %}
</ul>
