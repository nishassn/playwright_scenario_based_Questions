//*Navigate to a web page containing a table with multiple rows and columns. 
// Locate the column that contains checkboxes 
// and click the checkboxes in the table rows. Verify that the checkboxes are selected successfully.


import {test,expect, Locator, Page} from '@playwright/test';

test('Select Checkboxes in a Web Table',async({page})=>{

   await page.goto("https://qavbox.github.io/demo/webtable/");

  await locateAndClick(page,'QTP');

 await locateAndClick(page,'Selenium');

 await locateAndClick(page,'Coded UI');

});

// Write the reuse function
async function  locateAndClick(page:Page,user:String)
{
 //Locate the checkbox
   const checkBox:Locator=page.locator(`//tr[.//td[text()='${user}'] or .//a[text()='${user}']]//td[1]//input[@type='checkbox']`);

     //Create a reusable function to perform this operation for different row values.
   await checkBox.click();

  await expect(checkBox).toBeChecked();
}