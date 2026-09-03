document.querySelectorAll(".year").forEach(e=>e.textContent=new Date().getFullYear());
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(e=>obs.observe(e));
document.querySelectorAll(".filters button").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".filters button").forEach(b=>b.classList.remove("active"));btn.classList.add("active");
 const f=btn.dataset.filter;document.querySelectorAll(".librarygrid .card").forEach(c=>c.style.display=f==="all"||c.dataset.cat===f?"block":"none");
}));
document.querySelectorAll(".soon").forEach(b=>b.addEventListener("click",()=>{b.textContent="Coming Soon ✦";setTimeout(()=>b.textContent="Coming Soon",1200)}));