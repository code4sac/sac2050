---
layout: category
category: sustainability
title: Environmental Sustainability
tagline: Are we taking care of the environment? Do we have clean air and water?
comments: true
---

{% for indicator in site.data.indicators.[page.category] %}
  <h2>
    {{ indicator.name }}
  </h2>
  <hr>
  <p>Chart...</p>
  <p>Description...</p>
{% endfor %}
