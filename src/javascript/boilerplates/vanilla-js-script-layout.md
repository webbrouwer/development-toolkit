---
title: 'Vanilla JS Script Layout'
pageIntro: 'A basic, good to go Vanilla JS script template to use in daily web development. Easy to use and keeps your script clean.'
shortDescription: 'A basic, good to go Vanilla JS script template.'
metaTitle: ''
metaDesc: ''
tags: 'boilerplates'
layout: 'layouts/topic.html'
---

``` js
//
// Variables
//



//
// Methods
//
function clickHandler(event) {

    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('.click-me')) return;

    // Don't follow the link
    event.preventDefault();

};


/**
 * Handle input events
 * @param  {Event} event The event object
 */
function inputHandler(event) {

};


/**
 * Handle submit events
 * @param  {Event} event The event object
 */
function submitHandler(event) {

};


//
// Inits & Event Listeners
//

// Listen for input events
document.addEventListener('input', inputHandler, false);

// Listen for submit events
document.addEventListener('submit', submitHandler, false);

// Listen for click events
document.addEventListener('click', clickHandler, false);
```