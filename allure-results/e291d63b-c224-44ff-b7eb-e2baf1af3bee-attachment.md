# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\gorest.spec.ts >> POST- create a user
- Location: tests\api\gorest.spec.ts:36:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 422
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | 
  4  | const TOKEN='2121de6791e5af85a6e0b92781a621ef22d4c0d2d2e599a8281b3df3f4e35a02';
  5  | 
  6  | test('GET- Fetch all users',async({request})=>{
  7  |     
  8  |     const response =await request.get('https://gorest.co.in/public/v2/users',
  9  | 
  10 |         { headers:{
  11 |             Authorization:`Bearer ${TOKEN}`
  12 |                 }
  13 | 
  14 |         });
  15 | 
  16 |     expect(response.status()).toBe(200);
  17 |     const data=await response.json();
  18 |     console.log(data);
  19 | })
  20 | 
  21 | 
  22 | test('GET- Fetch specific user',async({request})=>{
  23 |     
  24 |     const response =await request.get('https://gorest.co.in/public/v2/users/8563913',
  25 | 
  26 |         { headers:{
  27 |             Authorization:`Bearer ${TOKEN}`
  28 |                 }
  29 |         });
  30 | 
  31 |     expect(response.status()).toBe(200);
  32 |     const data=await response.json();
  33 |     console.log(data);
  34 | })
  35 | 
  36 | test('POST- create a user',async({request})=>{
  37 |      const requestBody={
  38 |         name:'PW Test User',
  39 |         email:'PWTEST_78676@gmail.com',
  40 |         gender:'female',
  41 |         status:'active'
  42 |      };
  43 | 
  44 |      const response=await request.post('https://gorest.co.in/public/v2/users',{
  45 |         headers:{
  46 |             Authorization:`Bearer ${TOKEN}`
  47 |         },
  48 |         data:requestBody
  49 |     })  
  50 | 
> 51 |  expect(response.status()).toBe(201);
     |                            ^ Error: expect(received).toBe(expected) // Object.is equality
  52 |  const resdata =await response.json();
  53 |  console.log(resdata);
  54 |      
  55 |     
  56 | 
  57 | 
  58 | })
```