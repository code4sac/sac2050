---
layout: category
category: public-safety
title: Public Safety
tagline: Are we safe? Is crime on the rise or staying steady?
comments: true
---

{% for indicator in site.data.indicators.[page.category] %}
  <h2 id="{{ indicator.slug }}">
    {{ indicator.name }}
  </h2>
  <hr>
  <div id="{{ indicator.slug }}-chart"></div>
  <dl>
    <dt>Status</dt>
    <dd><i class="fa fa-circle fa-{{ indicator.status }}"></i> {{ indicator.status }}</dd>
  </dl>
  <p>{{ indicator.description }}</p>
  <dl class="dl-horizontal pull-right">
    <dt>Source:</dt>
    <dd><a href="{{ indicator.source_url }}">{{ indicator.source }}</a></dd>
  </dl>
{% endfor %}

{% for indicator in site.data.indicators.[page.category] %}
  <script src="/charts/{{ page.category }}/{{ indicator.slug }}.js"></script>
{% endfor %}
