
import { test, expect } from '@playwright/test';
import { UserProfilePage } from '../pages/userProfilePage';
import testCases from '../data/testCases.json';
import testData from '../data/testData.json';
import { TestCase } from '../types/testCase';

testCases.forEach(({ testCaseId, description, expectedResult }) => {
  const currTestCase = testData.find(entry => entry.testCaseId === testCaseId) as TestCase;

  if (!currTestCase) {
    console.warn(`No test data found for testCaseId: ${testCaseId}`);
    return;
  }

  // Remove testCaseId from currTestCase to get all input fields/values
  const { testCaseId: _, ...fields } = currTestCase;

  test(`${testCaseId} - ${description}`, async ({ page }) => {
    const userProfile = new UserProfilePage(page);

    await userProfile.goto();

    // Add inputs for all fields in the test case
    for (const [field, value] of Object.entries(fields)) {
      // If value is array, add each; else just add the single value (skip empty strings)
      const values = Array.isArray(value) ? value : [value];

      for (const input of values) {
        if (input === '') continue;
        await userProfile.addInput(`#${field}`, input);
      }
    }

    await userProfile.submitInput();

    await expect(userProfile.dialogMessage).toContain(expectedResult);
  });
});
