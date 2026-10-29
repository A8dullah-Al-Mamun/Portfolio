import { useEffect, useState } from 'react'; import { Menu, X } from 'lucide-react'; import { useLocation, useNavigate, Link } from 'react-router-dom'
const items=[['home','Home'],['about','About Me'],['skills','Skills'],['education','Education'],['experience','Experience'],['projects','Projects'],['contact','Contact']]
export default function Navbar(){
  const [open,setOpen]=useState(false), [active,setActive]=useState('home'), nav=useNavigate(), loc=useLocation(), home=loc.pathname==='/'
  useEffect(()=>{ if(!home) return; const o=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setActive(e.target.id)),{rootMargin:'-45% 0px -50% 0px'})
    items.forEach(([id])=>{const el=document.getElementById(id); el&&o.observe(el)}); return ()=>o.disconnect()},[home])
  const go=(id:string)=>{ setOpen(false); if(home) document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); else { nav('/'); setTimeout(()=>document.getElementById(id)?.scrollIntoView(),80) } }
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/85 backdrop-blur"><nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
   <Link to="/" onClick={()=>go('home')} className="font-mono text-lg font-semibold text-white">&lt;AM/&gt;</Link>
   <ul className="hidden gap-1 lg:flex">{items.map(([id,l])=><li key={id}><button onClick={()=>go(id)} aria-current={home&&active===id?'true':undefined} className={`rounded-md px-3 py-2 text-sm transition ${home&&active===id?'bg-accent/15 text-accent':'hover:text-white'}`}>{l}</button></li>)}</ul>
   <button className="grid h-11 w-11 place-items-center rounded-lg border border-line lg:hidden" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></nav>
   {open&&<ul id="mobile-menu" className="border-t border-line bg-ink px-5 py-2 lg:hidden">{items.map(([id,l])=><li key={id}><button onClick={()=>go(id)} className="block min-h-[44px] w-full text-left text-base">{l}</button></li>)}</ul>}</header>}
