import { Page } from '@playwright/test'
import { Header } from '../components/Header'

export class YouTubeHomePage {
    readonly page: Page
    readonly header: Header

    constructor(page: Page) {
        this.page = page
        this.header = new Header(page)
    }

    async goto() {
        await this.page.goto('https://www.youtube.com/')
    }

    async searchVideo(query: string) {
        await this.header.searchVideo(query)
        await this.page.waitForSelector('ytd-video-renderer')
    }
}