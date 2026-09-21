import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0,
    use: {
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
        headless: false, 
        launchOptions: {args: ['--window-size=1920,1080'],},
        actionTimeout: 15000, 
        ignoreHTTPSErrors: true,
        video: "retain-on-failure",
        screenshot: "only-on-failure",
        locale: "uk-UA", 
    },
    projects: [
    {
     name: "Chromium",
     use: { browserName: "chromium"},
    }
   ],     
 }

 export default config