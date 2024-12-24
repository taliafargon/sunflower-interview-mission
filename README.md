# Sunflower Interview \- Test Standard

## **Update Profile Test**

### - **Test Purpose**:

To validate the functionality of updating a user's profile settings \- specifically the username and avatar \- and ensure that the changes are reflected accurately.

### - **Preconditions**:

#### - Add .env file to the main folder of the project, that includes the variables in the example.env file

- Log in to an account that has profile editing permission.
- The account should have a predefined username to validate that updates are successful.
- Record the original username for post-condition checks.

### - **Steps to Execute**:

| Step                                                  | Primary Action                                         | Expected Result                                        |
| ----------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| 1\. Log in to the account                             | Enter valid credentials and log in.                    | Logged in successfully.                                |
| 2\. Navigate to the user’s account page               | Access the account settings or profile page.           | Current user details and an edit option are displayed. |
| 3\. Update the username and avatar, then save changes | Modify the username and avatar, then save the changes. | User details are updated successfully.                 |
| 4\. Verify the profile                                | Navigate to the user's profile page.                   | Updated username and avatar are displayed.             |

### - **Post-Conditions**:

Revert the username to its original value prior to the test execution.

### - **Validation Criteria**:

The test is considered successful if:

- The updated username replaced the old one correctly.
- No errors occur during the update process.

## - **How To Run**:

`npx playwright test --project=chromium --headed`
