---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

# Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

{% for post in paginator.posts %}
  <div class="post">
    <h1 class="post-title">
      <a href="{{ site.baseurl }}{{ post.url }}">
        {{ post.title }}
      </a>
    </h1>

    <span class="post-date">{{ post.date | date: '%b %-d, %Y' }}</span>

    {{ post.excerpt }}
    {% if post.content contains site.excerpt_separator %}
      <a href="{{ site.baseurl }}{{ post.url }}">Read more</a>
    {% endif %}
  </div>
{% endfor %}
