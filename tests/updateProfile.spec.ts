import { test, expect } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';


test.beforeEach(async({page}) => {
  const pm = new PageManager(page)
  const baseUrl = process.env.BASE_URL;
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  await page.goto(baseUrl!)
  await pm.onHomePage().login(email!, password!)
})

test('update user profile details', async ({ page }) => {
  const pm = new PageManager(page)

  await pm.onHomePage().openMenu()
  await pm.navigateTo().myAccount()

  const oldUsername = await pm.onMyAccount().currentUsername()
  const newUsername = (Math.random() + 1).toString(36).substring(7)

  await pm.onMyAccount().editProfile(newUsername)

  let currentUsername = await pm.onMyAccount().currentUsername()

  await expect(currentUsername).toEqual(newUsername)

  await pm.onMyAccount().returnToHomePage()

  let coinType = await pm.onHomePage().currentCoinType()
  let coinsBalance = await pm.onHomePage().coinsBalance()

  console.log(`Coin Type: ${coinType}\nBalance: ${coinsBalance}`)

  await pm.onHomePage().switchCoinType()

  coinType = await pm.onHomePage().currentCoinType()
  coinsBalance = await pm.onHomePage().coinsBalance()

  console.log(`Coin Type: ${coinType}\nBalance: ${coinsBalance}`)

  await pm.onHomePage().openMenu()
  await pm.navigateTo().myAccount()
  await pm.onMyAccount().updateUsernameTo(oldUsername)
});