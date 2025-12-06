## Development Guidelines

### Code Style

- Use 2 spaces for indentation
- Use single quotes for strings
- Always use semicolons
- Follow ESLint rules
- Format code with Prettier before committing

### Component Structure

```javascript
// Component template
class ComponentName {
  constructor(element, options = {}) {
    this.element = element;
    this.options = { ...this.defaults, ...options };
    this.init();
  }

  get defaults() {
    return {
      // default options
    };
  }

  init() {
    // initialization logic
  }

  destroy() {
    // cleanup logic
  }
}
```

### CSS Methodology

Follow BEM (Block Element Modifier) naming convention:

```css
.block { }
.block__element { }
.block--modifier { }
```

### Git Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Run tests: `npm run lint`
4. Commit: `git commit -m "feat: add new feature"`
5. Push: `git push origin feature/your-feature`
6. Create Pull Request

### Commit Messages

Follow conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

### Performance

- Lazy load images
- Minimize JavaScript bundle size
- Use CSS for animations when possible
- Optimize assets before committing
- Use CDN for third-party libraries

### Accessibility

- Use semantic HTML
- Add ARIA labels where needed
- Ensure keyboard navigation works
- Maintain color contrast ratios
- Test with screen readers

### Browser Testing

Test on:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)
