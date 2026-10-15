

import {test, expect, Locator} from '@playwright/test';

test('Locate multiple elements and get their text', async ({page}) => {

    await page.goto("https://sauce-demo.myshopify.com/");


    //locate the side menu and get the text of all the links
    const locator:Locator=page.locator('//ul[@id="main-menu"]/li[position()<=6]/a');

    await expect(locator).toHaveCount(6);

   console.log("Total Count of the located elements: "+await locator.count());


    //Get all the text of the located elements
    const getalltext:string[]=await locator.allTextContents();

    //Print the text of all the located elements
    for(let eachtext of getalltext){
      console.log(eachtext);
    }

    //click the About-us link

    for(let i=0;i<await locator.count();i++){

    const text=await locator.nth(i).innerText();
    if(text.includes("About Us"))
    {
      await locator.nth(i).click();
      break;
    }
  }
  console.log("The page url",await page.url());
  
  await  expect(page).toHaveURL('https://sauce-demo.myshopify.com/pages/about-us');  
  await page.pause();
});