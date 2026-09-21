import { Locator, Page } from '@playwright/test'

export class YouTubeVideoPage {
    readonly page: Page
    readonly videos: Locator
    readonly owner: Locator
    readonly autorAvatar: Locator

    constructor(page: Page) {
        this.page = page
        this.videos = page.locator('.ytThumbnailViewModelHost') 
        this.owner = page.locator('#owner ytd-video-owner-renderer')
        this.autorAvatar = this.owner.locator('#avatar') 
    }

    async selectVideoByPosition(index: number) {
        await this.videos.nth(index - 1).click()
    }

    async clickAutorAvatar() {
        await this.autorAvatar.waitFor({ state: 'visible', timeout: 15000 })
        await this.autorAvatar.click()
    }
}