import {test,expect} from '@playwright/test'

test('Perform single select option',async({page})=>{

await page.goto(`https://selenium08.blogspot.com/2019/11/dropdown.html`);

await page.locator(`//select[@name='Month']`).selectOption(["February","May","March"]);


//it returns the first selected values
console.log(await page.locator(`//select[@name='Month']`).inputValue());

}); 
