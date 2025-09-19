import { test, expect } from '@playwright/test';

test("Verify login with Valid Credential", async ({page}) => {

    //ACTIONS

    await page.goto("https://www.saucedemo.com/v1/")
    
    await page.locator("input[data-test='username']").fill("standard_user")
    
    await page.locator("input[type='password']").fill("secret_sauce")

    await page.locator("input[type='submit']").click()

    //Asserssions - minimum one asserssion in test it means verifications(expected result)

    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")


})

test("Verify login with Valid Username and Invalid Password Credential", async ({page}) => {

    //ACTIONS

    await page.goto("https://www.saucedemo.com/v1/")
    
    await page.locator("input[data-test='username']").fill("standard_user")
    
    await page.locator("input[type='password']").fill("secret_sauce565")

    await page.locator("input[type='submit']").click()

    //Asserssions - minimum one asserssion in test it means verifications

    await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()


})

test("Verify login with Invalid Password and Valid Password Credential", async ({page}) => {

    //ACTIONS

    await page.goto("https://www.saucedemo.com/v1/")
    
    await page.locator("input[data-test='username']").fill("standaddard_user")
    
    await page.locator("input[type='password']").fill("secret_sauce")

    await page.locator("input[type='submit']").click()

    //Asserssions - minimum one asserssion in test it means verifications

    await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()


})

test("Verify login with In-Valid Credential", async ({page}) => {

    //ACTIONS

    await page.goto("https://www.saucedemo.com/v1/")
    
    await page.locator("input[data-test='username']").fill("stasdfafndard_user")
    
    await page.locator("input[type='password']").fill("secret_6595sauce")

    await page.locator("input[type='submit']").click()

    //Asserssions - minimum one asserssion in test it means verifications

    await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()


})

test("Verify login with giving space in Credential", async ({page}) => {

    //ACTIONS

    await page.goto("https://www.saucedemo.com/v1/")
    
    await page.locator("input[data-test='username']").fill("     ")
    
    await page.locator("input[type='password']").fill("     ")

    await page.locator("input[type='submit']").click()

    //Asserssions - minimum one asserssion in test it means verifications

    await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()


})

test("Verify login without Credential", async ({page}) => {

    //ACTIONS

    await page.goto("https://www.saucedemo.com/v1/")
    
    await page.locator("input[data-test='username']").fill("")
    
    await page.locator("input[type='password']").fill("")

    await page.locator("input[type='submit']").click()

    //Asserssions - minimum one asserssion in test it means verifications

    await expect(page.locator("//h3[contains(.,'Epic sadface: Username is required')]")).toBeVisible()


})