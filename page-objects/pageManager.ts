import { Page } from "@playwright/test";
import { HomePage } from "./homePage";
import { NavigationPage } from "./navigationPage";
import { MyAccountPage } from "./myAccountPage";

export class PageManager{

    readonly page: Page
    readonly homePage: HomePage
    readonly navigationPage: NavigationPage
    readonly myAccountPage: MyAccountPage

    constructor(page: Page){
        this.page = page
        this.homePage = new HomePage(this.page)
        this.navigationPage = new NavigationPage(this.page)
        this.myAccountPage = new MyAccountPage(this.page)
    }

    onHomePage(){
        return this.homePage
    }

    navigateTo(){
        return this.navigationPage
    }

    onMyAccount(){
        return this.myAccountPage
    }
}