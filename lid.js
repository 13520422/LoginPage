function postMessage(obj){
    console.log(obj);
    window.chrome.webview.postMessage(obj);
} 