import { GraduationCap } from 'lucide-react'; import Section from './Section'; import { personal as p } from '../data/personal'
export default function Education(){ return <Section id="education" title="Education">{p.education.map(e=>
 <div key={e.institution} className="card flex gap-4"><GraduationCap className="mt-1 shrink-0 text-accent" size={28}/><div>
  <h3 className="text-xl font-semibold">{e.institution}</h3><p className="mt-1">{e.department}</p><p className="mt-1 text-cyan2">{e.status}</p>
  {e.extra.map(x=><p key={x} className="mt-1 text-sm">{x}</p>)}</div></div>)}</Section>}
