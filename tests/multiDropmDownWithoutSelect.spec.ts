import {test,expect, Locator} from '@playwright/test'

test('Perform single select option',async({page})=>{

await page.goto(`https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/`);


//Locate the drop down

await page.locator(`//input[@id="justAnInputBox"]`).click();
//Locate the Multi Selection

const dropdownSuggestion:Locator[]=await page.locator(`(//div[contains(@id,"comboTree")]//div[contains(@id,"DropDownContainer")])[1]//input[@type='checkbox']`).all();
//Click all the check boxex

const selectedCheckboxText:string[]=[];
let text:string;

for(let checkBoxSelect of dropdownSuggestion)
{
   await checkBoxSelect.click();
   
   //get all theselected text
   text=await checkBoxSelect.innerText();
   //push to the new array
   selectedCheckboxText.push(text);
   await page.waitForTimeout(1000);
}
console.log(selectedCheckboxText);

}); 
