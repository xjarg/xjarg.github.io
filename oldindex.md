---
title: index
layout: default
---

# Blog

[Atom feed](feed.xml)

{% for post in site.posts %}
  [{{ post.date | date_to_string }} - {{ post.title }}]({{ post.url }})
{% endfor %}
