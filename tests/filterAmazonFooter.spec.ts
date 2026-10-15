import {test,expect, Locator} from '@playwright/test';

test('Filter method of all links on footer of Amazon Home Page',async({page})=>{

   await page.goto("https://www.amazon.ae/");

   //Locate the footer section of the page

   const locator:Locator=await page.locator('//div[contains(@class,"navFooterMore")]//a');

   //wait for untill the lcoatoe is attached to the DOM
   await locator.first().waitFor({state:'attached'});


   //use filter methof to click on the link which has the text "Fashion Brands"

   await locator.filter({hasText:"Fashion Brands"}).click();

   await expect(page).toHaveURL('https://www.shopbop.com/');
 
});