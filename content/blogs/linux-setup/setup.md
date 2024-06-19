+++
author = "Prakash Dahal"
title = "Efficiency: My setup for productivity"
date = "2024-06-18"
description = "Stop being a sloth, noob. Level up with right tools"
tags = [
    "Efficiency",
    "Arch",
    "Setup",
    "Productivity"
    ]
+++

<br/>
Productivity is the key point for software development. There are so many fields to learn and understand and if you are not productive, God may save you.

In this blog, I'll share the key components of my laptop setup and how they have helped boost my efficiency.

<!--more-->

## Operating System: Arch linux with i3wm

- **Arch** is an **open source, light weight, rolling release model, highly customizable with rich package manager** linux operating system. If you feel like why Arch, then [Visit this blog](https://prakashdahal.github.io/blogs/linux-setup/arch/).
  {{<renderImage url="/images/linux_setup/arch-neofetch.png" alignImg="center" width="100%">}}

- **i3wm** is one of the best **tiling window manager** for me. It allows us to manage workspace (ws) and add **specific application under specific workspace**. I feel so happy `:)` that when I open my laptop, my full workspaces is ready with all necessary applications. I am fully ready to work, no need to open browser or any other applications manually. 
I prefer **ws1 for terminal, ws2 for browsers, ws3 for notes, ws9 for socialize and ws10 for code**. So with my 1 click I can navigate to my particular workspace. 
<br/><br/>I have my own key-bindings for my ease. 

    > For example: 
    - `mod + Shift + q` kills all applications except terminal (alacritty)
    - `mod + \` executes the flameshot for screenshot
    
> Here is my [.dotfiles config for i3](https://github.com/PrakashDahal/.dotfiles/tree/main/i3)

## Productivity Tools

- **Polybar** is a highly customizable status bar. You can add your own config to see information of **RAM, CPU, local-IP, i3, Date** and so on. 

> Here is my [.dotfiles config for polybar](https://github.com/PrakashDahal/.dotfiles/tree/main/polybar)

- **Rofi** is a powerful and handy application launcher and window switcher. I mostly use it for application launching only.

- I use **Obsidian** for documentation and my daily todos. My daily todo keeps me on track and organized. I make almost all of my documents using Osidian (mostly .md) and it's community plugins (kanban, Diagram.net, mindmap). 

- **Pandoc** is super cool tool which I mostly use to change my .md files to .pdf
> Here is my blog for [Markdown and pandoc](https://prakashdahal.github.io/blogs/documentation/markdown)

## Development Environment

- **Neovim** is highly customizable code editor. Neovim allows us to write lua which makes configuration very easy. Its extensive plugin ecosystem like `lsp, treesitter, telescope` and **lightning-fast performance** has captivated me.  

> Here is my [.dotfile config for nvim](https://github.com/PrakashDahal/.dotfiles/tree/main/nvim)

- I have selected **Alacritty** as my terminal. Alacritty supports for **.toml** config. I like to use **Zsh** instad of **bash** since it has **Oh my zsh** and I can use multiple cool plugins. 

> Here is my [.dotfile config for alacritty](https://github.com/PrakashDahal/.dotfiles/tree/main/alacritty)

> Here is my [.dotfiles config for zshrc](https://github.com/PrakashDahal/.dotfiles/blob/main/.zshrc)

- **Tmux** is a terminal multiplexer, allows me to manage multiple terminal sessions within a single window. It is useful when I am using server through `ssh`.

## Browser Productivity

- **Vimium** is a browser extension. It give Vim-like keyboards shortcuts. I can go left, down, up and right using `h,j,k,l`. Some of its cool shorthands are:
    - `gg` scrolls to the top of the page.
    - `shift+g` scrolls down of the page.
    - `shift+h` goes browser history back.
    - `shift+j` goes browser history forward.
    - `shift+k` change browser tab down.
    - `shift+l` change browser tab up.
    - `f` shows all clickable links with unique alphabet associated with it.

> Note: This is my setup for now. It has really increased by efficiency to work.

