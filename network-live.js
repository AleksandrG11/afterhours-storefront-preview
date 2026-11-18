/* CODEINDEX companion link for the public static AFTER HOURS concept preview.
   The permanent GitHub Pages URL is verified externally; Mission AI has no verified URL yet. */
(() => {
  const destination="https://aleksandrg11.github.io/";
  function refresh() {
    document.querySelectorAll(".network-card.cheats").forEach(card => {
      if(card.querySelector(".network-actual-link"))return;
      card.style.position="relative";
      const a=document.createElement("a");
      a.href=destination;a.target="_blank";a.rel="noopener noreferrer";
      a.className="network-actual-link";
      a.setAttribute("aria-label","Visit CODEINDEX cheat-code library");
      a.style.cssText="position:absolute;inset:0;z-index:10;display:block;";
      card.appendChild(a);
      const label=card.querySelector(".network-bottom");
      if(label)label.textContent="VISIT THE LIVE CHEAT LIBRARY ↗";
    });
    document.querySelectorAll(".disabled-link").forEach(span=>{
      if(!span.textContent?.includes("Cheat Code Library"))return;
      const a=document.createElement("a");
      a.href=destination;a.target="_blank";a.rel="noopener noreferrer";
      a.textContent="Cheat Code Library ↗";span.replaceWith(a);
    });
  }
  if(document.readyState==="complete")setTimeout(refresh,450);
  else window.addEventListener("load",()=>setTimeout(refresh,450),{once:true});
  const observer=new MutationObserver(refresh);
  observer.observe(document.documentElement,{childList:true,subtree:true});
})();
