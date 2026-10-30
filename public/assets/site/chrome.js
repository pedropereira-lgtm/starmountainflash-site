
(function(){
 const d=document.documentElement;d.classList.add('js');
 const get=k=>{try{return localStorage.getItem(k)}catch(e){return null}},set=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};

 setLang(d.dataset.lang||'pt');
 function setLang(l){d.dataset.lang=l;document.querySelectorAll('option[data-pt]').forEach(o=>o.textContent=o.dataset[l]);d.lang=l==='en'?'en':'pt-PT';document.querySelectorAll('[data-setlang]').forEach(b=>b.classList.toggle('on',b.dataset.setlang===l));document.querySelectorAll('.lang .cur').forEach(c=>c.textContent=l.toUpperCase());set('sf-lang',l)}
 document.querySelectorAll('[data-setlang]').forEach(b=>b.onclick=()=>{const l=b.dataset.setlang,m=document.querySelector('link[rel=alternate][hreflang="'+(l==='pt'?'pt-PT':'en')+'"]');if(l!==d.dataset.lang){location.href=m?new URL(m.getAttribute('href')).pathname+location.hash:(l==='en'?'/en':'/');return}setLang(l)});
 document.querySelectorAll('form.cf').forEach(f=>f.addEventListener('submit',async e=>{e.preventDefault();if(f.classList.contains('busy'))return;
  const L=d.dataset.lang,txt=el=>{const s=el.querySelector('[lang='+L+']')||el;return s.textContent.trim()},q=s=>f.querySelector(s);
  const sv=[...f.querySelectorAll('.pick input:checked')].map(i=>txt(i.parentNode.querySelector('span'))).join(', ');
  const via=f.querySelector('.via input:checked');const extra=[...f.querySelectorAll('.fi input:not([autocomplete])')].filter(i=>i.name!=='website'&&i.value.trim()).map(i=>i.value.trim());
  const ta=q('textarea'),url=q('input[autocomplete=url]');
  const msg=[...extra,ta&&ta.value.trim(),url&&url.value.trim()?'Site: '+url.value.trim():'',via?'Resposta por: '+txt(via.parentNode.querySelector('span')):''].filter(Boolean).join('\n');
  const body={nome:(q('input[autocomplete=name]')||{}).value||'',email:(q('input[type=email]')||{}).value||'',empresa:(q('input[autocomplete=organization]')||{}).value||'',telefone:(q('input[type=tel]')||{}).value||'',servico:sv.slice(0,60),mensagem:msg,origem:(f.closest('.md')?'Pop-up · ':'Formulário · ')+location.pathname,website:(q('input[name=website]')||{}).value||''};
  f.classList.add('busy');f.classList.remove('err');
  try{const r=await fetch('/api/lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});if(!r.ok)throw 0;f.classList.add('sent');f.reset()}catch(x){f.classList.add('err')}f.classList.remove('busy')}));
 const lg=document.getElementById('lang');lg.querySelector('button').onclick=e=>{e.stopPropagation();lg.classList.toggle('o')};document.addEventListener('click',()=>lg.classList.remove('o'));
 const nav=document.getElementById('nav');let ly=0;
 addEventListener('scroll',()=>{const y=scrollY;nav.classList.toggle('s',y>20);nav.classList.toggle('h',y>ly+6&&y>400);if(y<ly-4)nav.classList.remove('h');ly=y},{passive:true});
 const dd=document.getElementById('dd');dd.querySelector('button').onclick=e=>{e.stopPropagation();dd.classList.toggle('o')};document.addEventListener('click',()=>dd.classList.remove('o'));
 const md=document.getElementById('md'),mdo=v=>{md.classList.toggle('o',v);md.setAttribute('aria-hidden',!v);document.body.classList.toggle('lock',v);if(v){md.querySelector('.cf').classList.remove('sent');setTimeout(()=>{const f=md.querySelector('input:not([type=checkbox]):not([type=radio])');if(f&&matchMedia('(pointer:fine)').matches)f.focus({preventScroll:true})},300)}};
 document.addEventListener('click',e=>{const a=e.target.closest('[data-modal],a[href="#orcamento"]');if(a){e.preventDefault();document.getElementById('mob').classList.remove('o');mdo(true);return}const w=e.target.closest('[data-wa]');if(w){e.preventDefault();window.open('https://wa.me/351937800553','_blank','noopener')}});document.getElementById('md-x').onclick=()=>mdo(false);md.addEventListener('click',e=>{if(e.target===md)mdo(false)});addEventListener('keydown',e=>{if(e.key==='Escape')mdo(false)});
 const mob=document.getElementById('mob');const mo=v=>{mob.classList.toggle('o',v);document.body.classList.toggle('lock',v||md.classList.contains('o'))};document.getElementById('burger').onclick=()=>mo(true);document.getElementById('close').onclick=()=>mo(false);mob.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mo(false)));
 if(document.getElementById('demo')){const demo=document.getElementById('demo'),tabs=demo.querySelectorAll('.dt button');let cur=0,auto=true,tq,tl;
 const L=()=>d.dataset.lang;
 const Q={pt:'Qual é a melhor empresa de caixilharia perto de mim?',en:'Which is the best window installer near me?'};
 const R={pt:[['Empresa A','caixilharia e vidros','',''],['A sua empresa','caixilharia de alumínio com corte térmico','you','citada'],['Empresa B','janelas e portadas','','']],
          en:[['Company A','windows and glazing','',''],['Your business','thermally broken aluminium windows','you','cited'],['Company B','windows and shutters','','']]};
 const LG={pt:['Encomenda #1042 → Excel','Fatura FT 2026/318 → faturação','Encomenda #1043 → Excel','Fatura FT 2026/319 → faturação','Encomenda #1044 → Excel'],en:['Order #1042 → Excel','Invoice FT 2026/318 → invoicing','Order #1043 → Excel','Invoice FT 2026/319 → invoicing','Order #1044 → Excel']};
 function runQ(){clearTimeout(tq);const q=document.getElementById('q'),r=document.getElementById('res'),txt=Q[L()];r.innerHTML='';let i=0;
  (function ty(){q.innerHTML=txt.slice(0,i)+'<span class="caret"></span>';if(i++<txt.length){tq=setTimeout(ty,26)}else{q.textContent=txt;
   r.innerHTML=R[L()].map((x,k)=>`<div class="res ${x[2]}"><i>${k+1}</i><div><b>${x[0]}</b><small>${x[1]}</small></div>${x[3]?`<span class="tag">${x[3]}</span>`:'<span></span>'}</div>`).join('');
   r.querySelectorAll('.res').forEach((e,k)=>setTimeout(()=>e.classList.add('in'),200+k*260))}})()}
 function runL(){clearInterval(tl);const lg=document.getElementById('log');lg.innerHTML='';let k=0;
  const add=()=>{const now=new Date(Date.now()+k*41000),hh=String(now.getHours()).padStart(2,'0'),mm=String(now.getMinutes()).padStart(2,'0');
   const el=document.createElement('div');el.innerHTML=`<span>${hh}:${mm}  ${LG[L()][k%5]}</span><span>✓</span>`;lg.prepend(el);if(lg.children.length>4)lg.lastChild.remove();k++};add();tl=setInterval(add,1300)}
 function show(i){cur=i;tabs.forEach((b,k)=>{b.classList.toggle('on',k===i);b.style.animation='none';b.offsetWidth;b.style.animation=''});
  demo.querySelectorAll('.pane').forEach((p,k)=>p.classList.toggle('on',k===i));i===0?runQ():runL()}
 tabs.forEach((b,k)=>b.onclick=()=>{auto=false;demo.classList.add('stop');show(k)});
 show(0);setInterval(()=>{if(auto)show(1-cur)},7000);
 document.querySelectorAll('[data-setlang]').forEach(b=>b.addEventListener('click',()=>show(cur)));}
 
 const fq=matchMedia('(max-width:960px)'),fa=()=>document.querySelectorAll('.ft details').forEach(d=>d.open=!fq.matches);fa();fq.addEventListener('change',fa);
 requestAnimationFrame(()=>{const h=document.getElementById('hero');if(h)h.classList.add('in')});const mk=null;if(mk&&matchMedia('(pointer:fine)').matches)addEventListener('mousemove',e=>{const x=(e.clientX/innerWidth-.5)*30,y=(e.clientY/innerHeight-.5)*30;mk.style.transform=`translate(${x}px,${y}px)`},{passive:true});
 if(document.getElementById('fill')){const met=document.getElementById('metodo'),fill=document.getElementById('fill'),phs=met.querySelectorAll('.ph2');
 function mp(){const r=met.getBoundingClientRect(),k=Math.min(1,Math.max(0,(innerHeight*.75-r.top-200)/(r.height*.55)));fill.style.width=(k*100)+'%';phs.forEach((e,i)=>e.classList.toggle('lit',k>=i/phs.length+.02))}
 addEventListener('scroll',mp,{passive:true});mp();}
 const els=document.querySelectorAll('.rv');
 if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'));document.querySelectorAll('.pain').forEach(e=>e.classList.add('on'));return}
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});els.forEach(e=>io.observe(e));
 const ip=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('on',e.isIntersecting)),{rootMargin:'-30% 0px -30% 0px'});document.querySelectorAll('.pain').forEach(e=>ip.observe(e));
})();
