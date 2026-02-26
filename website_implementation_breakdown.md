# VITrack Dashboard - Implementation Breakdown

This document provides a comprehensive breakdown of the HTML, CSS, and JavaScript techniques, tags, and attributes used to build the VITrack Student & Alumni Dashboard. The project was designed with a "creative beginner" approach, avoiding overly complex frameworks in favor of robust, foundational web technologies.

## 1. Global Setup & Theming

### CSS Variables (`:root`)
CSS variables (Custom Properties) were used extensively to manage the dark OLED theme and make future color changes easy.
- **Attributes/Syntax**: `--variable-name: value;`
- **Usage**: `--bg-dark`, `--accent-blue`, `--glass-bg`. These allow us to reuse the exact Cobalt (`#005cff`) and Cyan (`#00a8ff`) hex codes without typing them manually every time.

### Reset & Font
- **`*` Selector**: Used for a universal reset (`margin: 0; padding: 0; box-sizing: border-box;`) to ensure consistency across different browsers.
- **Google Fonts**: Imported the `Poppins` font family into the HTML `<head>` using `<link rel="stylesheet">` to give the site a clean, modern geometric look.

---

## 2. Layout & Structure

### Flexbox Layouts (`display: flex`)
Flexbox is the core layout engine used throughout the site to align elements easily in one dimension (rows or columns).
- **Navbar**: `justify-content: space-between` places the logo on the far left and the navigation links on the far right. `align-items: center` perfectly vertically centers them.
- **Hero Section**: Places the introductory text and the abstract graphic side-by-side on desktop views.
- **Body Layout**: The `body` tag uses a column-based flex layout (`flex-direction: column`) combined with `min-height: 100vh`. The `.hero` section is given `flex: 1` which forces it to take up all remaining empty space, intelligently pushing the `<footer>` to the absolute bottom of the screen regardless of how little content is on the page.

### Grid Layouts (`display: grid`)
CSS Grid was used for multi-dimensional layouts, specifically where cards needed to wrap cleanly onto new lines.
- **Dashboard Columns**: The dashboard layout (`1fr 2fr`) allows the profile card to take up 1 fraction of the screen width, and the graphs/courses to take up 2 fractions.
- **Alumni Grid**: Used `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`. This highly responsive rule automatically fits as many 280px alumni cards in a row as possible, and automatically drops them to the next row on mobile devices without needing complex `@media` queries.

---

## 3. Visual Styling & "Glassmorphism"

### Backgrounds & Gradients
- **Linear Gradients**: Used for the primary buttons and text highlights (`background: linear-gradient(135deg, ...)`) to transition smoothly between Cyan and Cobalt.
- **Gradient Text**: To make text gradients work in CSS, we used specific webkit properties:
  - `-webkit-background-clip: text;` (Clips the background gradient to the shape of the text)
  - `-webkit-text-fill-color: transparent;` (Makes the actual text invisible, revealing the gradient underneath).

### Glassmorphism (Frosted Glass Effect)
This modern design trend was used heavily in the Hero section's abstract graphics.
- **`rgba()` backgrounds**: Used semi-transparent background colors (e.g., `rgba(10, 10, 10, 0.7)`).
- **`backdrop-filter: blur(10px)`**: This CSS property blurs whatever elements are rendered *behind* the current element, creating the frosted glass effect.
- **Borders**: Added a very faint 1px semi-transparent border to simulate the physical edge of glass.

### Shadows & Glows
- **Cobalt Neon Glow**: `box-shadow` and `text-shadow` were used to emit a glowing effect from elements instead of casting a standard drop shadow. (e.g., `box-shadow: 0 0 40px rgba(0, 92, 255, 0.15)`).

---

## 4. Interaction & Icons

### Hover States & Transitions
- **`:hover` Pseudo-class**: Used to trigger changes when the user mouses over elements.
- **`transition`**: Added smooth timing to hovers (e.g., `transition: transform 0.3s ease;`) so buttons gently float upward (`transform: translateY(-5px)`) instead of instantly snapping.

### Icons
- **FontAwesome**: A free icon library imported via CDN.
- **Tag Usage**: `<i>` tags with specific classes (e.g., `<i class="fa-solid fa-graduation-cap"></i>`).

---

## 5. JavaScript & Data Visualization

### Chart.js Library
Included via a `<script>` tag in the `head` of `dashboard.html`. Chart.js parses raw data into an HTML5 Canvas element.
- **`<canvas id="gpaChart">`**: The HTML tag that provides a drawing surface for the Javascript.
- **Initialization**: `new Chart(ctx, {...})` initializes the graph.
- **Mixed Chart Type**: We configured Chart.js to overlay a `line` dataset (Cumulative GPA Trend) directly on top of a `bar` dataset (Semester GPA) within the same chart configuration.
- **Canvas Gradients**: Similar to CSS, we utilized Javascript Canvas commands (`ctx.createLinearGradient`) to paint the chart bars with the Cyan-to-Cobalt gradient.
