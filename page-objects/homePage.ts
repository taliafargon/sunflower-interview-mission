import { Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase"; 

export class HomePage extends HelperBase{

    constructor(page: Page){
        super(page)
    }

    async login(email: string, password: string){
        // Log In
        await this.page.getByTestId('lobby-login-btn').click()
        await this.page.getByTestId('email-input').fill(email)
        await this.page.getByTestId('password-input').fill(password)
        await this.page.getByTestId('login-submit-btn').click()

        // Make sure user is logged in
        await expect(this.page.getByTestId('lobby-balance-bar')).toBeVisible()

        // Ignore popup
        const closePopup = await this.page.locator('#onesignal-slidedown-cancel-button')

        if(await closePopup.isVisible()){
            closePopup.click()
        }
    }

    async openMenu(){
        await this.page.getByTestId('menuButton').click()
    }

    async switchCoinType(){
        await this.page.getByTestId('coin-switcher').click()
    }

    async currentCoinType(){
        return await this.page.locator('.balance-panel-left').innerText()
    }

    async coinsBalance(){
        const coinBalanceElement = await this.page.getByTestId('lobby-balance-bar')
        await this.waitForTextToStabilize(coinBalanceElement)
        return coinBalanceElement.innerText()
    }
}