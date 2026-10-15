import {test,expect, Locator} from '@playwright/test';

test('Fetch all Google search suggestions',async({page})=>{

   await page.goto("https://www.google.com/");
   await page.locator('textarea[jsname="yZiJbe"]').fill('playwright learnings');
   
   await page.waitForTimeout(3000);

   //locate the google suggestion text
   const suggestionText:Locator[]=await page.locator('//div[@jsname="erkvQe"]//li//div[@class="wM6W7d"]/span')
                                            .all();
   
   //Create an String array to hold the text 
   const textArray:String[]=[];

   // Get the text of the Locator
   for(let locator of suggestionText){

      let text:String=await locator.innerText();
      textArray.push(text);
   }
  console.log(textArray);

   });