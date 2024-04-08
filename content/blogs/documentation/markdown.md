+++
author = "Prakash Dahal"
title = "Markdown is powerful"
date = "2024-04-07"
description = "Let’s take some notes"
tags = [
    "Documentation",
    "Markdown",
    "Md",
    ]
weight = "1"
+++

Markdown is simple and powerful text formatter. I mostly use it for blogging and note taking.
<!--more-->

## Overview 

I recently presented about markdown and wanted to share with you too. So here it is.

- It is a Markup language to format text. 

- You can use it for the following things:
  - Taking Notes
  - Writing Blogs
  - Documenting
  - Generating Static site
  - Writing Books ... so on
  <br />
  <br />

- Different applications have implemented markdown like:
  - Slack
  - Trello
  - Github
  - Ghostwriter
  - Discord 
  - Juyter notebook ... so on

Let's first see some basics of MarkDown from the pdf slide that I have created before. 

<iframe src="/md-slides.pdf" width="100%" height="600px" frameborder="0" scrolling="auto">
</iframe>

# Do you wanna know some Cool Things about Markdown ?

## Pandoc

Using `pandoc`, I can change file format from .md to .pdf or .txt to .md or .md to latex, I can go on and on for this so let's stop here.

You have to install pandoc in your machine. 
<a href="https://pandoc.org/installing.html" target="_blank">Check Official Doc</a>

Some basic pandoc commands are:

{{< copyquote >}}
```bash
pandoc slide.md -o slide.pdf
```
{{< /copyquote >}}

{{< copyquote >}}
```bash
pandoc slide.md -o slide.txt
```
{{< /copyquote >}}

To generate a pdf like I have createD above, you have to add some theme in it. I used `beamer`, which is based on latex, and some themes to give a decent look for the slide.

_Note: You may have to install some additional latex dependencies to use beamer_

{{< copyquote >}}
```bash
pandoc -t beamer -V theme=Berlin -V colortheme=seahorse slide.md -o slide.pdf
```
{{< /copyquote >}} 

The simple architecture of Pandoc is: 

`[input format] ==reader ==> [Pandoc AST] == writer==> [output format]`

If you want to know more about the architecture, <a href="https://pandoc.org/using-the-pandoc-api.html" target="_blank">Check Official Documentation</a>

---

## Obsidian

Obsidian is a popular note-taking and knowledge management application. It has some cool features like: `Bidirectional Linking`, `Graphical View` and `Community Plugins`.


<a href="https://obsidian.md/" target="_blank">Click Here</a> explore more about Obsidian.

_Note: It is free for personal use only._

---

See you again.
> Hey did you take a note for this in .md ? What ? Do it now! NOW

