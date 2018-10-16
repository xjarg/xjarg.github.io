---

layout: default
title: blog

---

{% for item in site.posts %}

# {{ item.date | date: "%Y-%m-%d" }}: {{ item.title }}

{{ item.content }}

{% endfor %}
