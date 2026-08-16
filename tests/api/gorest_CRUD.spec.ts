import { test, expect } from '@playwright/test';


const TOKEN='2121de6791e5af85a6e0b92781a621ef22d4c0d2d2e599a8281b3df3f4e35a02';
const BASE_URL='https://gorest.co.in/public/v2/users';
const headers={
     Authorization:`Bearer ${TOKEN}`,
     'Content-Type':'application/json',
     'Accept':'application/json',
};

test('GET- Fetch all users',async({request})=>{
    
    const response =await request.get(BASE_URL,{headers});

    expect(response.status()).toBe(200);
    const data=await response.json();
    console.log(data);
})

test('POST- Create a new user',async({request})=>{
    
const requestBody={
        name:'PW Test User',
        email:`PWTEST${Date.now()}@gmail.com`,
        gender:'female',
        status:'active'
     };

    const response =await request.post(BASE_URL,{
        headers,
        data:requestBody
    });

    expect(response.status()).toBe(201);
    const data=await response.json();
    console.log(data);
})


test('PUT- Update a user',async({request})=>{
    
const uderID=8566492;

const requestBody={      
        status:'INACTIVE',
        gender:'Male'
     };

    const response =await request.put(`${BASE_URL}/${uderID}`,
        {
        headers,
        data:requestBody
    });

    expect(response.status()).toBe(200);
    const data=await response.json();
    console.log(data);
})

test('Delete a user',async({request})=>{
    
const uderID=8566492;

    const response =await request.delete(`${BASE_URL}/${uderID}`,
        {
        headers
      
    });

    expect(response.status()).toBe(204);
   
})


