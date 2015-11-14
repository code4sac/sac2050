---
layout: category
category: example
title: Example
tagline:
comments: false
---

{% for indicator in site.data.indicators.[page.category] %}
  <h2 id="h-{{ indicator.slug }}">
    {{ indicator.name }}
  </h2>
  <hr>
  <div id="{{ indicator.slug }}"></div>
  <p>Description...</p>
{% endfor %}

{% for indicator in site.data.indicators.[page.category] %}
  <script src="/charts/{{ page.category }}/{{ indicator.slug }}.js"></script>
{% endfor %}
