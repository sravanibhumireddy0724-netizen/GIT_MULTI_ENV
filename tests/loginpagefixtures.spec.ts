import {test,expect} from '../src/fixtures/pagefixtures'
import { LoginPage } from '../src/pages/LoginPage';
import { CsvHelper } from '../src/utils/CSVHelper';
import { ExcelHelper } from '../src/utils/ExcelHelper';
import { JsonHelper } from '../src/utils/JsonHelper';


test.beforeEach(async({loginPage})=>{
    await loginPage.goToLoginPage();
})

test('Loginpage title test with fixtures',async({loginPage})=>{
    const pageTitle=await loginPage.getLoginPageTitle();
      console.log("Login page Title is :"+pageTitle);
    expect(pageTitle).toBe('Account Login')

})

test('@smoke user is able to login',async({loginPage,homePage})=>{
await loginPage.doLogin(process.env.APP_USERNAME!,process.env.APP_PASSWORD!);
expect.soft (await homePage.isLogoutLinkExist()).toBeTruthy();
expect.soft(await homePage.getHomePageTitle()).toBe('My Account')

} )

test('User is unable to login with wrong credentials',async({loginPage,testData})=>{

console.log(testData);
console.log(testData.length);
for(let row of testData){
    await loginPage.doLogin(row.username,row.password);
    expect (await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
}

} )

//without fixtures: 

let testData=CsvHelper.readCsv('src/data/loginData.csv');//3
for(let row of testData)
{
test(`User is unable to login with ${row.username} and ${row.password}`,async({loginPage})=>{

await loginPage.doLogin(row.username,row.password);
expect (await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
}
)
}

//with excel utility


// let loginTestData=ExcelHelper.readExcel('src/data/OpenCartTestData.xlsx','login');//3
// for(let row of loginTestData)
// {
// test(`Excel-User is unable to login with ${row.username} and ${row.password}`,async({loginPage})=>{

// await loginPage.doLogin(row.username,row.password);
// expect (await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
// }
// )
// }

let loginTestData = ExcelHelper.readExcel('src/data/OpenCartTestData.xlsx');
for (let row of loginTestData) {
    test(`@regression invalid login test with excel data - ${row.username}`, async ({ loginPage }) => {
        await loginPage.doLogin(row.username, row.password);
        expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
    });
};




let loginJSONData=JsonHelper.readJson('src/data/logindata.json');//3
for(let row of loginJSONData)
{
test(`With JSON -User is unable to login with ${row.username} and ${row.password}`,async({loginPage})=>{

await loginPage.doLogin(row.username,row.password);
expect (await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
}
)
}



