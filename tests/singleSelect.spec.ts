import {test,expect} from '@playwright/test'

test('Perform single select option',async({page})=>{

await page.goto('https://orangehrm.com/contact-sales');

//select using the index value

await page.locator(`//select[@id="Form_getForm_Country"]`).selectOption({index:5});

const selectedValue:string=await page.locator(`//select[@id="Form_getForm_Country"]`).inputValue();

console.log(selectedValue);

await page.locator(`//select[@id="Form_getForm_Country"]`).selectOption({label:'Algeria'});

const selectedValue1:string=await page.locator(`//select[@id="Form_getForm_Country"]`).inputValue();

console.log(selectedValue1);


await page.locator(`//select[@id="Form_getForm_Country"]`).selectOption({value:'Albania'});

const selectedValue2:string=await page.locator(`//select[@id="Form_getForm_Country"]`).inputValue();

console.log(selectedValue2);

}); 
