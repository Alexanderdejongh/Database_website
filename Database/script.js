const mainContnent = document.querySelector(".main-container");
const databaseKeys = Object.keys(database[0]);

// Home
mainContnent.innerHTML = `
    <h1 class="index-title">Welkom op deze pagina!</h1>
    <h2 class="index-sub-title">
        Op deze pagina kunt u informatie vinden over Coderen
    </h2>
    <p class="index-p">
        U kunt hier <b>Websites en video's</b>vinden over allerlei onderwerpen!
        <br /> Ik zal mijn uiterste best doen om zo veel mogelijk onderwerpen deze pagina te plaatsen<br /> U kunt ook meer informatie vinden over <a scr="#">mij!</a> <br />
    </p>
`;

// alle knoppen verkrijgen
const getButtons = document.querySelectorAll(".text-nav");

// Waardes

// waarde van knoppen verkrijgen
const getButtonTextContent = getButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let input = Array(button.textContent);
        // console.log(input);
        databaseKeys.map((item) => {
            if (input == item) {
                console.log("got it");
                console.log(item, input);
                mainContnent.innerHTML = addContentForVideo(item);
            } // innerHTML(ButtonTextContent);
        });
    });
});

// databaseselectors
const videoHTMLCSS = database[0].Video[0].videoHTMLCSS;
const videoJSMeervoudig = database[0].Video[0].videoJS[0].Meervoudig;
const videoJSEnkelvoudig = database[0].Video[0].videoJS[1].Enkelvoudig;
const arrayMethots = database[0].Video[0].videoJS[2].arrayMethots;
const videoJSAPIs = database[0].Video[0].videoJS[3].APIs;
const videoJSPostMan = database[0].Video[0].videoJS[3].PostMan;
const videoPHP = database[0].Video[0].videoPHP;
const videoDom = database[0].Video[0].videoDom;
const websitesHTML = database[0].Websites[0].websitesHTMLCSS[0].HTML;
const websitesCSS = database[0].Websites[0].websitesHTMLCSS[1].CSS;
const gitWebsites = database[0].Git[0].websites[0];
const gitVideos = database[0].Git[0].videos[0];
const gitplayList = database[0].Git[0].playList[0];
const codeExamples = database[0].codeExamples[0];
const Overig = database[0].Overig[0].gaveTrukjes;
const usbMics = database[0].Overig[0].usbMics;

// Buttons
function getElement(id) {
    const element = document.getElementById(id);
    return element;
}
// video
const getvideoHTMLCSSLink = getElement("video-html-css-link");
const getvideoJSLink = getElement("video-html-JavaScript-link");
const getvideoJSmeervoudig = getElement("video-javascript-meervoudig");
const getvideoJSEnkelvoudig = getElement("video-javascript-Enkelvoudig");
const getvideoJSLinkarrayMethots = getElement("video-javascript-arrayMethots");
const getvideoJSLinkAPIs = getElement("video-javascript-APIs");
const getvideoJSLinkPostMan = getElement("video-javascript-PostMan");
const getvideoPHPLink = getElement("video-html-PHP");

// websites
const websitehtml = getElement("website-html");
const websitecss = getElement("website-css");
const websiteDOM = getElement("website-DOM");
const websitecommon = getElement("website-javascript-common");
const websitearrays = getElement("website-javascript-arrays");
const OverigeWebsites = getElement("website-html-OverigeWebsites");
const websiteAPI = getElement("website-websitesAPI");
const websitegit = getElement("website-git");
// const website = getElementById("website-javascript-APIs");
// const website = getElementById("website-javascript-APIs");
// const website = getElementById("website-javascript-APIs");

// getvideoHTMLCSSLink

getvideoHTMLCSSLink.addEventListener("click", () => {
    mainContnent.innerHTML = addContentForVideo();
});

function addContentForVideo() {
    return `<div class="videos">
    ${videoHTMLCSS[.code]}

</div> `;
}
// console.log(websitehtml);

// console.log(
//     videoHTMLCSS,
//     videoJSMeervoudig,
//     getvideoJSEnkelvoudig,
//     arrayMethots,
//     videoJSAPIs,
//     videoJSPostMan,
//     videoPHP,
//     videoDom,
//     websitesHTML
// );

// console.log(getVideoHTMLCSS);