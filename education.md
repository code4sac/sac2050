---
layout: category
category: education
title: K-12 and Higher Education
tagline: Are children learning how to read and write? Are they prepared for college?
---

{% for indicator in site.data.indicators.[page.category] %}
  <h2>
    {{ indicator.name }}
  </h2>
  <hr>
  <p>Chart...</p>
  <p>Description...</p>
{% endfor %}
