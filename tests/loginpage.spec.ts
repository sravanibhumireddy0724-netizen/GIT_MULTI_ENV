import{test,expect} from '@playwright/test';

import {LoginPage} from '../src/pages/LoginPage'

let loginPage:LoginPage;

test.beforeEach(async({page})=>{
        loginPage= new LoginPage(page);
    await loginPage.goToLoginPage();
})


test("Login Page Title test",async ({page})=>{
    // let loginPage= new LoginPage(page);
    // await loginPage.goToLoginPage();
    
    const pageTitle=await loginPage.getLoginPageTitle();
    //page.title();
    
    console.log("Login page Title is :"+pageTitle);
    expect(pageTitle).toBe('Account Login')
})


test("User is able to login",async ({page})=>{
    
    // let loginPage= new LoginPage(page);
    // await loginPage.goToLoginPage();
    await loginPage.doLogin("Anu123@nal.com","Test@123")
    let homepageTitle=await page.title();
    console.log(homepageTitle);
    expect(homepageTitle).toBe("My Account");

})

test("Verifying Error message",async ({page})=>{
    // let loginPage= new LoginPage(page);
    // await loginPage.goToLoginPage();
    await loginPage.doLogin("Anu123@nal.com","Test@1234")
   let errorMsg=await loginPage.getErrorMesg();
   console.log(errorMsg);
    expect(errorMsg).toBe(" Warning: No match for E-Mail Address and/or Password.");

})