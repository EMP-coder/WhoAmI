const types={
strategist:{emoji:"🧠",tag:"Analytical. Logical. Always thinking three steps ahead.",desc:"You naturally look for patterns, structure, and the smartest route forward. You like understanding how things work and turning complicated situations into clear plans.",strengths:["Analytical","Logical","Strategic thinker","Good at planning"]},
creator:{emoji:"🎨",tag:"Imaginative. Artistic. Always finding a new angle.",desc:"You see possibilities where others see blank space. Your imagination and willingness to experiment help you turn ideas into something fresh, expressive, and memorable.",strengths:["Imaginative","Artistic","Innovative","Expressive"]},
explorer:{emoji:"🌎",tag:"Curious. Adventurous. Always ready for what is next.",desc:"You are energized by discovery. You ask questions, seek new experiences, and learn by following your curiosity wherever it leads.",strengths:["Curious","Adventurous","Loves learning","Open-minded"]},
leader:{emoji:"👑",tag:"Confident. Motivational. Ready to take responsibility.",desc:"You naturally step forward when something needs direction. You bring confidence, momentum, and a sense of responsibility that can motivate people around you.",strengths:["Confident","Motivational","Responsible","Decisive"]}};
const raw=JSON.parse(localStorage.getItem("whoamiResult")||"null");
if(!raw){location.href="quiz.html"}else{
const total=Object.values(raw.scores).reduce((a,b)=>a+b,0)||1;
const top=Object.entries(raw.scores).sort((a,b)=>b[1]-a[1])[0][0], info=types[top];
setTimeout(()=>{document.getElementById("loader").classList.add("hidden");document.getElementById("content").classList.remove("hidden")},2700);
document.getElementById("emoji").textContent=info.emoji;document.getElementById("type").textContent=({strategist:"THE STRATEGIST",creator:"THE CREATOR",explorer:"THE EXPLORER",leader:"THE LEADER"})[top];
document.getElementById("tagline").textContent=info.tag;document.getElementById("description").textContent=info.desc;
document.getElementById("strengths").innerHTML=info.strengths.map(x=>`<span>${x}</span>`).join("");
document.getElementById("topscore").textContent=Math.round(raw.scores[top]/total*100)+"%";
document.getElementById("scores").innerHTML=Object.entries(raw.scores).map(([k,v])=>`<div class="score"><div class="scoreline"><span>${k[0].toUpperCase()+k.slice(1)}</span><span>${Math.round(v/total*100)}%</span></div><div class="track"><i style="width:${v/total*100}%"></i></div></div>`).join("");
document.getElementById("share").onclick=async()=>{
 const text=`My WhoAmI personality type is ${document.getElementById("type").textContent} ${info.emoji}! ${info.tag} Discover yours on WhoAmI.`;
 const page=location.href;
 const encoded=encodeURIComponent(text);
 const url=encodeURIComponent(page);
 const panel=document.getElementById("socialShare");
 panel.classList.toggle("hidden");
 document.getElementById("waShare").href=`https://wa.me/?text=${encoded}%20${url}`;
 document.getElementById("xShare").href=`https://twitter.com/intent/tweet?text=${encoded}&url=${url}`;
 document.getElementById("fbShare").href=`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encoded}`;
 // Instagram and TikTok do not provide a normal web "share this URL" endpoint.
 // These buttons open the platform; the result text can be copied below.
 document.getElementById("igShare").href="https://www.instagram.com/";
 document.getElementById("ttShare").href="https://www.tiktok.com/";
 try{
   if(navigator.clipboard){await navigator.clipboard.writeText(text+" "+page);document.getElementById("feedback").textContent="✓ Result text copied — ready to paste on Instagram or TikTok."}
 }catch(e){}
};
}