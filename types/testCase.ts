export interface TestCase {
  testCaseId: string;
  [key: string]: string | string[]; // this allows dynamic fields with string or string[] values
}