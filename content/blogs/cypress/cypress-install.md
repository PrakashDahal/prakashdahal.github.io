+++
author = "Prakash Dahal"
title = "Cypress Installation and Quick start"
date = "2020-08-10"
description = "Let’s take the first step"
tags = [
    "Install Cypress",
    "Automation Testing",
    "Cypress",
    "Cypress Tutorial"
    ]
+++

Automation through Cypress is easy: Installation and Quick start <!--more-->

## Overview

Testing is always an important part of software development because it ensures the quality and functionality of the system. There are two main types of testing: Manual testing and Automation testing. Automation supports manual testing and minimizes the burden for manual testers. If you want to learn the difference between automation and manual testing, you can 
<a href="https://medium.com/@testautomation/the-difference-between-manual-automated-testing-b3230fa8d94d#:~:text=Automated%20testing%20is%20a%20method,behavior%20and%20creating%20test%20reports.&text=In%20other%20words%2C%20automated%20testing,and%20efficiency%20of%20software%20testing." target="_blank">click here</a>.

There are many tools available for automation tests like Selenium, Telerik Test Studio, Robotium, and so on. Cypress is a modern automation testing tool for the front-end, written in JavaScript. Cypress provides different features like time travel, real-time reload, automatic waiting, screenshots, videos, and many more. It does not require specifying any web driver for Cypress to run the tests in the browser; instead, it runs the tests in the actual browser itself. It also supports modern single-page applications, making it a good choice for automation testing.

## Prerequisites

Cypress uses JavaScript and runs along with Node.js, so Node.js needs to be installed on your device. You can follow the installation tutorials on Digital Ocean by <a href="https://www.digitalocean.com/community/tutorials?q=Install+Node" target="_blank">clicking here</a>. Choose your operating system, and you are good to go. Cypress is easy to install with just a single command if Node.js is already installed: `npm install cypress --save-dev`. Let's understand it step by step.

## Quick Start

### Let’s get started

The steps we will be going through are given below:

1. Initialize the `package.json` file
2. Install Cypress using npm or yarn
3. Running Cypress tests in the dashboard

At first, let’s create a new folder/directory. I will make one with the name `first-cypress` and get into the folder:

1. **Initialize the `package.json` file**

   - For npm: `npm init` or `npm init -y`
   - For yarn: `yarn init` or `yarn init -y`

   Provide proper information and press yes and enter.

2. **Install Cypress using npm or yarn**

   - For npm: `npm install cypress --save-dev`
   - For yarn: `yarn add cypress --dev`

   This command will create a `node_modules` directory, which includes all the Cypress libraries.

3. **Run Cypress tests in the dashboard**

   - Now we have Cypress and its dependencies, we can run Cypress tests easily.
   - Open the Cypress dashboard with the command: `npx cypress open`.

   Cypress provides some example test files by default. Click the ‘ok, got it’ button and select the test you want to run. You can also click the ‘Run all specs’ button to run all tests.

Congratulations, you've completed the first setup and installation process.
Here is the old folder structure of cypress (v<10) <a href="https://medium.com/@dahalprakash1720/automation-through-cypress-is-easy-folder-structure-8cc8ea384b23" target="_blank">click here</a>. Some of the structure is still same in Cypress. Now you are ready to take another step in cypress.

> Go Ahead and learn
