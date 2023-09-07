export default class Page {
    open (path: string) {
        browser.maximizeWindow();
        return browser.url(path)
    }

    async elementExist(element) {
        var msg=element.id()+' Not found'
        await element.waitForExist({ timeout: 5000,msg });
    }

    async scrollIntoView(element) {
        await element.scrollIntoView({ block: 'center', inline: 'center' })
    }
}
