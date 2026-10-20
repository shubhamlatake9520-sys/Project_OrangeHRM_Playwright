# QA RICE-POT Master Pack — OrangeHRM Playwright Project

---

# RICE-POT Master QA Task Template

> Replace prompts with confirmed project information. Do not invent requirements where source material is silent.

## R — Requirement
- **Task ID:** [ID]
- **Feature / Module:** [Name]
- **Business requirement:** [Source-backed requirement]
- **User story:** [As a / I want / So that]
- **Requirement reference:** [PRD / ticket]
- **Priority / risk:** [Confirmed value]
- **Acceptance criteria:** [Explicit, testable outcomes]

## I — Inputs / Preconditions
- **Application / URL:** [URL]
- **Environment:** [QA / UAT / staging]
- **Role / permissions:** [Required role]
- **Preconditions:** [Required state]
- **Test data:** [Approved data]
- **Dependencies:** [Services, integrations, flags]

| Data item | Value/source | Purpose | Sensitivity |
|---|---|---|---|
| [Field] | [Value/source] | [Purpose] | [Classification] |

## C — Conditions / Constraints
- Functional conditions:
- Technical constraints:
- Security/privacy constraints:
- Assumptions:
- Out of scope:
- Open questions:

## E — Expected Results
- Primary result:
- Negative result:
- Boundary result:
- Acceptance criteria:

## P — Procedure / Test Flow
1. [Action]
2. [Action]
3. [Action]
4. [Verify expected result]

Include positive, negative, boundary, state-transition, permission, recovery and regression paths where relevant.

## O — Output / Evidence
- Execution status: [Not Run / Pass / Fail / Blocked]
- Actual result:
- Evidence: [Screenshot, trace, logs, report]
- Defect ID:
- Severity / priority:
- Environment/build:

## T — Test Data / Traceability
| Requirement ID | Scenario ID | Test Case ID | Automation ID | Defect ID | Status |
|---|---|---|---|---|---|
| [REQ] | [TS] | [TC] | [AUTO] | [BUG] | [Status] |

### Completion checklist
- [ ] Requirement reviewed
- [ ] Preconditions and data verified
- [ ] Positive and negative cases considered
- [ ] Boundary and error handling considered
- [ ] Security/privacy impact considered
- [ ] Expected outcomes measurable
- [ ] Traceability maintained
- [ ] Evidence and defects recorded

---

# Enterprise QA Test Plan Template

## 1. Document control
| Field | Value |
|---|---|
| Product / project | |
| Feature / module | |
| Test plan ID / version | |
| Author / reviewer | |
| Environment / build | |
| Date / status | |

## 2. Objectives
[Goals based on approved requirements.]

## 3. Requirement basis and traceability
[Source documents, versions, IDs and unresolved gaps.]

## 4. Scope
### In scope
-
### Out of scope
-

## 5. Test approach
- Functional / positive / negative / boundary
- Integration / end-to-end
- Regression / smoke
- Compatibility / accessibility, if required
- Security / privacy, if required
- Performance / reliability, if measurable requirements exist
- Automation candidates and rationale

## 6. Environment and tools
| Component | Confirmed configuration |
|---|---|
| Application / URL | |
| Environment / build | |
| Browser / OS / device | |
| Test framework | |
| Reporting / defect tool | |
| Integrations / stubs | |

## 7. Entry criteria
-
## 8. Exit criteria
-
## 9. Test data and access
[Data source, reset strategy, privacy constraints, roles and credentials.]

## 10. Scenarios and coverage
| Scenario ID | Requirement ID | Scenario | Type | Priority | Automation |
|---|---|---|---|---|---|
| | | | | | |

## 11. Non-functional testing
[Applicable requirements with measurable acceptance thresholds.]

## 12. Risks and mitigations
| Risk | Impact | Mitigation / owner |
|---|---|---|
| | | |

## 13. Defect management
[Workflow, severity definitions and evidence expectations.]

## 14. Deliverables
[Test cases, automation, reports, defects, traceability and sign-off.]

## 15. Open questions
| Question | Owner | Due date | Status |
|---|---|---|---|
| | | | |

## 16. Approval
| Role | Name | Decision | Date |
|---|---|---|---|
| Product owner | | | |
| QA lead | | | |
| Engineering lead | | | |

---

# Enterprise QA Test Cases Template

## Test case index
| Test Case ID | Requirement ID | Scenario | Type | Priority | Automation | Status |
|---|---|---|---|---|---|---|
| TC-001 | REQ-001 | [Scenario] | Functional | High | Yes/No | Not Run |

---

## Test Case: TC-001 — [Title]
- Requirement / story:
- Scenario / module:
- Type: [Positive / Negative / Boundary / Regression / Security / Integration]
- Priority: [High / Medium / Low]
- Automation: [Yes / No / Candidate]
- Environment: [Environment/build]

### Preconditions
1. [Precondition]

### Test data
| Field | Value/source |
|---|---|
| | |

### Steps
| Step | Action | Expected result |
|---|---|---|
| 1 | | |
| 2 | | |
| 3 | | |

### Expected result
[Observable, testable result.]

### Actual result
[Populate during execution.]

### Status
[Not Run / Pass / Fail / Blocked]

### Evidence and defect
- Evidence:
- Defect ID:
- Severity:
- Notes:

### Traceability
- Requirement:
- Scenario:
- Automation spec:

---

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

---

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
