import {test, expect} from '@playwright/test'

test('First Test', async ({page})=>{

    await page.goto("www.index.hu");

})

test('Second  Test', async ({page})=>{

    await page.goto("www.index.hu");

})