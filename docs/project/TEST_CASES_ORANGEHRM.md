# OrangeHRM Demo Login — Test Cases

| ID | Scenario | Type | Priority | Automated spec |
|---|---|---|---|---|
| ORH-LOGIN-001 | Login page and controls visible | Smoke/UI | High | `login.valid.spec.js` |
| ORH-LOGIN-002 | Valid demo credentials authenticate | Positive | High | `login.valid.spec.js` |
| ORH-LOGIN-003 | Invalid password rejected | Negative | High | `login.invalid.spec.js` |
| ORH-LOGIN-004 | Invalid username rejected | Negative | High | `login.invalid.spec.js` |
| ORH-LOGIN-005 | Blank credentials show required validation | Validation | High | `login.invalid.spec.js` |
| ORH-LOGIN-006 | Password masks input | UI | Medium | `login.invalid.spec.js` |

## ORH-LOGIN-001 — Login page UI
**Precondition:** Demo site reachable.
1. Navigate to login URL.
2. Check username, password and Login button.
**Expected:** All controls are visible.

## ORH-LOGIN-002 — Valid login
**Precondition:** Approved demo credentials available.
1. Open login page.
2. Enter `Admin` and `admin123` (or environment overrides).
3. Submit Login.
**Expected:** Dashboard route and Dashboard heading are visible.

## ORH-LOGIN-003 — Invalid password
1. Open login page.
2. Enter valid demo username and invalid password.
3. Submit.
**Expected:** User remains on login page and invalid credentials message appears.

## ORH-LOGIN-004 — Invalid username
1. Open login page.
2. Enter invalid username and a password.
3. Submit.
**Expected:** User remains on login page and invalid credentials message appears.

## ORH-LOGIN-005 — Blank credentials
1. Open login page.
2. Submit without entering credentials.
**Expected:** Required-field validation appears for both fields.

## ORH-LOGIN-006 — Password masking
1. Open login page.
2. Enter a sample password.
**Expected:** Password input has `type=password`.
