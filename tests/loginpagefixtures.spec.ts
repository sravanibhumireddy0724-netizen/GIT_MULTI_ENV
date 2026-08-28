import {test,expect} from '../src/fixtures/pagefixtures'


test.beforeEach(async({loginPage})=>{
    await loginPage.goToLoginPage();
})


test('@smoke user is able to login',async({loginPage,homePage})=>{
await loginPage.doLogin(process.env.APP_USERNAME!,process.env.APP_PASSWORD!);
expect.soft (await homePage.isLogoutLinkExist()).toBeTruthy();
expect.soft(await homePage.getHomePageTitle()).toBe('My Account')

} )

