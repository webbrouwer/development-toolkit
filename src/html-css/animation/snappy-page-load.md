---
title: 'Snappy page load'
pageIntro: 'CSS trick to load pages smooth.'
shortDescription: 'CSS trick to load pages smooth.'
metaTitle: ''
metaDesc: ''
tags: 'animation'
layout: 'layouts/topic.html'
---

``` css
/* Inside <head> within a <style> tag of all templates */
body {
    opacity: 0;
    transition-duration: 133.7ms;
    transition-timing-function: ease-in-out;
}

/* Inside style.css */
body {
    opacity: 1;
}
```