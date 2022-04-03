const pupeeter=require("puppeteer")
const {answers}=require("./code");
// console.log(answers);

let cTab;
let email="hsc95067@gmail.com"
let password="19048501"
let BrowserOpenPromise=pupeeter.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximized"],
    // executablePath:"C:\Users\DELL\AppData\Local\Google\Chrome\Application\chrome.exe"
})


BrowserOpenPromise.then(function (browser){
    console.log("browser is open");
    // An array of all open pages inside the Browser.
    let allTabs=browser.pages();
    return allTabs;
}).then(function(allTabs){

     cTab=allTabs[0];
    console.log("new tab");
    // URL to navigate page to. The URL should include scheme, e.g. https://
    let web=cTab.goto("https://www.hackerrank.com/auth/login/")
    return web;
}).then(function(){
    console.log("hackerrank web is opened");
    let allTypepromise=cTab.type("#input-1",email)
    return allTypepromise;
}).then(function(){
    console.log("email typed");
    let passwordTyped=cTab.type("#input-2",password)
    return passwordTyped;
    
}).then(function(){
    console.log("pass typed");
    let Clicklogin=cTab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled")
    return Clicklogin;
}).then(function(){
    console.log("login button click");

    let algorithmTabWillBeOPenedPromise = waitAndClick("div[data-automation='algorithms']");
      return algorithmTabWillBeOPenedPromise;
}).then(function(){
    // console.log("compete button clicked");
    let solvechallenge=waitAndClickChallenge(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled")
    return solvechallenge;
}).then(function(){
    console.log("solvechallenge");
    
    
})
.catch(function (err){
    console.log(err);
})




function waitAndClick(){
    let newAlogoBtn = arguments[0]

    let waitforselectorpromise=cTab.waitForSelector(newAlogoBtn)

    waitforselectorpromise.then(function(){
        // console.log(newAlogoBtn);
        let clickPromise = cTab.click(newAlogoBtn);
        return clickPromise;
    }).then(function(){
        console.log("algobtn is clicked");
    })
    // return ;
}

function waitAndClickChallenge(){
    // console.log(arguments)
    let challengeArguments=arguments[0]
    
    let solvechallengebtn=cTab.waitForSelector(challengeArguments)

    solvechallengebtn.then(function(){

        let questionsolveclick=cTab.click(challengeArguments)
        return questionsolveclick;
    }).then(function(){
        console.log("challlenge successgul open");
    })
}