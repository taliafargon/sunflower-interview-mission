import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase"; 

export class NavigationPage extends HelperBase{

    constructor(page: Page){
        super(page)
    }

    async myAccount(){
        // Navigates to 'my account'
        await this.page.getByText('My Account').click()
    }
}