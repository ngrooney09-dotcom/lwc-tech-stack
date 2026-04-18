# Stack Sandbox: HTML/CSS/VanillaJS + Tailwind 

## Student 

WooSung Choi (A01340895)

## Stack tested

HTML, Tailwind CSS (CDN), VanillaJS

## Goal

To build a small sandbox app that is more than just Hello World, the main goal is
to learn how to use Tailwind CSS with VanillaJS

## What the app does

- Shows a box with the selected color
- Lets the user choose a favourite color from a dropdown menu
- Displays the selected color after the user select their favourite color

## Setup instructions

1. Clone the repository

2. Git checkout the branch you want to go to, `git checkout -b [branch name]`

3. Go to the folder

4. Go to index.html then click Go Live

## Environment / tools used

- Tailwind CSS (CDN)
- VS Code
- Browser

## Notes about setup

Tailwind CSS (CDN) does not require any build process, you can just put `<script src="https://cdn.tailwindcss.com"></script>` into html.

## What I learned

- Tailwind CSS (CDN) makes styling faster, as you can style it in html
- Difficult part was getting to understand how styling in html + tailwind (without style.css) works, It will take some time for me to get used to it completely.
- I can see that beginners may prefer using the CDN version at first because of its simpler setup.
- I believe Tailwind is very suitable for both small projects and huge projects, but for large projects, CDN may not be the best option to use for tailwind.

NOTE:
I tried out CLI and I found that Tailwind CSS (CLI) requires build process when not using the CDN. In order to start CLI, Node.js is required. Then create a file `input.css` and place `@import "tailwindcss";` in it, it is necessary so that you can type `npx @tailwindcss/cli -i ./input.css -o ./style.css --watch` which the Tailwind CLI can generate `style.css`, which is then used by the browser. Without this step, Tailwind styles will not appear.

## Verdict

I would recommend this stack for small student projects because it is easy to set up and use. However, it may not be suitable for larger projects due to its limitations.
