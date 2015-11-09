---
layout: category
category: economy
title: The Economy
tagline: What's our economic outlook? Are jobs increasing or decreasing?
---

{% for indicator in site.data.indicators.[page.category] %}
  <h2>
    {{ indicator.name }}
  </h2>
  <hr>
  <p>Chart...</p>
  <p>Description...</p>
{% endfor %}
