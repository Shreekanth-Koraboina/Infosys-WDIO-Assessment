import DemoPage from '../pageobjects/demo.page.js'

describe('Fill form with default value updates', () => {
   
    it('I filled the calculator form with default value updates', async () => {
        await DemoPage.open()  
        await DemoPage.verifyPageDisplayed()
        await DemoPage.fillFormDetails() 
        await DemoPage.changeDefaultValues()        
        await DemoPage.clickCalculatorButton()    
        await DemoPage.verifyResultDisplayed()           
    })  
})