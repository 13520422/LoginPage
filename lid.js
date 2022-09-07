function postMessage(obj){
    // console.log(obj)
    try{
        window.chrome.webview.postMessage(obj);
    }catch(e){
        console.log(e);
    }
    
} 

function saveFile(obj){
    // console.log(obj);
    try{
        window.chrome.webview.postMessage(obj);
    }catch(e){
        console.log(e);
    }
    
} 