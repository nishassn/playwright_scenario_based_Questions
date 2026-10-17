import {test,expect, Locator} from '@playwright/test';

test('Get all row data from a specific table row',async({page})=>{

   await page.goto("https://qavbox.github.io/demo/webtable/");

   const rowData:string[]=await page.locator(`//table[@id="table02"]//tr[2]`).allInnerTexts();

   for(let data of rowData)
   {
   console.log(data);
   }

 
});