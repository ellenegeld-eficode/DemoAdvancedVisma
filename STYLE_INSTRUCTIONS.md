# Application Style Instructions

## Theme
Use a black-and-yellow visual theme across the entire application.

## Color Palette
- Primary background: `#0B0B0B` (near black)
- Secondary background: `#141414` (dark gray-black)
- Primary accent: `#FFD400` (strong yellow)
- Accent hover: `#FFC300` (warm yellow)
- Primary text on dark surfaces: `#F5F5F5`
- Muted text: `#BFBFBF`
- Borders/dividers: `#2A2A2A`
- Error color: `#FF4D4D`
- Success color: `#8BC34A`

## Typography
- Font family: `"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`
- Base font size: `16px`
- Headings: bold (`600-700`) with clear spacing
- Body text: regular (`400`) with high contrast against dark backgrounds

## Layout and Spacing
- Use consistent spacing scale: `4px, 8px, 12px, 16px, 24px, 32px`
- Keep content in clearly separated cards/panels using secondary background color
- Use subtle borders to separate sections instead of heavy shadows

## Buttons and Interactive Elements
- Primary button:
  - Background: `#FFD400`
  - Text: `#111111`
  - Hover: `#FFC300`
  - Active: slightly darker yellow
- Secondary button:
  - Background: transparent
  - Border: `1px solid #FFD400`
  - Text: `#FFD400`
  - Hover: background `#1A1A1A`
- Focus state for all inputs/buttons:
  - `outline: 2px solid #FFD400`
  - `outline-offset: 2px`

## Forms and Inputs
- Input background: `#111111`
- Input text: `#F5F5F5`
- Input border: `1px solid #2A2A2A`
- Focus border: `#FFD400`
- Placeholder text: `#8E8E8E`

## Accessibility
- Maintain WCAG contrast (minimum 4.5:1 for body text)
- Do not rely on color alone for status indication
- Keep interactive targets at least `40px` tall
- Ensure keyboard navigation is visible and intuitive

## Motion
- Use short transitions (`120ms-200ms`) for hover/focus interactions
- Avoid excessive animation; keep movement functional and subtle

## Example CSS Variables
```css
:root {
  --bg-primary: #0B0B0B;
  --bg-secondary: #141414;
  --accent-primary: #FFD400;
  --accent-hover: #FFC300;
  --text-primary: #F5F5F5;
  --text-muted: #BFBFBF;
  --border-color: #2A2A2A;
  --danger: #FF4D4D;
  --success: #8BC34A;
}
```
