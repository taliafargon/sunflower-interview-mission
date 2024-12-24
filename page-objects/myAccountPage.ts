import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase"; 

export class MyAccountPage extends HelperBase{

    constructor(page: Page){
        super(page)
    }

    async currentUsername(): Promise<string> {
        await this.page.getByText('MY PROFILE').click();

        const username = await this.page.getByTestId('my-profile-nickname').textContent();
        await this.page.getByTestId('closeButton').first().click();
    
        return username ?? 'Unknown';
    }

    async editProfile(username: string){
        // Gets in to edit mode
        await this.page.getByTestId('editAvatar').click()
        
        // Updating username and avatar
        await this.page.getByTestId('nicknameInput').fill(username)

        const avatarsAmount = (await this.page.locator('._avatarImage_nil5y_88').all()).length

        await this.page.getByTestId(`avatar-image-${Math.floor(Math.random() * (avatarsAmount))}`).click()

        await this.page.getByText('Apply').click()
    }

    async updateUsernameTo(username: string){
        // Gets in to edit mode
        await this.page.getByTestId('editAvatar').click()
        
        // Updating username
        await this.page.getByTestId('nicknameInput').fill(username)
        await this.page.getByText('Apply').click()
    }
    
    async returnToHomePage(){
        await this.page.getByTestId('closeButton').first().click()
    }
}