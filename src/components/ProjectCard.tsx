import { Link } from 'react-router-dom'; import { ExternalLink, Github } from 'lucide-react'; import type { Project } from '../types'; import ProjectImage from './ProjectImage'
export default function ProjectCard({p}:{p:Project}){ return <article className="group flex flex-col overflow-hidden rounded-xl border border-line bg-panel/70 transition hover:-translate-y-1 hover:border-accent focus-within:border-accent">
 <ProjectImage src={p.image} name={p.name}/><div className="flex flex-1 flex-col p-5"><h3 className="text-xl font-semibold">{p.name}</h3><p className="mt-2 flex-1 text-sm">{p.shortDescription}</p>
 <ul className="mt-3 flex flex-wrap gap-2">{p.tech.map(t=><li key={t} className="rounded-md border border-line px-2 py-0.5 font-mono text-xs text-cyan2">{t}</li>)}</ul>
 <div className="mt-4 flex flex-wrap items-center gap-2"><Link className="btn-p" to={`/projects/${p.slug}`}>View Details</Link>
  {p.liveUrl&&<a className="btn-s" href={p.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} live site`}><ExternalLink size={16}/>Live</a>}
  {p.repoUrl&&<a className="btn-s" href={p.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} repository`}><Github size={16}/>Code</a>}</div></div></article>}
