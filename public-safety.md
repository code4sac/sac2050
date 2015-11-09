---
layout: category
category: public-safety
title: Public Safety
tagline: Are we safe? Is crime on the rise or staying steady?
---

{% for indicator in site.data.indicators.[page.category] %}
  <h2>
    {{ indicator.name }}
  </h2>
  <hr>
  <p>Chart...</p>
  <p>Description...</p>
{% endfor %}
