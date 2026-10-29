import { useEffect } from 'react'; import { Link, useParams, useNavigate } from 'react-router-dom'; import { ExternalLink, Github, ArrowLeft } from 'lucide-react'
import { projects } from '../data/projects'; import ProjectImage from '../components/ProjectImage'; import NotFound from './NotFound'
const Empty=({t}:{t:string})=><p className="italic text-slate-500">{t}</p>
export default function ProjectDetails(){ const {slug}=useParams(), nav=useNavigate(), i=projects.findIndex(p=>p.slug===slug), p=projects[i]
 useEffect(()=>{window.scrollTo(0,0)},[slug]); if(!p) return <NotFound what="Project"/>
 const back=()=>{nav('/'); setTimeout(()=>document.getElementById('projects')?.scrollIntoView(),80)}
 const prev=projects[i-1], next=projects[i+1]
 const link=(url:string|undefined,label:string,I:typeof Github)=>url?<a className="btn-p" href={url} target="_blank" rel="noopener noreferrer"><I size={16}/>{label}</a>:<span className="btn-s cursor-not-allowed opacity-60" aria-disabled="true"><I size={16}/>{label} unavailable</span>
 return <article className="mx-auto max-w-4xl px-5 pb-20 pt-28 sm:px-8"><button className="btn-s mb-6" onClick={back}><ArrowLeft size={16}/>Back to Projects</button>
  <h1 className="text-3xl font-bold sm:text-5xl">{p.name}</h1>
  <div className="mt-6 overflow-hidden rounded-xl border border-line"><ProjectImage src={p.image} name={p.name}/></div>
  <div className="mt-6 flex flex-wrap gap-3">{link(p.liveUrl,'Live project',ExternalLink)}{link(p.repoUrl,'Client repository',Github)}</div>
  <section className="mt-10"><h2 className="mb-2 text-2xl font-semibold">Overview</h2><p className="leading-relaxed">{p.description}</p>
   <ul className="mt-4 flex flex-wrap gap-2">{p.tech.map(t=><li key={t} className="rounded-md border border-line px-2 py-0.5 font-mono text-xs text-cyan2">{t}</li>)}</ul></section>
  <section className="mt-10"><h2 className="mb-2 text-2xl font-semibold">Development challenges</h2>{p.challenges?<p className="leading-relaxed">{p.challenges}</p>:<Empty t="Not documented yet. Add this in src/data/projects.ts."/>}</section>
  <section className="mt-10"><h2 className="mb-2 text-2xl font-semibold">Future improvements</h2>{p.futurePlans?<p className="leading-relaxed">{p.futurePlans}</p>:<Empty t="Not documented yet. Add this in src/data/projects.ts."/>}</section>
  <nav aria-label="Project navigation" className="mt-12 flex flex-wrap justify-between gap-3 border-t border-line pt-6"><div>{prev&&<Link className="btn-s" to={`/projects/${prev.slug}`}>← {prev.name}</Link>}</div><Link className="btn-s" to="/">Home</Link><div>{next&&<Link className="btn-s" to={`/projects/${next.slug}`}>{next.name} →</Link>}</div></nav></article>}
