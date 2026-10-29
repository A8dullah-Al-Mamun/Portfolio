import { useState } from 'react'; import Section from './Section'; import { skillCategories } from '../data/skills'
function Icon({src,name}:{src:string;name:string}){ const [bad,setBad]=useState(false)
 return <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-slate-100/95 p-1.5">{bad?<span className="text-xs font-bold text-slate-800">{name.slice(0,2)}</span>:<img src={src} alt="" width={28} height={28} loading="lazy" onError={()=>setBad(true)}/>}</span>}
export default function Skills(){ return <Section id="skills" title="Skills"><div className="grid gap-5 md:grid-cols-2">
 {skillCategories.map(c=><div key={c.title} className="card"><h3 className="mb-4 text-lg font-semibold">{c.title}</h3>
  <ul className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">{c.skills.map(s=><li key={s.name} className="flex items-center gap-3 rounded-lg border border-line px-3 py-2 transition hover:-translate-y-0.5 hover:border-accent"><Icon src={s.icon} name={s.name}/><span className="text-sm">{s.name}</span></li>)}</ul></div>)}</div></Section>}
