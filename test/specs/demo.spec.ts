import DemoPage from '../pageobjects/demo.page.js'

describe('Fill retirement calculator form', () => {
   
    it('I filled the calculator form', async () => {
        await DemoPage.open()  
        await DemoPage.verifyPageDisplayed()
        await DemoPage.fillFormDetails() 
        await DemoPage.clickCalculatorButton()    
        await DemoPage.verifyResultDisplayed()           
    })  
    
})