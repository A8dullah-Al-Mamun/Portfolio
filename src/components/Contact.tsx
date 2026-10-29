import { Mail, Phone, MapPin } from 'lucide-react'; import Section from './Section'; import Social from './Social'; import { personal as p } from '../data/personal'
export default function Contact(){ const rows=[{I:Mail,l:'Email',v:p.email,h:`mailto:${p.email}`},{I:Phone,l:'Phone',v:p.phone,h:`tel:${p.phone}`},{I:MapPin,l:'Location',v:p.location,h:undefined}]
 return <Section id="contact" title="Contact"><p className="mb-6 max-w-xl text-lg">Open to talking about projects, competitive programming, or cybersecurity.</p>
 <div className="grid gap-4 md:grid-cols-3">{rows.map(({I,l,v,h})=>{const c=<><I className="shrink-0 text-accent"/><div className="min-w-0"><p className="text-xs">{l}</p><p className="break-all font-medium text-white">{v}</p></div></>
  return h?<a key={l} href={h} className="card flex items-center gap-3 transition hover:border-accent">{c}</a>:<div key={l} className="card flex items-center gap-3">{c}</div>})}</div>
 <div className="mt-8"><Social/></div></Section>}
