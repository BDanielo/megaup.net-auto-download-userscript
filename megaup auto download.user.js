// ==UserScript==
// @icon         https://download.megaup.net/images/favicon.ico
// @name     megaup auto download
// @version  1.0
// @grant        window.close
// @description Automatically start the download on megaup.net after the download button is visible. can be used to download many files at once with opening all the windows and waiting.
// @include https://megaup.net/*
// @include http://megaup.net/*
// @include https://*.megaup.net/*
// @include http://*.megaup.net/*
// @run-at       document-end
// ==/UserScript==

var timeW=5600; //time to wait before click
var timeC=1100; //time to wait for download before closing tab

var selector="#btnsubmit";
document.title="⏳"+document.title;

if(window.location.toString().includes("?idurl=")==true){

    setTimeout(function() {
        window.close();
    }, timeW+timeC);
}
else {
    setTimeout(function() {
        document.querySelector(selector).click();
    }, timeW);
}

