import { Page, Locator } from "@playwright/test";

export class HelperBase{

    readonly page:Page

    constructor(page: Page){
        this.page = page
    }

    async waitForTextToStabilize(
        locator: Locator,
        timeout: number = 5000
      ): Promise<void> {
        let previousText: string | null = null;
        const startTime = Date.now();
      
        while (Date.now() - startTime < timeout) {
          const currentText = await locator.textContent();
      
          if (currentText === previousText) {
            return; // Text has stabilized
          }
      
          previousText = currentText;
          await new Promise((resolve) => setTimeout(resolve, 200)); // Poll every 200ms
        }
      
        throw new Error('Text did not stabilize within the timeout period');
      }
}