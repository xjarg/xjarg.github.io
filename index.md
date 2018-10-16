
---

title: jarxg.github.io
layout: default

---

# {{ site.url }}

Hola, soy @jarxg. Uso computadoras para trabajar con **palabras**, **sonidos** e **imágenes**. Soy papá de [Nona](assets/nona.jpg). Estoy en [Twitter](https://www.twitter.com/jarxg/), [GitHub](https://github.com/jarxg/) e [Instagram](https://www.instagram.com/jarxg/). Uso [correo electrónico](mailto:jarg1985@gmail.com) para lo demás.

Este sitio es un work-in-progress permanente.

<!--
---

## blog

{% for item in site.posts %}[{{ item.date | date: "%Y-%m-%d" }} {{ item.category }}: **{{ item.title }}**]({{ item.url}}).
{{ item.synopsis }}
{% endfor %}
-->
---

## lo que hago

### palabras

{% for item in site.words %}[{{ item.title }}]({{ item.projecturl }}) ({{ item.category }}, {{ item.year }})
{% endfor %}

### sonidos

[TidalCycles](https://github.com/jarxg/tidal-sketchbook)

{% for item in site.sounds %}[{{ item.title }}]({{ item.url }}) ({{ item.category }}, {{ item.year }})
{% endfor %}

### imágenes

{% for item in site.images %}[{{ item.title }}]({{ item.url }}) ({{ item.technique }}, {{ item.length }} {{ item.dimensions }}; {{ item.year }})
{% endfor %}
