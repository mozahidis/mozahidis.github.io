function checkBrowserType()
{
    // isChrome = !!window.chrome ? !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    // if (!!window.chrome) {
    //     if (!(!!window.chrome.webstore || !!window.chrome.runtime)) {
    //         return true;
    //     }
    // }
    // return false;

    // var isChrome = false;
    // for (var i = 0, u="Chromium", l =u.length; i < navigator.plugins.length; i++)
    // {
    //     alert(navigator.plugins[i].name);
    //     if (navigator.plugins[i].name != null && navigator.plugins[i].name.substr(0, l) === u)
    //     isChrome = true;
    // }

    // navigator.sayswho= (function(){
    //     var ua= navigator.userAgent, tem, 
    //     M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    //     if(/trident/i.test(M[1])){
    //         tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
    //         return 'IE '+(tem[1] || '');
    //     }
    //     if(M[1]=== 'Chrome'){
    //         tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
    //         if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    //     }
    //     M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    //     if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    //     return M.join(' ');
    // })();
    
    const ua = navigator.userAgent;
    // alert(ua.indexOf('x64') > -1);

    return !(ua.indexOf('x64') > -1);

    // return false;
    
    // console.log(navigator.sayswho);

    // alert(isChrome);
} 