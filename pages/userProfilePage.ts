import { Page } from '@playwright/test';

export class UserProfilePage {
  public dialogMessage = '';
  constructor(private page: Page) {}
  
  async goto() {
    await this.page.goto('https://qa-assessment.pages.dev/');
  }

  async addInput(fieldId: string, input: string) {
    if (input === '') return;
    await this.page.fill(fieldId, input);
  }

  async submitInput() {
    this.page.on('dialog', async dialog => {
      this.dialogMessage = dialog.message();
      await dialog.dismiss();
    });
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }

  async getErrorMessage() {
    return this.dialogMessage;
  }
}


