import { test, expect } from '@playwright/test';


test('Basic Auth Test',async({request})=>{

    const username='admin';
    const passsord='admin';

    const credentials= Buffer.from(`${username}:${passsord}`).toString('base64');
    console.log(credentials);
    
    const response =await request.get('https://the-internet.herokuapp.com/basic_auth',

        { headers:{
            Authorization:`Basic ${credentials}`
                }

        });

    expect(response.status()).toBe(200);
    const body=await response.text();
    console.log(body);
})