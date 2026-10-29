import { useState } from 'react'; import { Code2 } from 'lucide-react'; import { asset } from '../data/personal'
export default function ProjectImage({src,name}:{src?:string;name:string}){ const [bad,setBad]=useState(false)
 return <div className="aspect-video overflow-hidden bg-navy">{src&&!bad?<img src={asset(src)} alt={`Screenshot of ${name}`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" onError={()=>setBad(true)}/>
 :<div className="grid h-full place-items-center text-slate-500"><div className="text-center"><Code2 className="mx-auto mb-1" size={32}/><span className="text-xs">Screenshot not added</span></div></div>}</div>}
