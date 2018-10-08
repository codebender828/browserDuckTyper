// Opera 8.0+
const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
const isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

const isSafariMobile = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// Internet Explorer 6-11
const isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
const isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
const isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
const isBlink = (isChrome || isOpera) && !!window.CSS;

// WeChat Browser
const isWeChat = () => {
    const ua = navigator.userAgent.toLowerCase();  
    if(ua.match(/MicroMessenger/i)=="micromessenger") {  
        return true;  
    } else {  
        return false;  
    } 
}



const duckTyper = (() => {
    // Tests for Opera 8.0+
    if(isOpera){
        return "Opera Mini";

        // Tests Firefox 1.0+
    } else if(isFirefox) {    
        return "Mozilla Firefox"

        // Tests Safari 3.0+ "[object HTMLElementConstructor]" 
    } else if (isSafari) {
        return "Sarafi"
        
        // Tests Safari
    } else if (isSafariMobile){
      return "Safari"
      
      // Tests Internet Explorer 6-11
    }  else if(isIE)  {
        return "Internet Explorer"

        // Test Edge
    } else if (isEdge) {
        return " Microsoft Edge 20+"

        // Tests Chrome
    } else if (isChrome) {
        return "Google Chrome"

        // Tests Blink Engine detection
    } else  if (isBlink) {
        return "Blink"

        // Tests WeChat Browser
    } else if (isWeChat) {
        var ua = navigator.userAgent.toLowerCase();  
        if(ua.match(/MicroMessenger/i)=="micromessenger") {  
            return "WeChat Browser";  
        }
    } else {
        console.log(navigator.userAgent)
    }
})


document.querySelector('.browser__name').textContent = duckTyper();
console.log(`DuckTyper: ${duckTyper()}`);
