# Contributing to transpiled-web

Welcome! This document outlines the process for contributing to our project and helps you get started.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Yarn](https://yarnpkg.com/getting-started/install)
- ESLint and Prettier plugins for your code editor (e.g., VSCode)

### Project Setup

1. Clone the repo:

```bash
git clone git@github.com:TranspiledCode/transpiled-web.git
cd transpiled-web
```

2. Install dependencies:

```bash
yarn install
```

3. Set up your development environment:

```bash
# Start the development server
yarn dev
```

## Project Structure

```
transpiled-web/
├── .env
├── .gitignore
├── .prettierignore
├── .prettierrc
├── CONTRIBUTING.md
├── README.md
├── eslint.config.mjs
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.css
│   ├── index.html
│   └── reset.css
├── src
│   ├── App.js
│   ├── components
│   │   ├── AnimatedSection.jsx
│   │   ├── Button.jsx
│   │   ├── ContactForm.jsx
│   │   ├── ContactInfo.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Icon.jsx
│   │   ├── Input.jsx
│   │   ├── SocialIcons.jsx
│   │   ├── Textarea.jsx
│   │   ├── Toast.jsx
│   │   └── ToastContainer.jsx
│   ├── config
│   │   └── home.js
│   ├── context
│   │   ├── ContactForm.js
│   │   ├── GlobalProvider.js
│   │   └── ToastContext.js
│   ├── hooks
│   │   └── useIntersectionObserver.js
│   ├── index.js
│   ├── pages
│   │   └── Home.jsx
│   └── style
│       ├── buttons.js
│       ├── colors.js
│       ├── layouts.js
│       ├── mixins.js
│       └── theme.js
├── yarn-error.log
└── yarn.lock
```

## Development Workflow

### Git Branching Strategy

We use a structured branching strategy to maintain code quality and collaboration. Please refer to the [Git Branching Strategy](#git-branching-strategy) section for detailed information.

### Making Changes

1. Create a new branch from `dev`:

```bash
git checkout dev
git pull origin dev
git checkout -b feature/your-feature-name
```

2. Make your changes and test them:

```bash
# Start development server
yarn dev
```

3. Commit your changes:

```bash
git add .
git commit -m "Description of your changes"
```

4. Push your branch:

```bash
git push -u origin feature/your-feature-name
```

5. Create a Pull Request on GitHub to merge into `dev`

### Pull Request Guidelines

1. **Title**: Use a clear, descriptive title
2. **Description**: Include:

   - What changes you made
   - Why you made them
   - How to test them
   - Any relevant issue numbers

3. **Code Quality**:
   - Ensure all tests pass
   - Run `yarn lint` and `yarn format` (or use your editor's ESLint and Prettier plugins)
   - Follow existing code style
   - Write meaningful commit messages

### Code Style

We use ESLint and Prettier to maintain code quality. Make sure to install the ESLint and Prettier plugins for your code editor (e.g., VSCode). This will help you catch any linting or formatting issues before you push your changes.

Before pushing your changes, please run the following commands:

```bash
# Check for linting issues
yarn lint

# Format your code
yarn format
```

## Git Workflow Best Practices

### Rebasing

When working on a long-running feature branch, it's recommended to periodically rebase your branch onto the latest `dev` branch to keep it up-to-date and minimize the risk of merge conflicts. This can be done with the following commands:

```bash
# Assuming you're on your feature branch
git fetch origin
git rebase origin/dev
```

If there are any conflicts, resolve them and continue the rebase process.

### Pushing Changes

When pushing your changes, always use the `--force-with-lease` option to avoid overwriting remote commits:

```bash
git push --force-with-lease origin feature/your-feature-name
```

This will ensure that you don't accidentally overwrite any changes that were pushed to the remote branch since your last pull.

## Common Tasks

### Starting Development

```bash
# Start development server
yarn dev

# View at http://localhost:3000
```

### Adding Dependencies

```bash
# Add a runtime dependency
yarn add package-name

# Add a development dependency
yarn add -D package-name
```

## Getting Help

- Create an issue for bugs or feature requests
- Check existing issues and pull requests before creating new ones

## Best Practices

### React Development

- Use functional components and hooks
- Keep components small and focused
- Follow the project's component structure
- Use prop-types for component properties
- Leverage the alias paths set up in package.json

### Git Commits

- Write clear, descriptive commit messages
- Keep commits focused and atomic
- Reference issue numbers when applicable
- Use present tense in commit messages

### Code Review

- Be respectful and constructive
- Review thoroughly but timely
- Test changes locally before approving
- Ensure changes meet project standards
