---

title: blog
layout: default

---

{% for item in site.posts %}

## [{{ item.url }}]({{ item.url }})

{{ item.content }}
---
{% endfor %}
