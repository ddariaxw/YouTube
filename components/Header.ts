import { Locator, Page } from '@playwright/test'

export class Header{
    readonly page: Page
    readonly searchInput: Locator
    readonly searchButton: Locator

    constructor(page: Page){
        this.page = page
        this.searchInput = page.locator('input[name="search_query"]')
        this.searchButton = page.locator('.ytSearchboxComponentSearchButton')
    }

    async searchVideo(query: string){
        await this.searchInput.fill(query)
        await this.searchButton.click()
    }
}