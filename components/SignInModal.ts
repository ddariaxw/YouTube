import { expect, Locator, Page } from '@playwright/test'

export class SignInModal {
    readonly page: Page
    readonly signinText: Locator 

    constructor(page: Page) {
        this.page = page
        this.signinText = page
        .locator('ytd-modal-with-title-and-button-renderer')
        .getByRole('link', { name: 'Увійти', exact: true })
    }

    async verifySignInModal() {
        await expect(this.signinText).toHaveText('Увійти', { timeout: 10000 })
    }
}