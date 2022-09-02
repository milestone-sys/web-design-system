---
title: Switch 
---

## On this page we will go through our Switch component 

Switches allow the user to select one or more options from a set of items.
They can be used in forms, filters, lists etc.

### Table of contents

<div class="row">
    <div class="col-4">
        <ul class="document__unordered-list">
             <li class="document__unordered-list-item">
                 <a class="msds-link" href="#overview">Overview</a>
             </li>   
              <li class="document__unordered-list-item">
                 <a class="msds-link" href="#states">States</a>
             </li>          
             <ul class="document__unordered-list">
                <li class="document__unordered-list-item">
                    <a class="msds-link" href="#checked-state">Checked State</a>
                </li>
                <li class="document__unordered-list-item">
                    <a class="msds-link" href="#disabled-state">Disabled State</a>
                </li>
                <li class="document__unordered-list-item">
                    <a class="msds-link" href="#readonly-state">Readonly State</a>
                </li>
            </ul>             
         </ul>    
    </div>    
</div>

## Overview
Each Switch component is based on a global CSS class called "msds-switch". It is important to include it first as it is the main CSS class. Without it, the UI of the component won't work.

The Switch makes use of custom styling by replacing the default input element with a pseudo-element selector, yet it keeps the native "checked" boolean property to toggle its state on/off (or checked/unchecked).

<div class="element-preview">
  <div class="element-preview__inner">{{render '@switch-global'}}</div>
</div>

```html
{{render '@switch-global'}}
```

## States
The styling of states are defined in the CSS file. Some of the states can be triggered programmatically by setting the relevant property to the input element. 

### Checked State

It can be checked programmatically by setting the "checked" property to the input element.
<div class="element-preview">
  <div class="element-preview__inner">{{render '@switch-checked'}}</div>
</div>

```html
{{render '@switch-checked'}}
```

### Disabled State

It can be disabled programmatically by adding <code>msds-switch--disabled</code> to the components main classes, and setting the "disabled" attribute to the input element. 
<div class="element-preview">
  <div class="element-preview__inner">{{render '@switch-disabled'}}</div>
</div>

```html
{{render '@switch-disabled'}}
```

### Readonly State

In order to use the switch as read-only, you need to add <code>msds-switch--disabled</code> to the main component wrapper, and add <code>checked</code> to the checkbox input
<div class="element-preview">
  <div class="element-preview__inner">{{render '@switch-disabled-readonly'}}</div>
</div>

```html
{{render '@switch-disabled-readonly'}}
```