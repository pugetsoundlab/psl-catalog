(function(){
var U="https://pugetsoundlab.github.io/psl-catalog/shop_v3.json",P="https://cdn.shopify.com/s/files/1/0990/2594/4886/files/",S="https://buy.stripe.com/";
var g=document.getElementById("fcg"),q=document.getElementById("fcq"),m=document.getElementById("fcm");
if(!g||!q)return;
var all=[],cur=[],n=0,cat="",sub="",sort="best",pr="",PER=48;
function e(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}
function href(c){return c[5]?S+c[5]:"mailto:seattle3d@gmail.com?subject=Order%20"+encodeURIComponent(c[6]||c[0])}
var bar=document.createElement("div");bar.id="psl3bar";
bar.style.cssText="margin:0 0 12px";
q.parentNode.insertBefore(bar,g);
var st=document.createElement("style");
st.textContent="#psl3bar .ch{display:inline-block;margin:0 6px 6px 0;padding:6px 12px;border:1px solid #ccc;border-radius:999px;background:#fff;color:#111;cursor:pointer;font-size:13px}#psl3bar .ch.on{background:#111;color:#fff;border-color:#111}#psl3bar select{padding:7px 10px;border:1px solid #ccc;border-radius:8px;margin:0 8px 8px 0;font-size:13px}#psl3cnt{font-size:13px;color:#666;margin:4px 0 10px}#psl3m{position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:99999;display:none;align-items:center;justify-content:center;padding:16px}#psl3m .bx{background:#fff;max-width:760px;width:100%;border-radius:16px;overflow:hidden;display:flex;flex-wrap:wrap;max-height:92vh;overflow-y:auto}#psl3m img{width:100%;max-width:380px;flex:1 1 300px;object-fit:cover;aspect-ratio:1}#psl3m .tx{flex:1 1 300px;padding:20px;font-family:inherit}#psl3m .by{display:inline-block;margin-top:14px;padding:12px 22px;border-radius:999px;background:#111;color:#fff;text-decoration:none}#psl3m .x{float:right;cursor:pointer;font-size:22px;border:0;background:none}";
document.head.appendChild(st);
var cnt=document.createElement("div");cnt.id="psl3cnt";g.parentNode.insertBefore(cnt,g);
var md=document.createElement("div");md.id="psl3m";md.innerHTML='<div class="bx"><img alt=""><div class="tx"></div></div>';document.body.appendChild(md);
md.onclick=function(ev){if(ev.target===md||ev.target.className==="x")md.style.display="none"};
document.addEventListener("keydown",function(ev){if(ev.key==="Escape")md.style.display="none"});
function open(c){var t=md.querySelector(".tx");md.querySelector("img").src=P+c[1];md.querySelector("img").alt=c[0];
t.innerHTML='<button class="x" aria-label="Close">×</button><h3 style="margin:0 0 6px">'+e(c[0])+'</h3><p style="color:#666;margin:0 0 6px">'+e(c[3])+(c[4]?" › "+e(c[4]):"")+'</p><p style="font-size:24px;margin:8px 0"><b>$'+c[2]+'</b></p><p style="color:#444;font-size:14px">Printed to order in Seattle. Pick your color at checkout or in your note.</p><a class="by" target="_blank" rel="noopener" href="'+href(c)+'">'+(c[5]?"Buy now":"Order this model")+'</a>';
md.style.display="flex"}
function words(){var k=q.value.toLowerCase().trim();return k.split(/\s+/).filter(Boolean).map(function(w){return w.length>3?w.replace(/(es|s)$/,""):w})}
function filt(){var W=words();
cur=all.filter(function(c){if(cat&&c[3]!==cat)return false;if(sub&&c[4]!==sub)return false;
if(pr){var p=+c[2];if(pr==="a"&&p>=10)return false;if(pr==="b"&&(p<10||p>=20))return false;if(pr==="c"&&(p<20||p>=40))return false;if(pr==="d"&&p<40)return false}
if(!W.length)return true;var t=(c[0]+" "+c[3]+" "+c[4]).toLowerCase();return W.every(function(w){return t.indexOf(w)>-1})});
if(sort==="lo")cur.sort(function(a,b){return a[2]-b[2]});
else if(sort==="hi")cur.sort(function(a,b){return b[2]-a[2]});
else if(sort==="az")cur.sort(function(a,b){return a[0].localeCompare(b[0])});
else cur.sort(function(a,b){return (b[5]?1:0)-(a[5]?1:0)});
g.innerHTML="";n=0;draw();cnt.textContent=cur.length.toLocaleString()+" models"+(cat?" in "+cat+(sub?" › "+sub:""):"")}
function draw(){var s=cur.slice(n,n+PER);s.forEach(function(c){var d=document.createElement("a");d.href=href(c);d.style.cssText="display:block;border:1px solid #e5e5e5;border-radius:12px;overflow:hidden;text-decoration:none;color:#111;background:#fff";
d.innerHTML='<img loading="lazy" style="width:100%;aspect-ratio:1;object-fit:cover;display:block" src="'+P+c[1]+'" alt="'+e(c[0])+'"><div style="padding:8px 10px;font-size:13px"><b>'+e(c[0])+'</b><br>$'+c[2]+' · '+(c[5]?"Buy":"Order")+'</div>';
d.onclick=function(ev){if(ev.metaKey||ev.ctrlKey)return;ev.preventDefault();open(c)};g.appendChild(d)});
n+=s.length;m.style.display=n<cur.length?"block":"none"}
m.onclick=draw;
if("IntersectionObserver"in window){new IntersectionObserver(function(en){if(en[0].isIntersecting&&n<cur.length)draw()},{rootMargin:"600px"}).observe(m)}
function chips(){var C={},Sb={};all.forEach(function(c){C[c[3]]=(C[c[3]]||0)+1;if(cat&&c[3]===cat&&c[4])Sb[c[4]]=(Sb[c[4]]||0)+1});
var ks=Object.keys(C).sort(function(a,b){return C[b]-C[a]}).filter(function(k){return C[k]>=15});
var h='<span class="ch'+(cat?"":" on")+'" data-c="">All ('+all.length.toLocaleString()+')</span>';
ks.forEach(function(k){h+='<span class="ch'+(cat===k?" on":"")+'" data-c="'+e(k)+'">'+e(k)+' ('+C[k]+')</span>'});
if(cat){var sk=Object.keys(Sb).sort(function(a,b){return Sb[b]-Sb[a]});if(sk.length){h+='<div style="margin-top:4px">';sk.forEach(function(k){h+='<span class="ch'+(sub===k?" on":"")+'" data-s="'+e(k)+'">'+e(k)+' ('+Sb[k]+')</span>'});h+='</div>'}}
h+='<div style="margin-top:6px"><select id="psl3s"><option value="best">Sort: Ready to buy first</option><option value="lo">Price: low to high</option><option value="hi">Price: high to low</option><option value="az">Name: A to Z</option></select><select id="psl3p"><option value="">Any price</option><option value="a">Under $10</option><option value="b">$10 - $19</option><option value="c">$20 - $39</option><option value="d">$40+</option></select></div>';
bar.innerHTML=h;document.getElementById("psl3s").value=sort;document.getElementById("psl3p").value=pr;
document.getElementById("psl3s").onchange=function(){sort=this.value;filt()};
document.getElementById("psl3p").onchange=function(){pr=this.value;filt()};
[].forEach.call(bar.querySelectorAll(".ch"),function(el){el.onclick=function(){if(el.hasAttribute("data-c")){cat=el.getAttribute("data-c");sub=""}else{var s=el.getAttribute("data-s");sub=(sub===s)?"":s}chips();filt()}})}
q.oninput=filt;q.addEventListener("keyup",filt);
fetch(U).then(function(r){return r.json()}).then(function(j){all=j;chips();filt()}).catch(function(){g.innerHTML="Catalog loading failed. Refresh."});
})();
