import { test, expect } from '@playwright/test';

import loginData from "../testData/loginData.json"
import jobtitle from "../testData/addjobtitle.json"

test.describe('Add Job Title Feature', () => {

    test("Verify login with Valid Credential", async ({ page }) => {

        //ACTIONS

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        await page.locator("input[name='username']").fill(loginData.username)

        await page.locator("input[type='password']").fill(loginData.password)

        await page.locator("button[type='submit']").click()

        //Asserssions - minimum one asserssion in test it means verifications
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

        await page.locator("//a[@class='oxd-main-menu-item active']").click()
        await page.locator("//li[contains(@class,'--active oxd-topbar-body-nav-tab')]").click()
        await page.locator("(//a[@class='oxd-topbar-body-nav-tab-link'])[1]").click()
        await page.locator("//button[contains(@class,'oxd-button oxd-button--medium')]").click()
        await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(jobtitle.jobtitle)
        await page.locator("(//textarea[contains(@class,'oxd-textarea oxd-textarea--active')])[1]").fill(jobtitle.jobDescription)

        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")

    })
})