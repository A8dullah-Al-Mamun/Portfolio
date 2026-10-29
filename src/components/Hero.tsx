import { useEffect, useState } from 'react'; import { motion } from 'motion/react'; import { Download, FolderOpen, Mail } from 'lucide-react'
import { personal as p, asset } from '../data/personal'; import Social from './Social'
export default function Hero(){
  const [img,setImg]=useState(true), [cv,setCv]=useState(false)
  useEffect(()=>{ fetch(asset(p.resumePath),{method:'HEAD'}).then(r=>setCv(r.ok&&(r.headers.get('content-type')||'').includes('pdf'))).catch(()=>setCv(false)) },[])
  const go=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'})
  return <section id="home" className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.3fr_1fr]">
   <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
    <p className="mb-3 font-mono text-sm text-cyan2">{p.university} · {p.location}</p>
    <h1 className="text-4xl font-bold leading-tight sm:text-6xl">{p.name}</h1>
    <p className="mt-3 text-xl font-medium text-accent sm:text-2xl">{p.designation}</p>
    {p.tagline&&<p className="mt-3 italic">{p.tagline}</p>}
    <p className="mt-5 max-w-xl text-base leading-relaxed sm:text-lg">{p.intro}</p>
    <div className="mt-8 flex flex-wrap gap-3">
     {cv?<a className="btn-p" href={asset(p.resumePath)} download><Download size={18}/>Download Resume</a>:<button className="btn-s cursor-not-allowed opacity-70" disabled aria-disabled><Download size={18}/>Resume coming soon</button>}
     <button className="btn-s" onClick={()=>go('projects')}><FolderOpen size={18}/>Explore Projects</button>
     <button className="btn-s" onClick={()=>go('contact')}><Mail size={18}/>Contact Me</button></div>
    <div className="mt-6"><Social/></div></motion.div>
   <motion.div initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} transition={{duration:.7,delay:.15}} className="mx-auto w-full max-w-xs">
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_0_60px_-15px_rgba(59,130,246,.5)]">
     {img?<img src={asset(p.profileImage)} alt={`Portrait of ${p.name}`} width={400} height={500} className="h-full w-full object-cover" onError={()=>setImg(false)}/>
      :<div className="grid h-full place-items-center"><span className="font-mono text-6xl font-semibold text-accent">AM</span></div>}</div></motion.div></section>}
