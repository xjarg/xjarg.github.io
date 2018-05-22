---
title: blog
layout: default
---

{% for item in site.posts %}[{{ item.url }}]({{ item.url }}) [{{ item.language}}, {{ item.content | number_of_words }} words]  
{% endfor %}

---

{% for item in site.posts %}

## [{{ item.url }}]({{ item.url }})

{{ item.content }}
---
{% endfor %}

## blog posts

{% for item in site.posts %}[{{ item.url }}]({{ item.url }}) [{{ item.language }}, {{ item.content | number_of_words }} words]  
{% endfor %}
