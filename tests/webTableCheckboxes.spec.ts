//*Navigate to a web page containing a table with multiple rows and columns. 
// Locate the column that contains checkboxes 
// and click the checkboxes in the table rows. Verify that the checkboxes are selected successfully.


import {test,expect, Locator, Page} from '@playwright/test';

test('Select Checkboxes in a Web Table',async({page})=>{

   await page.goto("https://qavbox.github.io/demo/webtable/");

  await locateAndClick(page,'Functional');

 await locateAndClick(page,'GUI');

 await locateAndClick(page,'Performance');

});

// Write the reuse function
async function  locateAndClick(page:Page,user:String)
{
 //Locate the checkbox
   const checkBox:Locator=page.locator(`//td[text()='${user}']/preceding-sibling::td//input[@type='checkbox']`);

     //Create a reusable function to perform this operation for different row values.
   await checkBox.click();

  await expect(checkBox).toBeChecked();
}