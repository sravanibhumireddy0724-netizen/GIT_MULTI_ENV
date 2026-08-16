import{Locator,Page} from "@playwright/test"
import {BasePage} from "./BasePage"

export class LoginPage extends BasePage{

    private readonly emailId:Locator;
    private readonly password :Locator
    private readonly loginBtn:Locator;
    private readonly forgoattenPasswordLink:Locator;
    private readonly loginErrorMessage:Locator;
    

    constructor(page:Page){
        super(page);
        this.emailId=this.page.getByRole('textbox',{name:'E-Mail Address'});
        this.password=page.getByRole('textbox',{name:'Password'});
        this.loginBtn=page.getByRole('button',{name:'Login'});
        this.forgoattenPasswordLink=page.getByRole('link',{name:'Forgotten Password'});
        this.loginErrorMessage=page.locator(`.alert.alert-danger.alert-dismissible`);
            
        }


async goToLoginPage():Promise<void>{
    await this.page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
}

async doLogin(username:string,password:string):Promise<void>{
    console.log(`User credentials : ${username} - ${password}`);
    await this.emailId.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();

}
   async getLoginPageTitle(): Promise<string> {

        return await this.page.title();
    }
async getErrorMesg(): Promise<string> {
    
       return await this.loginErrorMessage.innerText();      

}
async isInvalidLoginErrorDisplayed(): Promise<boolean> {
        return await this.loginErrorMessage.isVisible();
    }
}