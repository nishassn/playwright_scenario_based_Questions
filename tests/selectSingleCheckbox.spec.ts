//Question: Using Playwright, 
// locate a specific option (choice 3) in a custom multi-select dropdown 
// that does not use the HTML <select> tag. 
// Use the filter() method to identify the option, select its checkbox, retrieve and print its text,
//  and stop iterating once the matching option is found.


import {test,expect, Locator} from '@playwright/test'

test('Perform single select and retreive',async({page})=>{

await page.goto(`https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/`);


//Locate the drop down

await page.locator(`//input[@id="justAnInputBox"]`).click();
//Locate the Multi Selection

const dropdownSuggestion:Locator=await page.locator(`(//div[contains(@id,"comboTree")]//div[contains(@id,"DropDownContainer")])[1]`);

//Locate the checkboxes

const spanLoc:Locator[]=await dropdownSuggestion.locator(`span.comboTreeItemTitle`).all();


//Click the checkbox using filter method
for(let eachCheckbox of spanLoc)
{
if(await eachCheckbox.filter({hasText:'choice 3'}).count()>0)
{
//Locate the check box
await eachCheckbox.locator(`input[type='checkbox']`).check();
await page.waitForTimeout(1000);
let checkedtext:string=await eachCheckbox.innerText();

console.log(checkedtext);
break;
}

}


}); 
