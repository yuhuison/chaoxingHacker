function listener(details) {
    let filter = browser.webRequest.filterResponseData(details.requestId);
    let decoder = new TextDecoder("utf-8");
    let encoder = new TextEncoder();
  
    filter.ondata = event => {

      let str = decoder.decode(event.data, {stream: true});
      if(details.url.indexOf("recordStudy")!=-1){
          console.log("find it !");
        str1=',c=window.setInterval(function(){d++,console.log(">>count="+d);var e=d%60;localStorage.setItem(u,Base64.encode(d.toString())),d>=60&&0==e&&(console.log(">>>record count="+d),i())},1e3)}';
        str2=',c=window.setInterval(function(){d+=10,console.log(">>count="+d);var e=d%60;localStorage.setItem(u,Base64.encode(d.toString())),d>=60&&0==e&&(console.log(">>>record count="+d),i())},1e3)}';
        str = str.replace(str1, str2);
      }

      filter.write(encoder.encode(str));
      filter.disconnect();
    }
  
    return {};
}
console.log("233");
browser.webRequest.onBeforeRequest.addListener(
    listener,
    {urls: ["https://js.enaea.edu.cn/*"]},
    ["blocking"]
);
  