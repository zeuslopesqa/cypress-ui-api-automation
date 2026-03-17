# Cypress UI and API Automation Framework

A comprehensive testing framework built with Cypress for automating UI and API tests. This project provides a structured approach to end-to-end testing, including API client interactions, data factories for test data generation, and UI page objects for seamless automation.

## Features

- **API Testing**: Dedicated API clients for handling RESTful endpoints (e.g., Posts and Users).
- **UI Testing**: Page object models for UI interactions, such as login pages.
- **Data Factories**: Utilities for generating dynamic test data to ensure varied and realistic test scenarios.
- **Fixtures**: Static data files for common test inputs like user credentials and error messages.
- **Cypress Integration**: Leverages Cypress's powerful features for fast, reliable, and maintainable tests.
- **Modular Structure**: Organized codebase with separate directories for clients, factories, tests, and support files.

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (version 14 or higher): Download from [nodejs.org](https://nodejs.org/).
- **npm** (comes with Node.js) or **yarn** as a package manager.
- **Git** for cloning the repository.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cypress-ui-api-automation.git
   cd cypress-ui-api-automation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Running Tests

- **Run all tests in headless mode**:
  ```bash
  npx cypress run
  ```

- **Open Cypress Test Runner** (for interactive testing and debugging):
  ```bash
  npx cypress open
  ```

- **Run specific test files**:
  ```bash
  npx cypress run --spec "cypress/e2e/api/posts.cy.js"
  ```

### Configuration

The project uses `cypress.config.js` for configuration. You can customize settings such as base URLs, timeouts, and environment variables here.

### Environment Variables

Set up environment variables in a `.env` file or directly in your CI/CD pipeline for sensitive data like API keys or base URLs.

Example:
```bash
CYPRESS_BASE_URL=https://api.example.com
CYPRESS_API_KEY=your-api-key
```

## Project Structure

```
cypress-ui-api-automation/
├── cypress/
│   ├── apiClients/          # API client classes for endpoint interactions
│   │   ├── PostsApi.js
│   │   └── UsersApi.js
│   ├── dataFactories/       # Factories for generating test data
│   │   ├── postFactory.js
│   │   └── userFactory.js
│   ├── e2e/                 # End-to-end test files
│   │   ├── api/             # API-specific tests
│   │   │   ├── posts.cy.js
│   │   │   └── users.cy.js
│   │   └── ui/              # UI-specific tests
│   │       └── login.cy.js
│   ├── fixtures/            # Static test data files
│   │   ├── errorMessages.json
│   │   └── users.json
│   ├── pages/               # Page object models for UI tests
│   │   └── LoginPage.js
│   └── support/             # Support files (commands, e2e setup)
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js        # Cypress configuration file
├── package.json             # Project dependencies and scripts
└── README.md                # This file
```

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

Please ensure all tests pass before submitting a PR.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

For questions or issues, please open an issue on GitHub or contact the development team.
