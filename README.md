# Playwright Test Automation challange

## Test Cases (data/testCases.json):

Description of test cases by ID including expected result and test steps.

"isMandatory" and "isValid" keys could be incorporated to enhance test case coverage and validation handling.

"regEx" could be used for automating test data

## Test Data (data/testData.json):

Containing test data for the user per case

## Additional Modules used

import { UserProfilePage } from '../pages/userProfilePage';

import testCases from '../data/testCases.json';

import testData from '../data/testData.json';

import { TestCase } from '../types/testCase';

## Validation and Error Handling Considerations

Add logic to handle pop-up alerts shown when an invalid email address is entered.

Enhanced error handling is required for scenarios where certain data inputs, like invalid date formats, cannot be processed.

## Deliverable

The Playwright test report, including detailed results and visual summaries, is available in the 'playwright-report/' directory.
