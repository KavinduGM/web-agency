import Script from "next/script";

/**
 * LeadIQ analytics tracker.
 *
 * Fires a pageview event on:
 *   - initial page load (after window `load`)
 *   - every client-side route change (intercepts `history.pushState` and `popstate`)
 *
 * Payload includes URL, title, referrer, screen dimensions, visitor ID
 * (persisted in localStorage), session ID (sessionStorage), and any UTM
 * parameters present on the URL. Sent via `navigator.sendBeacon` with a
 * `fetch` fallback so it survives page-unload events too.
 */
export default function Analytics() {
  return (
    <Script
      id="leadiq-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
(function(){
  var tid="7151216f-5ce5-4a55-ab76-d5305e2d9f28";
  var api="https://crm.groovymark.com/api/public/analytics/collect";
  function uid(){try{var k="liq_vid",v=localStorage.getItem(k);if(!v){v=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(c){return(c^(crypto.getRandomValues(new Uint8Array(1))[0]&15)>>c/4).toString(16)});localStorage.setItem(k,v)}return v}catch(e){return"anon"}}
  function sid(){try{var k="liq_sid",s=sessionStorage.getItem(k);if(!s){s=Math.random().toString(36).substr(2,12);sessionStorage.setItem(k,s)}return s}catch(e){return"s"+Date.now()}}
  function params(){var p={};location.search.substr(1).split("&").forEach(function(s){var kv=s.split("=");if(kv[0])p[kv[0]]=decodeURIComponent(kv[1]||"")});return p}
  function send(){
    var p=params();
    var d={tid:tid,url:location.href,title:document.title,ref:document.referrer,sw:screen.width,sh:screen.height,vid:uid(),sid:sid(),us:p.utm_source||"",um:p.utm_medium||"",uc:p.utm_campaign||"",ut:p.utm_term||"",ux:p.utm_content||""};
    var body=JSON.stringify(d);
    try{
      if(navigator.sendBeacon){var blob=new Blob([body],{type:"application/json"});if(navigator.sendBeacon(api,blob))return}
    }catch(e){}
    fetch(api,{method:"POST",body:body,headers:{"Content-Type":"application/json"},keepalive:true,mode:"no-cors"}).catch(function(){})
  }
  if(document.readyState==="complete")send();else window.addEventListener("load",send);
  var pushState=history.pushState;history.pushState=function(){pushState.apply(history,arguments);setTimeout(send,100)};
  window.addEventListener("popstate",function(){setTimeout(send,100)});
})();
        `,
      }}
    />
  );
}
