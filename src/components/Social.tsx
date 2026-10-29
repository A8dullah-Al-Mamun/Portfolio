import { Github, Linkedin, Instagram } from 'lucide-react'; import { personal as p } from '../data/personal'
const links=[{l:'GitHub',h:p.github,I:Github},{l:'LinkedIn',h:p.linkedin,I:Linkedin},{l:'Instagram',h:p.instagram,I:Instagram}]
export default function Social(){ return <div className="flex gap-3">{links.map(({l,h,I})=>
 <a key={l} href={h} target="_blank" rel="noopener noreferrer" aria-label={`${l} profile`} className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-panel text-slate-200 transition hover:border-accent hover:text-accent"><I size={20}/></a>)}</div>}
