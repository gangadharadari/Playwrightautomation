import { test, expect } from '@playwright/test';

import loginData from "../testData/loginData.json"

test("Verify login with Valid Credential", async ({page}) => {

    //ACTIONS

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    await page.locator("input[name='username']").fill(loginData.username)
    
    await page.locator("input[type='password']").fill(loginData.password)

    await page.locator("button[type='submit']").click()

    //Asserssions - minimum one asserssion in test it means verifications
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    await page.close()

})

test("Verify login with Valid Username and Invalid Password", async ({page}) => {

    //ACTIONS

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    await page.locator("input[name='username']").fill("Admin")
    
    await page.locator("input[type='password']").fill("admin126543")

    await page.locator("button[type='submit']").click()

    //Asserssions - minimum one asserssion in test it means verifications

    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

    await page.close()
})

test("Verify login with Invalid Username and Valid Password Credential", async ({page}) => {

    //ACTIONS

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    await page.locator("input[name='username']").fill("Admisdn")
    
    await page.locator("input[type='password']").fill("admin123")

    await page.locator("button[type='submit']").click()

    //Asserssions - minimum one asserssion in test it means verifications

    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

    await page.close()

})

test("Verify login with In-Valid Credential", async ({page}) => {

    //ACTIONS

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    await page.locator("input[name='username']").fill("Admidfn")
    
    await page.locator("input[type='password']").fill("admdfdfin123")

    await page.locator("button[type='submit']").click()

    //Asserssions - minimum one asserssion in test it means verifications

    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

    await page.close()


})