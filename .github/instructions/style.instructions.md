---
description: Frontend styling conventions for the app UI.
applyTo: "**/*.{html,css,scss,js,jsx,ts,tsx,vue,svelte}"
---

# Frontend Style Instructions

Use these rules for all frontend files to keep a consistent visual design.

## Theme
- Use a black-and-yellow visual style across the UI.

## Color Palette
- Primary background: `#0B0B0B`
- Secondary background: `#141414`
- Primary accent: `#FFD400`
- Accent hover: `#FFC300`
- Primary text: `#F5F5F5`
- Muted text: `#BFBFBF`
- Borders/dividers: `#2A2A2A`
- Error: `#FF4D4D`
- Success: `#8BC34A`

## Typography
- Font family: `"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`
- Base font size: `16px`
- Heading weight: `600-700`
- Body weight: `400`

## Layout and Spacing
- Use spacing scale: `4px, 8px, 12px, 16px, 24px, 32px`.
- Group content into clear cards/panels with secondary background.
- Prefer subtle borders over heavy shadows.

## Buttons and Interactive Elements
- Primary button:
  - Background: `#FFD400`
  - Text: `#111111`
  - Hover: `#FFC300`
- Secondary button:
  - Background: transparent
  - Border: `1px solid #FFD400`
  - Text: `#FFD400`
  - Hover background: `#1A1A1A`
- Focus state for all controls:
  - `outline: 2px solid #FFD400`
  - `outline-offset: 2px`

## Forms and Inputs
- Input background: `#111111`
- Input text: `#F5F5F5`
- Input border: `1px solid #2A2A2A`
- Focus border/accent: `#FFD400`
- Placeholder text: `#8E8E8E`

## Accessibility
- Maintain minimum contrast ratio of `4.5:1` for body text.
- Do not rely on color alone to communicate status.
- Keep interactive targets at least `40px` tall.
- Ensure keyboard focus is always visible.

## Motion
- Keep transitions short: `120ms-200ms`.
- Use subtle, functional motion only.

## CSS Variables
```css
:root {
  --bg-primary: #0b0b0b;
  --bg-secondary: #141414;
  --accent-primary: #ffd400;
  --accent-hover: #ffc300;
  --text-primary: #f5f5f5;
  --text-muted: #bfbfbf;
  --border-color: #2a2a2a;
  --danger: #ff4d4d;
  --success: #8bc34a;
}
```
