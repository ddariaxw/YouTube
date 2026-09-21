import { Page } from '@playwright/test'

export async function maximizeBrowserWindow(page: Page) {

    let session = await page.context().newCDPSession(page)
    const target = await session.send('Browser.getWindowForTarget')
    let windowId = target.windowId 

    await session.send('Browser.setWindowBounds', {
        windowId, 
        bounds: { windowState: 'maximized' }})
}
