---
_schema: default
title: Getting Started
nav_title: Getting Started
nav_section: Root
weight: 2
draft: false
---
To create a new Alto site and deploy it immediately to CloudCannon, click <a target="_blank" rel="noopener" href="https://app.cloudcannon.com/register#sites/connect/github/CloudCannon/alto-hugo-template">here</a>.

## Creating new site pages

For this guide we'll work through a single example: creating a new documentation on Alto within CloudCannon, and ensuring it's shown in the correct place in your navigation bar.&nbsp;

Navigation in Alto is handled by front matter in Hugo, which can be easily edited in CloudCannon's <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/introducing-the-data-editor/">Data Editor</a>.

Each page on Alto has a 'Parent Section' property, which allows you to group related items in the sidebar. This sample site has a single Parent Sections, 'Customizing Alto'.

You can also change the order of the page within the sidebar group using 'Weight'.

{{< figure src="/uploads/screenshot-2023-07-27-at-1-17-49-pm.png" >}}