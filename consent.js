/* ARENA – banner de consimțământ cookie (Google Consent Mode v2) */
(function(){
  var KEY='arena_consent';
  function get(){try{return localStorage.getItem(KEY)}catch(e){return null}}
  function set(v){try{localStorage.setItem(KEY,v)}catch(e){}}
  function apply(v){
    if(typeof gtag!=='function')return;
    var g=v==='granted'?'granted':'denied';
    gtag('consent','update',{ad_storage:g,ad_user_data:g,ad_personalization:g,analytics_storage:g});
  }
  if(get())return;
  var lang=(document.documentElement.lang||'ro').slice(0,2);
  var T={
    ro:{t:'Folosim cookie-uri pentru a măsura eficiența reclamelor noastre. Ești de acord?',a:'Accept',r:'Refuz',p:'Detalii',u:'/confidentialitate.html'},
    en:{t:'We use cookies to measure how well our ads work. Do you agree?',a:'Accept',r:'Decline',p:'Details',u:'/confidentialitate.html'},
    fr:{t:'Nous utilisons des cookies pour mesurer l’efficacité de nos annonces. Acceptez-vous ?',a:'Accepter',r:'Refuser',p:'Détails',u:'/confidentialitate.html'}
  }[lang]||null;
  T=T||{t:'Folosim cookie-uri pentru a măsura eficiența reclamelor noastre. Ești de acord?',a:'Accept',r:'Refuz',p:'Detalii',u:'/confidentialitate.html'};
  function show(){
    var d=document.createElement('div');
    d.setAttribute('role','dialog');d.setAttribute('aria-label','Cookie');
    d.style.cssText='position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:560px;margin:0 auto;background:#141c2e;color:#eef1f9;border:1px solid #2b3550;border-radius:14px;padding:16px 18px;box-shadow:0 10px 30px rgba(0,0,0,.45);font:14px/1.5 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif';
    d.innerHTML='<div style="margin-bottom:12px">'+T.t+' <a href="'+T.u+'" style="color:#E8CE7A">'+T.p+'</a></div>'+
      '<div style="display:flex;gap:10px;justify-content:flex-end;flex-wrap:wrap">'+
      '<button data-c="denied" style="cursor:pointer;background:transparent;color:#c3cbde;border:1px solid #2b3550;border-radius:10px;padding:8px 16px;font:inherit">'+T.r+'</button>'+
      '<button data-c="granted" style="cursor:pointer;background:linear-gradient(135deg,#FBE9B0,#C9A227);color:#0e1420;border:0;border-radius:10px;padding:8px 18px;font:inherit;font-weight:700">'+T.a+'</button></div>';
    d.addEventListener('click',function(e){var v=e.target.getAttribute&&e.target.getAttribute('data-c');if(!v)return;set(v);apply(v);d.remove();});
    document.body.appendChild(d);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',show);else show();
})();
