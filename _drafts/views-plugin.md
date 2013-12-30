---
layout: post
title: Tutorial: Implementing a Custom Views Filter
tags: code, tutorial, drupal, views, php, handler, filter
---

I had to write a ~~plug-in~~*handler* for the [views][drupal-views] module this morning. I wound up having to go through a pretty nontrivial process to accomplish this, so I figured I would give it a quick write-up for the blog. As good an introductory post as any!

<!-- more -->

For those who aren't familiar with the parlance of Views <small>(like myself!)</small>, it defines two kinds of extensions: *plug-ins* and *handlers*. A *handler* is an extension that provides additional _fields_, _filters_, _sorts_, _relationships_, etc. A *plug-in* provides new formats for _exposed forms_, _displays_, _styles_, ways to perform _argument validation_, control _access_, _query_ the database, manage _caching_, and more.

I wanted to create a custom filter, to provide a better interface for searching through one of our views. Since I was unaware of the difference between a *handler* and a *plug-in*, it wound up taking me longer than strictly was called for, but here's the run-down, for your developmental pleasure.

We'll work with a simple module that creates a single filter in this tutorial, which you can pull down from my [Github][repo].

###.info
Let's start by writing out the .info file.

<!-- insert drupal_custom_filter.info here -->

###.module
Now we need to implement [hook_views_api][views_api], which lets Views know we've got something for it.

<!-- insert drupal_custom_filter.module here -->

###.views.inc

<!-- insert drupal_custom_filter.views.inc here -->

###Writing the Handler

<!-- insert drupal_custom_filter_handler.inc here -->

[drupal-views]: https://drupal.org/project/views
[repo]: https://github.com/chaosphere2112/drupal_custom_filter
