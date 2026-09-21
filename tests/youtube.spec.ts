import { test, expect } from '@playwright/test'
import { YouTubeHomePage } from '../pages/YouTubeHomePage'
import { YouTubeSearchPage } from '../pages/YouTubeSearchPage'
import { YouTubeVideoPage } from '../pages/YouTubeVideoPage'
import { YouTubeChannelPage } from '../pages/YouTubeChannelPage'
import { SignInModal } from '../components/SignInModal' 
import { getRandomQuery } from '../helpers/randomQuery'
import { YouTubeHomeFilterTab } from '../enums/YouTubeFilterEnum' 
import { maximizeBrowserWindow } from '../helpers/browserWindow'

test("YouTube automated user journey", async ({ page }) => {
    const homePage = new YouTubeHomePage(page)
    const searchPage = new YouTubeSearchPage(page)
    const videoPage = new YouTubeVideoPage(page)
    const channelPage = new YouTubeChannelPage(page)
    const signIn = new SignInModal(page) 

    await homePage.goto()
    await expect(page).toHaveTitle('YouTube')
 
    const randomQuery = getRandomQuery() 
    await homePage.searchVideo(randomQuery)

    await maximizeBrowserWindow(page)

    await searchPage.switchTab(YouTubeHomeFilterTab.Videos)

    await searchPage.selectVideoByPosition(2)

    await videoPage.selectVideoByPosition(4) 
    
    await videoPage.clickAutorAvatar()
    await channelPage.clickSubscribe()
    await signIn.verifySignInModal()

    await page.close()
})