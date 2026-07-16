import {chromium, test, webkit} from "@playwright/test"

test ('browserlaunch and webkit', async () => {

    //launch edge 
const edgebrowser = await chromium.launch({channel:'msedge', headless: false})
const edgecontext = await edgebrowser.newContext()
const edgepage = await edgecontext.newPage()

await edgepage.goto("https://www.redbus.in")

console.log("Title1: ",await edgepage.title())
console.log("URL1: ", edgepage.url())


//launch webkit

const wkbrowser = await webkit.launch({headless: false})
const wkcontext = await wkbrowser.newContext()
const wkpage = await wkcontext.newPage()

await wkpage.goto("https://www.flipkart.com")

console.log("Title2 : ",await wkpage.title())
console.log("URL2 : ", wkpage.url())

})
