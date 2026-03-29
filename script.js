  document.getElementById('yr').textContent = new Date().getFullYear();

  // Theme
  const html=document.documentElement,btn=document.getElementById('themebtn'),
        ic=document.getElementById('themeic'),lb=document.getElementById('themelb');
  let dark=true;
  btn.addEventListener('click',()=>{
    dark=!dark;
    html.setAttribute('data-theme',dark?'dark':'light');
    ic.textContent=dark?'☀':'🌙';
    lb.textContent=dark?'Mode clair':'Mode sombre';
  });

  // Mobile nav
  const ham=document.getElementById('ham'),mob=document.getElementById('mobnav');
  ham.addEventListener('click',()=>mob.classList.toggle('open'));
  mob.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mob.classList.remove('open')));

  // Scroll reveal
  const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')}),{threshold:.12});
  document.querySelectorAll('.r').forEach(el=>ro.observe(el));

  // Skill bars
  const bo=new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting)return;
    e.target.querySelectorAll('.b-fill').forEach(f=>{f.style.transform=`scaleX(${f.dataset.w})`;f.classList.add('go')});
    bo.unobserve(e.target);
  }),{threshold:.3});
  document.querySelectorAll('.sk-card').forEach(el=>bo.observe(el));

  // Form
  document.getElementById('cform').addEventListener('submit',e=>{
    e.preventDefault();
    const n=document.getElementById('fn').value.trim(),
          s=document.getElementById('fs').value.trim(),
          m=document.getElementById('fm').value.trim();
    window.location.href=`mailto:sami.k.educ@gmail.com?subject=${encodeURIComponent(s)}&body=${encodeURIComponent('De : '+n+'\n\n'+m)}`;
  });
