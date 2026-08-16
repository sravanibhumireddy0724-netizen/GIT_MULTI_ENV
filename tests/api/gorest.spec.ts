import { test, expect } from '@playwright/test';


const TOKEN='2121de6791e5af85a6e0b92781a621ef22d4c0d2d2e599a8281b3df3f4e35a02';

test('GET- Fetch all users',async({request})=>{
    
    const response =await request.get('https://gorest.co.in/public/v2/users',

        { headers:{
            Authorization:`Bearer ${TOKEN}`
                }

        });

    expect(response.status()).toBe(200);
    const data=await response.json();
    console.log(data);
})


test('GET- Fetch specific user',async({request})=>{
    
    const response =await request.get('https://gorest.co.in/public/v2/users/8563913',

        { headers:{
            Authorization:`Bearer ${TOKEN}`
                }
        });

    expect(response.status()).toBe(200);
    const data=await response.json();
    console.log(data);
})

test('POST- create a user',async({request})=>{
     const requestBody={
        name:'PW Test User',
        email:`PWTEST${Date.now()}@gmail.com`,
        gender:'female',
        status:'active'
     };

     const response=await request.post('https://gorest.co.in/public/v2/users',{
        headers:{
            Authorization:`Bearer ${TOKEN}`
        },
        data:requestBody
    })  

 expect(response.status()).toBe(201);
 const resdata =await response.json();
 console.log(resdata);
     
    


})