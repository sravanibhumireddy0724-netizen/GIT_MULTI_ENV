import { test, expect } from '@playwright/test';


const TOKEN='2121de6791e5af85a6e0b92781a621ef22d4c0d2d2e599a8281b3df3f4e35a02';
const BASE_URL='https://gorest.co.in/public/v2/users';
const headers={
     Authorization:`Bearer ${TOKEN}`,
     'Content-Type':'application/json',
     'Accept':'application/json',
};

test('end to end flow',async({request})=>{

    console.log("==================POST CALL================");

    //step1: Create a user
const requestBody={
        name:'PW Test User',
        email:`PWTEST${Date.now()}@gmail.com`,
        gender:'female',
        status:'active'
     };
      const responsePOST =await request.post(BASE_URL,{
        headers,
        data:requestBody
    });

    expect(responsePOST.status()).toBe(201);

    const createdUser=await responsePOST.json();

    console.log(createdUser);
    const userID=createdUser.id;
    console.log("Created USER ID : "+userID);//8566500

    console.log("==================GET CALL================");
    //step2: Get the same user by using ID = userID

const responseGET=await request.get(BASE_URL+"/"+userID,{
    headers
});

  expect(responseGET.status()).toBe(200);
    const data=await responseGET.json();
    console.log(data);

    console.log("==================UPDATE CALL================");

    //step3: Update the same user by using userID


    const updateBody={
        name:'PW Test Automation User',
        status:'inactive'
    }

    const responsePUT=await request.put(BASE_URL+"/"+userID,{
            headers,
            data:updateBody
        })

         expect(responsePUT.status()).toBe(200);
    const UpdatedData=await responsePUT.json();
    console.log(UpdatedData);

 console.log("==================Delete CALL================");


 const responseDelete=await request.delete(BASE_URL+"/"+userID,{
    headers})

      expect(responseDelete.status()).toBe(204);
      console.log(userID+ "is deleted successfully");
})





