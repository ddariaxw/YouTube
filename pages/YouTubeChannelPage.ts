import { Locator, Page } from '@playwright/test'

export class YouTubeChannelPage {
    readonly page: Page
    readonly channelInfo: Locator
    readonly subscribeButton: Locator

    constructor(page: Page) {
        this.page = page
        this.channelInfo = page.locator('.ytPageHeaderViewModelHeadlineInfo')
        this.subscribeButton = this.channelInfo.getByRole('button', { name: 'Підписатися' })  
    }

    async clickSubscribe() {
        await this.subscribeButton.waitFor({ state: 'visible', timeout: 15000 })
        await this.subscribeButton.click()
    }
}