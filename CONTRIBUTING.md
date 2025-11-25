# Contributing to MultiTool App

First off, thank you for considering contributing to MultiTool App! It's people like you that make this project better for everyone.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Workflow](#development-workflow)
- [Style Guidelines](#style-guidelines)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

### Our Standards

- Be respectful and inclusive
- Welcome newcomers
- Be patient with questions
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- React Native development environment set up
- Git

### Setting Up Development Environment

1. **Fork the repository**
   
   Click the "Fork" button at the top right of the repository page.

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/multitool-app.git
   cd multitool-app
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/bayraktarulku/multitool-app.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Start development**
   ```bash
   npm start
   npm run android  # or npm run ios
   ```

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates.

When creating a bug report, include:
- **Clear title** describing the issue
- **Steps to reproduce** the behavior
- **Expected behavior** vs **actual behavior**
- **Screenshots** if applicable
- **Environment details**:
  - OS and version (Android/iOS)
  - React Native version
  - Device or emulator details

### 💡 Suggesting Features

Feature suggestions are tracked as GitHub issues.

When suggesting a feature:
- **Use a clear title** that summarizes the feature
- **Provide detailed description** of the proposed functionality
- **Explain the use case** - why is this feature needed?
- **Include mockups** if relevant

### 📝 Improving Documentation

Documentation improvements are always welcome:
- Fix typos
- Add examples
- Improve explanations
- Translate documentation

### 🔧 Contributing Code

1. Check issues labeled `good first issue` or `help wanted`
2. Comment on the issue you'd like to work on
3. Wait for assignment before starting work
4. Follow the development workflow below

## Development Workflow

### Branch Naming

Use descriptive branch names:
- `feature/calculator-history`
- `fix/unit-converter-decimal`
- `docs/readme-update`
- `refactor/theme-system`

### Creating a Feature Branch

```bash
# Sync with upstream
git fetch upstream
git checkout main
git merge upstream/main

# Create feature branch
git checkout -b feature/your-feature-name
```

### Making Changes

1. Make your changes
2. Run linting: `npm run lint`
3. Run type checking: `npm run typecheck`
4. Test your changes on both Android and iOS
5. Commit your changes (see commit guidelines)

### Keeping Up to Date

```bash
git fetch upstream
git rebase upstream/main
```

## Style Guidelines

### TypeScript/JavaScript

- Use TypeScript for all new files
- Follow ESLint rules (run `npm run lint`)
- Use Prettier for formatting (run `npm run format`)
- Use meaningful variable/function names
- Add JSDoc comments for public functions

### React/React Native

- Use functional components with hooks
- Keep components small and focused
- Use custom hooks for reusable logic
- Follow the existing component structure

### CSS-in-JS (StyleSheet)

- Use StyleSheet.create for styles
- Keep styles close to components
- Use theme values for colors and spacing
- Avoid inline styles

### File Structure

```
src/
├── components/
│   └── ComponentName/
│       ├── ComponentName.tsx
│       ├── ComponentName.test.tsx
│       └── index.ts
├── screens/
│   └── ScreenName/
│       ├── ScreenName.tsx
│       ├── SubComponent.tsx
│       └── index.ts
└── ...
```

## Commit Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/).

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Build process or auxiliary tool changes

### Examples

```
feat(calculator): add calculation history

- Store last 10 calculations
- Add history view with swipe-to-delete
- Persist history to AsyncStorage

Closes #42
```

```
fix(converter): handle decimal precision in temperature

Temperature conversions now properly round to 2 decimal places
```

## Pull Request Process

1. **Update documentation** if needed
2. **Ensure all checks pass**:
   - Linting: `npm run lint`
   - Type checking: `npm run typecheck`
   - Tests: `npm test`
3. **Write meaningful PR description**:
   - What changes were made?
   - Why were they made?
   - How to test?
4. **Request review** from maintainers
5. **Address review feedback**
6. **Squash commits** if requested

### PR Title Format

Follow the commit message format:
```
feat(calculator): add scientific mode
fix(qrcode): handle empty input validation
```

### PR Checklist

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Changes tested on Android
- [ ] Changes tested on iOS
- [ ] Documentation updated (if needed)
- [ ] No new warnings or errors
- [ ] Types are properly defined

## Questions?

Feel free to:
- Open a [discussion](https://github.com/bayraktarulku/multitool-app/discussions)
- Ask in the issue comments
- Reach out to maintainers

---

Thank you for contributing! 🎉
