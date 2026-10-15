import {test,expect, Locator} from '@playwright/test';

test('Fetch text of all links on Amazon Home Page',async({page})=>{

   await page.goto("https://www.amazon.ae/");

   //page.waitForTimeout(2000);

   const locator:Locator=await page.locator('a');
 
  
// Wait until at least one anchor element exists
    await locator.first().waitFor({ state: 'attached' }); 

   console.log("Total count of the lcoated elements:",await locator.count());

   //get all the text from the a tag and print it


      // Convert the locator into an array
    const links: Locator[] = await locator.all();

    const textArray:String[]=[];

    for(let link of links){

    const text= await link.innerText();
    if(text.trim().length>0)
    {
     textArray.push(text);
    }
   }
   console.log("Array of link texts:", textArray);
});