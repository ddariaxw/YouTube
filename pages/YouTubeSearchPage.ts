import { Locator, Page } from '@playwright/test'
import { YouTubeHomeFilterTab } from '../enums/YouTubeFilterEnum'

export class YouTubeSearchPage {
    readonly page: Page
    readonly videos: Locator

    constructor(page: Page) {
        this.page = page
        this.videos = page.locator('.ytCoreImageHost')
    }

    async switchTab(tabName: YouTubeHomeFilterTab) {
        await this.page
            .locator('button[role="tab"]')
            .filter({ hasText: tabName })
            .click()
    }

    async selectVideoByPosition(index: number) {
        await this.videos.nth(index - 1).click()
    }
}