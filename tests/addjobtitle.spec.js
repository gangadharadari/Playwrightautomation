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
        // await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

        await page.locator("//span[text()='Admin']").click()
        await page.locator("//span[normalize-space(text())='Job']").click()
        await page.locator("//a[normalize-space(text())='Job Titles']").click()
        await page.locator("//button[contains(.,'Add')]").click()
        await page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]").fill(jobtitle.jobtitle)
        await page.locator("(//label[normalize-space(text())='Job Description']/following::textarea)[1]").fill(jobtitle.jobDescription)
        await page.locator("//button[contains(.,'Save')]").click()

        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")

    })
})