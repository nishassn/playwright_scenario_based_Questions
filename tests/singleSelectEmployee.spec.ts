import {test,expect} from '@playwright/test'

test('Perform single select option',async({page})=>{

await page.goto('https://orangehrm.com/contact-sales');

//select using the index value

await page.locator(`//select[@name="NoOfEmployees"]`).selectOption({index:2});

const selectedValue:string=await page.locator(`//select[@name="NoOfEmployees"]`).inputValue();


console.log(selectedValue);
await page.locator(`//select[@name="NoOfEmployees"]`).selectOption({label:"< 10"});

const selectedValue1:string=await page.locator(`//select[@name="NoOfEmployees"]`).inputValue();

console.log(selectedValue1);

await page.locator(`//select[@name="NoOfEmployees"]`).selectOption({value:'200 - 1,000'});

const selectedValue2:string=await page.locator(`//select[@name="NoOfEmployees"]`).inputValue();

console.log(selectedValue2);

}); 
