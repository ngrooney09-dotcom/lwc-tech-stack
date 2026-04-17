# Stack Sandbox: Tailwind CSS + JavaScript

## Student

WooSung Choi (A01340895)

## Stack tested

HTML, Tailwind CSS (CLI), JavaScript

## Goal

To build a small sandbox app that is more than just Hello World, the main goal is
to learn how to use Tailwind CSS with Javascript

## What the app does

- Lets the user choose a favourite color from a dropdown menu
- Displays the selected color after the user select their favourite color
- Shows a preview box with the selected color
- Tailwind CSS (CLI) is used for styling and layout

## Setup instructions

1. Clone the repository, and go to the project folder

2. Open the terminal 

3. Activate Tailwind CSS (CLI) by typing `npx @tailwindcss/cli -i ./input.css -o ./style.css --watch`

4. Open index.html (click Go Live)

## Environment / tools used

- HTML
- JavaScript
- Tailwind CSS (CLI)
- VS Code

## Notes about setup

Tailwind CSS (CLI) requires a build step when not using the CDN. The `input.css` file with `@import "tailwindcss";` is necessary so that the Tailwind CLI can generate `style.css`, which is then used by the browser. Without this step, Tailwind styles will not appear.

## What I learned

- Tailwind CSS requires a build process when using CLI, CDN only needs a link in html
- I can see that beginners may prefer using the CDN version at first because of its simpler setup.

## Verdict

I would recommend Tailwind CSS for student projects because once you get the hang of it, it gets easy to style and you don't have to go back and forth from style.css to index.html and vice versa..
