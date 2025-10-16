# Rainbow Houdini

A **scroll-reactive rainbow background** built using **CSS Houdini Paint Worklet**.  
The background smoothly animates through the full rainbow spectrum as you scroll the page, creating a neon-like dynamic effect.

## Features
- **Full rainbow background**: Hue rotates 0 → 360 based on scroll.  
- **Smooth easing**: Scroll updates are smoothed like GSAP animation.  
- **Pure Houdini**: Paint Worklet handles all rendering.  
- **Minimal JS**: Only updates a single CSS property (`--scroll-pos`).  
- **GitHub Pages ready**: Works immediately in Chrome/Edge.

## Files
- `index.html` → Main demo page  
- `rainbow-scroll.js` → Houdini Paint Worklet for rainbow background  

## Usage
Include the worklet in your page:

```html
<script>
CSS.paintWorklet.addModule('https://yourusername.github.io/rainbow-houdini/rainbow-scroll.js');
</script>

body {
  background: paint(rainbow-scroll);
}
