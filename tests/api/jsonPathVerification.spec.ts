import { test, expect } from '@playwright/test';
import {JSONPath} from 'jsonpath-plus';

const BASE_URL='https://fakestoreapi.com/products';
const headers={
   
     'Content-Type':'application/json',
     'Accept':'application/json',
};

test('GET- Fetch all users',async({request})=>{
    
    const response =await request.get(BASE_URL,{headers})
    expect(response.status()).toBe(200);
    const data=await response.json();
    console.log(data);

    //get all titile
    const titles=JSONPath({path:`$[*].title`,json:data});
    console.log(titles);

    //get all ids

      const ids=JSONPath({path:`$[*].id`,json:data});
    console.log(ids);
    //get all rates
    
      const rates=JSONPath({path:`$[*].rating.rate`,json:data});
    console.log(rates);
    //get all the products titles where category ='jewellery'
    //$[?(@.category=='jewelery')].title

    const jewelTitle=JSONPath({path:`$[?(@.category=='jewelery')].title`,json:data})
    console.log(jewelTitle);

})