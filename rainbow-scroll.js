// Register typed CSS property for scroll position
if (typeof CSS !== 'undefined' && CSS.registerProperty) {
  CSS.registerProperty({
    name: '--scroll-pos',
    syntax: '<number>',
    inherits: false,
    initialValue: 0
  });
}

// Paint Worklet for rainbow background
class RainbowScroll {
  static get inputProperties() { return ['--scroll-pos']; }

  paint(ctx, size, props) {
    const scrollPos = parseFloat(props.get('--scroll-pos').toString()) || 0;
    const hue = scrollPos * 360; // 0 → 360 degrees

    ctx.fillStyle = `hsl(${hue}, 80%, 50%)`;
    ctx.fillRect(0, 0, size.width, size.height);
  }
}

registerPaint('rainbow-scroll', RainbowScroll);
