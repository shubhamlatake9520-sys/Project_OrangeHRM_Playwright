# OrangeHRM Demo Login — QA Test Plan

## 1. Document Control
| Field | Value |
|---|---|
| Project | OrangeHRM Demo Login QA |
| Application | OrangeHRM Open Source Demo |
| URL | https://opensource-demo.orangehrmlive.com/web/index.php/auth/login |
| Test Plan ID | TP-ORANGEHRM-LOGIN-001 |
| Version | 1.0 |
| Status | Draft for demo test automation |

## 2. Objective
Validate basic login UI, authentication success/failure, required-field validation and password masking. This is based on the requested scenarios, not an official OrangeHRM product specification.

## 3. Scope
### In scope
- Login page opens.
- Username, password and Login button are visible.
- Valid demo credentials authenticate and open the dashboard.
- Invalid username/password are rejected.
- Blank credentials trigger required-field validation.
- Password input is masked.
- Failed authentication leaves the user on the login page.

### Out of scope
- HR workflows after login.
- Password reset, SSO and MFA.
- API tests against undocumented endpoints.
- Remember Me, because its presence is not assumed.
- Production security certification or load testing.

## 4. Test Data
- Demo username: `Admin`
- Demo password: `admin123`
- Invalid username: `invalid.orangehrm.user`
- Invalid password: `InvalidPassword!123`

Demo credentials may change or be rate-limited by the public site. Override with environment variables when needed.

## 5. Test Approach
- Playwright Test with JavaScript and Node.js.
- Page Object Model with reusable login actions.
- Role-based locators where stable and available.
- Playwright auto-waiting and assertions; no fixed sleeps.
- Allure reporter and Playwright HTML report.
- Newman kept separate. Its collection is a placeholder until an approved API endpoint and authentication contract are supplied.

## 6. Test Scenarios
| ID | Scenario | Type | Expected result |
|---|---|---|---|
| ORH-LOGIN-001 | Open login page | Smoke | Login form visible |
| ORH-LOGIN-002 | Verify UI controls | Functional | Username, password and Login visible |
| ORH-LOGIN-003 | Valid login | Positive | Dashboard URL and heading visible |
| ORH-LOGIN-004 | Invalid password | Negative | Invalid credentials message |
| ORH-LOGIN-005 | Invalid username | Negative | Invalid credentials message |
| ORH-LOGIN-006 | Blank credentials | Validation | Required messages visible |
| ORH-LOGIN-007 | Password masking | UI | Password input type is password |

## 7. Entry Criteria
- Demo URL reachable.
- Node.js and npm installed.
- Dependencies installed.
- Demo credentials work and are approved.
- Browser available.

## 8. Exit Criteria
- Scenarios executed or explicitly blocked.
- Failures reviewed with evidence.
- Reports generated.
- Environment/credential issues documented.

## 9. Risks and Constraints
- Public demo availability and credentials are outside the test suite's control.
- UI text/selectors may change.
- CAPTCHA, throttling or service interruptions may block automation.
- Newman requires a supported endpoint and authentication flow.

## 10. Traceability
See `TEST_CASES_ORANGEHRM.md`.
