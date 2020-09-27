// ==UserScript==
// @name         Remove Twitch Prime Loot icon
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes the Prime Loot icon from Twitch
// @author       Scott Cummins (Ferby)
// @match        https://www.twitch.tv/*
// @match        https://dashboard.twitch.tv/*
// @grant        none
// ==/UserScript==

var prime_nav = document.querySelector('.top-nav__prime');

setInterval(() => {
    prime_nav.parentNode.removeChild(prime_nav);
}, 3000);
