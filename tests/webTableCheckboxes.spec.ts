//*Navigate to a web page containing a table with multiple rows and columns. 
// Locate the column that contains checkboxes 
// and click the checkboxes in the table rows. Verify that the checkboxes are selected successfully.


import {test,expect, Locator} from '@playwright/test';

test('Select Checkboxes in a Web Table',async({page})=>{

   await page.goto("https://qavbox.github.io/demo/webtable/");
  

  

   });