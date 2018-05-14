---
layout: default
title: blog
---

---

{% for item in site.posts %}

# {{ item.date | date: "%Y-%m-%d" }} :: [{{ item.title }}]({{ item.url }}) [{{ item.language }}, {{ item.content | number_of_words }} words]

{{ item.content }}
---
{% endfor %}

# blog posts

{% for item in site.posts %}
{{ item.date | date: "%Y-%m-%d" }} :: [{{ item.title }}]({{ item.url }}) [{{ item.language }}, {{ item.content | number_of_words }} words]
{% endfor %}