---
layout: default
title: K-12 and Higher Education
tagline: Are children learning how to read and write? Are they prepared for college?
---

<ul>
{% for indicator in site.data.indicators.education %}
  <li>
    {{ indicator.name }}
  </li>
{% endfor %}
</ul>
