---
layout: post
title: GitHub Pages Jekyll
description: Learn about the power of GitHub Pages and Jekyll
categories: ['GitHub Pages']
permalink: /github/pages/jekyll
menu: nav/github_pages.html
toc: True
comments: True
---

## GitHub Pages and Jekyll
GitHub Pages leverages the power of Jekyll to transform your Markdown and HTML files into a static website. 

1. **Front Matter**: All Markdown (`.md`) and Jupyter Notebook (`.ipynb`) files with front matter are processed into a static data structure, making their keys and values accessible to the GitHub Pages system via Jekyll.

2. **Jekyll Language**: Jekyll can access all site-wide keys and values defined in `_config.yml`, as well as individual page front matter keys and values. This allows for dynamic organization and rendering of documents based on their metadata.

### Jekyll and Liquid
The primary purpose of Jekyll within GitHub Pages is to help developers create dynamic web pages. By using site and page front matter, you can organize and render pages based on data. Liquid provides the templating syntax that allows you to dynamically generate content within your Jekyll templates. In essence, Jekyll is the system, and Liquid is the templating language.

Jekyll and Liquid provide programming constructs that are essential in all programming environments. These constructs are particularly relevant to concepts required by AP (CSP, CSA) and college articulated courses (CSSE, Data Structures).

Below are these key elements as defined in Liquid.

- **Variable Assignments**: This assigns all the posts in the site to the variable rawposts.
  ```liquid
  {% raw %}

  {% assign rawposts = site.posts %}

  {% endraw %}
  ```

- **Conditionals**: This checks if the number of posts is greater than zero.
  ```liquid
  {% raw %}

  {%- if posts.size > 0 -%}
    <!-- conditional code here -->
  {%- endif -%}

  {% endraw %}
  ```

- **xLoops**: This iterates through each post in the site's posts.
  ```liquid
  {% raw %}

  {%- for post in site.posts -%}
    <!-- repeating code here -->
  {%- endfor -%}

  {% endraw %}
  ```

- **Include**: Include (HTML)
  ```liquid
  {% raw %}

  {%- include post_list_image_card.html -%}

  {% endraw %} 
  ```

## Language Comparisons

Since we are mentioning essential programming constructs, following are examples of similar constructs in languages you will be exposed to in the CompSci pathway at Del Norte High School.

### JavaScript
Similar language constructs comparisons

```javascript
// Variable Assignments
var rawposts = site.posts;

// Conditionals
if (posts.length > 0) {
    // conditional code here
}

// Loops
for (let post of site.posts) {
    // repeating code here
}

// Include (Function)
import { function } from './file.js';
```

### AP CSP Pseudocode
Similar language constructs comparisons

```plaintext
// Variable Assignments
rawposts ← site.getPosts()

// Conditionals, they use language "Selection"
IF (LENGTH(posts) > 0) {
    // conditional code here
}

// Loops, the use language "Iteraction"
FOR EACH post IN site.getPosts() {
    // repeating code here
}

// Include (Procedure)
INCLUDE function FROM file
```

### Python
Similar language constructs comparisons

```python
# Variable Assignments
rawposts = site.posts

# Conditionals
if len(posts) > 0:
    pass  # conditional code here in place of pass

# Loops
for post in site.posts:
    pass  # repeating code here in place of pass

# Include (Function)
from file.py import function
```


### Java
Similar language constructs comparisons

```java
import java.util.List;

// Variable Assignments
List<Post> rawposts = site.getPosts();

// Conditionals
if (posts.size() > 0) {
    // conditional code here
}

// Loops
for (Post post : site.getPosts()) {
    // repeating code here
}

// Include (Method)
import static com.example.file.function;
```

## Blogging Example Code
A core part of this project is the `blogs` layout (`_layouts/blogs.html`). This file is used to organize the blog list on the website. Read the comments in the code and consider making changes to the data or code to alter the appearance of the blogs. Try to modify the blog layout to better suit your needs or preferences.


```liquid
{% raw %}

<!-- This inserts content from the page using this layout -->
{{ content | markdownify }}

<!-- Get all posts -->
{% assign rawposts = site.posts %}

<!-- Hide posts if front matter flag hide:true -->
{% assign posts = '' | split:'' %}
{% for post in rawposts %}
  {% if post.hide != true %}
    {% assign posts = posts | push: post %}
  {% endif %}
{% endfor %}

<!-- Sort posts by rank, then date, put posts with "sticky_posts: 1" front matter at the top -->
{% assign grouped_posts = posts | group_by: "sticky_rank" | sort: "name", "last" %}
{% assign sticky_posts = '' | split:'' %}
{% assign non_sticky_posts = '' | split:'' %}
<!-- Split posts into sticky and non-sticky -->
{% for gp in grouped_posts %}
  {%- if gp.name == "" -%}
    {% assign non_sticky_posts = gp.items | sort: "date" | reverse %}
  {%- else %}
    {% assign sticky_posts = sticky_posts | concat: gp.items %}
  {%- endif %}
{% endfor %}

<!-- Generate Card for each Post -->
{% assign sticky_posts = sticky_posts | sort: "sticky_rank", "last" %}
{% assign posts = sticky_posts | concat: non_sticky_posts %}
{%- if posts.size > 0 -%}
  {%- if page.list_title -%}
    <h2 class="post-list-heading">{{ page.list_title }}</h2>
  {%- endif -%}
  <ul class="post-list">
    {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
    {%- for post in posts -%}
    <li>
      <!-- This file can be found in _includes -->
      {%- include post_list_image_card.html -%}
    </li>
    {%- endfor -%}
  </ul>
{%- endif -%}

{% endraw %}
```

### HTML Included Code
The block of code below is located in the system at `_includes/post_list_image_card.html`. This file is included in the blogs and generates the HTML for the card. If you want to change the style or appearance of the card output for the blogs, you should modify the `_includes/post_list_image_card.html` file.

```html
<!-- Box shadow and rounded corners, using Primer CSS classes https://github.com/primer/css -->
<div class="Box box-shadow-medium rounded-1 col-12">
  <!-- Check if the post has an image -->
  {%- if post.image -%}
  <!-- Container for the image, taking up 4 columns and vertically aligned in the middle -->
  <div class="col-4 d-table-cell p-3 v-align-middle">
      <!-- Image element with a class for styling and the image source set to the post's image URL -->
      <img class="image-preview" src="{{ post.image | relative_url }}" />
  </div>
  {%- endif -%}
  <!-- Container for the post content, taking up 8 columns -->
  <div class="col-8 d-table-cell p-3">
      <!-- Post title wrapped in an h3 tag -->
      <h3>
        <!-- Link to the post's URL with the post title as the link text -->
        <a class="post-link" href="{{ post.url | relative_url }}">
          {{ post.title | escape }}
        </a>
      </h3>
      <!-- Post description paragraph -->
      <p class="post-meta-description">{{ post.description }}</p>
      <!-- Post date paragraph, formatted according to the date_format variable -->
      <p class="post-meta">{{ post.date | date: date_format }}</p>
  </div>
</div>
```
