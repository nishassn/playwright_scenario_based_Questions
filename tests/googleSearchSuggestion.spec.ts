import {test,expect, Locator} from '@playwright/test';

test('Filter method of all links on footer of Amazon Home Page',async({page})=>{

   await page.goto("https://www.google.com/");
   await page.locator('textarea[jsname="yZiJbe"]').fill('playwright learnings');
   await page.pause();
   
});