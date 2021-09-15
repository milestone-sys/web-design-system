---
title: Tables
---

Below you will find the different definitions and options to tables.

### Table of contents
<div class="row">
    <div class="col-6">
      <ul class="document__unordered-list">
            <li class="document__unordered-list-item">
                <a  class="msds-link"href="#overview">Overview</a>
            </li>
            <ul class="document__unordered-list">
                <li class="document__unordered-list-item">
                    <a  class="msds-link"href="#global-definition">Global Definition</a>
                </li>
                <li class="document__unordered-list-item">
                    <a  class="msds-link"href="#sizes">Sizes</a>
                </li>
                <ul class="document__unordered-list">
                    <li class="document__unordered-list-item">
                        <a  class="msds-link"href="#large">Large</a>
                    </li>
                    <li class="document__unordered-list-item">
                        <a  class="msds-link"href="#medium">Medium</a>
                    </li>
                    <li class="document__unordered-list-item">
                        <a  class="msds-link"href="#small">Small</a>
                    </li>
                </ul>
            </ul>
            <li class="document__unordered-list-item">
                <a  class="msds-link"href="#default-table">Table Default</a>
            </li>    
            <ul class="document__unordered-list">
                <li class="document__unordered-list-item">
                    <a  class="msds-link"href="#default-table-with-dark-headers">Default Table With Dark Headers</a>
                </li>
                <li class="document__unordered-list-item">
                    <a  class="msds-link"href="#tables-expandable-rows">Table With Expandable Rows</a>
                </li>
            </ul>
            <li class="document__unordered-list-item">
                <a  class="msds-link"href="#tables-dark-themed">Table Dark Themed</a>
            </li>
          <ul class="document__unordered-list">
                <li class="document__unordered-list-item">
                    <a  class="msds-link"href="#tables-dark-themed-expandable-rows">Table Dark Theme Expanding Rows</a>
                </li>
            </ul>
        </ul>
    </div>
</div>

## Overview
### Global Definition
Tables are used to display tabular data for users. We recommend using third party libraries/frameworks when utalizing our tables, as we have not built tables to be functional in our design system. Instead we use our own markup and make use of the following libraries, when you would like to add functionality like pagination, search, sort etc.

- [Simple Tables (Vanilla JS)](https://github.com/fiduswriter/Simple-DataTables)
- [Vue Table Component (Vue JS)](https://vuejs.org/v2/examples/grid-component.html)
- [React Tables (React)](https://react-table.tanstack.com/)

<div class="element-preview">
  <div class="element-preview__inner">{{render '@table-default'}}</div>
</div>

### Sizes
Tables are setup to support 3 differnt sizes (Based on padding). Our default tables are large, followed by medium and small tables.

##### Large
To utalize large tables, use the components default class <code>msds-table</code>.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@table-default'}}</div>
</div>

##### Medium
To utalize medium tables, add an additional modifier class to the components wrapper tag <code>msds-table <b>msds-table--medium</b></code>.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@table-default-medium'}}</div>
</div>

##### Small
To utalize small tables, add an additional modifier class to the components wrapper tag <code>msds-table <b>msds-table--small</b></code>.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@table-default-small'}}</div>
</div>

### Default Table
To utalize tables from the design system, copy the markup below.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@table-default'}}</div>
</div>

```html
{{render '@table-default'}}
```

#### Default Table With Dark Headers
The light themed tables have an additional theme, where the headers of the table are blue instead of grey. To make use of this table, add an additional modifier class to the components wrapper tag <code>msds-table <b>msds-table--dark</b></code>.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@table-default-dark'}}</div>
</div>


### Tables Expandable Rows
Tables can have rows that are grouped together, that are hidden until the user expands the rows. 

<div class="element-preview">
  <div class="element-preview__inner">{{render '@table-default-expandable-rows'}}</div>
</div>

```html
{{render '@table-default-expandable-rows'}}
```

### Tables Dark Themed
Tables come in a second layout theme called a dark theme. To make use of the dark theme,  add an additional modifier class to the components wrapper tag <code>msds-table <b>msds-table--dark-theme</b></code>.

<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@table-dark-theme-default'}}</div>
</div>

### Tables Dark Themed Expandable Rows
Dark themed tables can also make use of the expandable tables styling in a dark theme. To make use of dark themed expading rows, add an additional modifier class to the components wrapper tag <code>msds-table <b>msds-table--dark-theme</b></code>.

<div class="element-preview-dark">
  <div class="element-preview__inner">{{render '@table-dark-theme-default-expandable-rows'}}</div>
</div>
