---
title: Tab tile
---

## The tab tile are containers for navigating sections of related content
Below you will find the different definitions and options for tab tiles

### Table of contents
<div class="row">
    <div class="col-12">
        <ul class="document__unordered-list">
            <li class="document__unordered-list-item"> 
                 <a class="msds-link"href="#overview">Overview</a>
            </li>
            <li class="document__unordered-list-item"> 
                 <a class="msds-link"href="#display-modal-on-load">Tabs with icons</a>
            </li>
            <li class="document__unordered-list-item"> 
                 <a class="msds-link"href="#display-modal-on-click-event">Disabled Tabs with Icons</a>
            </li>
            <li class="document__unordered-list-item"> 
                 <a class="msds-link"href="#display-modal-on-click-event"> Two Tabs with Icons</a>
            </li>           
        </ul>
    </div>
</div>

## Overview
Tabs are containers of content, that can make navigation easier, by nesting related content

Tabs can be set up in different configurations, both with and without icons, aswell as disabled and sticky to the viewport top on scroll.
## Tabs with icons
Tabs can have rich icons in them

<div class="element-preview">
    <div class="element-preview__inner">{{render '@tab-tile-with-icons'}}</div>
</div>

```html
{{render '@tab-tile-with-icons'}}
```
## Disabled Tabs with Icons
Tabs can be disabled, making them un interactive

<div class="element-preview">
    <div class="element-preview__inner">{{render '@tab-tiles-disabled-with-icons'}}</div>
</div>

```html
{{render '@tab-tiles-disabled-with-icons'}}
```

## Two Tabs with Icons
Tabs can be expand to take of more space, if the tab section contains less than 6 tabs

<div class="element-preview">
    <div class="element-preview__inner">{{render '@tab-tile-two-tabs'}}</div>
</div>

```html
{{render '@tab-tile-two-tabs'}}
```




