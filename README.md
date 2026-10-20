# OrangeHRM Playwright QA Automation

End-to-end UI automation for the OrangeHRM Open Source Demo login module, built with Playwright Test, JavaScript and the Page Object Model. Results are published to Allure and the Playwright HTML report. A separate Newman collection is included for API smoke testing.

## Stack

- Playwright Test (JavaScript / Node.js)
- Allure reporting (`allure-playwright`)
- Playwright HTML report
- Newman as a standalone API test runner
- GitHub Actions CI

Playwright JavaScript does not use Java PageFactory, Maven or TestNG. It uses Playwright fixtures, locators and its own test runner.

## Prerequisites

- Node.js 18+ and npm
- Allure CLI (bundled as a dev dependency; report generation needs a Java runtime)

## Install

```bash
npm install
npx playwright install chromium
```

## Test coverage

Located in `tests/ui/`, following the Page Object Model.

| Test case | Scenario | Type | Spec |
|---|---|---|---|
| ORH-LOGIN-001 | Login page and controls visible | Smoke/UI | `login.valid.spec.js` |
| ORH-LOGIN-002 | Valid credentials authenticate | Positive | `login.valid.spec.js` |
| ORH-LOGIN-003 | Invalid password rejected | Negative | `login.invalid.spec.js` |
| ORH-LOGIN-004 | Invalid username rejected | Negative | `login.invalid.spec.js` |
| ORH-LOGIN-005 | Blank credentials show required validation | Validation | `login.invalid.spec.js` |
| ORH-LOGIN-006 | Password field masks input | UI | `login.invalid.spec.js` |

Traceability and detailed steps live in [`docs/project/TEST_CASES_ORANGEHRM.md`](docs/project/TEST_CASES_ORANGEHRM.md) and [`docs/project/TEST_PLAN_ORANGEHRM.md`](docs/project/TEST_PLAN_ORANGEHRM.md).

## Run UI tests

```bash
npm test                       # whole suite
npm run test:ui                # UI suite (same testDir)

# Specific test cases
npx playwright test tests/ui/login.valid.spec.js
npx playwright test tests/ui/login.invalid.spec.js
npx playwright test -g "valid demo credentials authenticate"
npx playwright test tests/ui/login.valid.spec.js:4

# Headed / debug
npx playwright test --headed --workers=1
npx playwright test --debug
```

## Credentials and environment

Defaults live in `.env.example`. Override with environment variables rather than editing tests.

PowerShell:

```powershell
$env:ORANGEHRM_USERNAME="Admin"
$env:ORANGEHRM_PASSWORD="admin123"
npm test
```

Bash:

```bash
ORANGEHRM_USERNAME=Admin ORANGEHRM_PASSWORD=admin123 npm test
```

| Variable | Purpose | Default |
|---|---|---|
| `ORANGEHRM_BASE_URL` | Application URL | `https://opensource-demo.orangehrmlive.com` |
| `ORANGEHRM_USERNAME` | Demo username | `Admin` |
| `ORANGEHRM_PASSWORD` | Demo password | `admin123` |
| `ORANGEHRM_API_BASE_URL` | API base URL | _(empty placeholder)_ |

## Reports

```bash
npx playwright show-report          # Playwright HTML report

npm run test:allure:generate        # build allure-report/ from allure-results/
npm run test:allure:open            # serve and open the Allure report
```

Allure report generation requires a Java runtime.

## Live report (GitHub Pages)

The latest run is published from the `gh-pages` branch:

- Allure report: https://shubhamlatake9520-sys.github.io/Project_OrangeHRM_Playwright/
- Failure artifacts (screenshot, video, trace, error context): https://shubhamlatake9520-sys.github.io/Project_OrangeHRM_Playwright/test-results/

## Newman API workflow

`postman/` contains a template only. Replace its placeholder endpoint, authentication flow and assertions before relying on the result.

```bash
npm run test:api
```

## Project structure

```text
Project_OrangeHRM_Playwright/
├── .github/workflows/ui-tests.yml   # CI: install, run UI tests, upload artifacts
├── pages/
│   └── LoginPage.js                 # Page Object
├── fixtures/
│   └── testFixtures.js              # loginPage fixture
├── tests/ui/
│   ├── login.valid.spec.js
│   └── login.invalid.spec.js
├── postman/                         # Newman collection + environment (template)
├── docs/
│   ├── project/                     # Test plan and test cases
│   └── templates/                   # RICE-POT, plan and case templates
├── playwright.config.js
└── package.json
```

## Configuration notes

- `testDir` is `tests/ui`; reporters are list, Playwright HTML and Allure.
- Timeouts are tuned for the slow public demo: 45s test timeout, 30s navigation, 15s actions, 10s assertions.
- The login page waits for `domcontentloaded` then asserts the username field is visible, avoiding flakiness on the `load` event.
- Artifacts: trace, screenshot and video are retained on failure.
- CI runs on pushes to `main` and pull requests, using repository secrets `ORANGEHRM_USERNAME` / `ORANGEHRM_PASSWORD`.
