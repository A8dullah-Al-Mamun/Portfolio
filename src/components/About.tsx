import Section from './Section'; import { personal as p } from '../data/personal'
export default function About(){ return <Section id="about" title="About Me"><div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
 <div className="space-y-4 text-lg leading-relaxed">
  <p>I'm {p.name}, a {p.status.toLowerCase()} in {p.department} at {p.university}. My interests are {p.interests.join(' and ').toLowerCase()}.</p>
  {p.aboutParagraphs.map((t,i)=><p key={i}>{t}</p>)}</div>
 <div className="card"><h3 className="mb-3 text-lg font-semibold">More coming soon</h3>
  <p className="mb-3 text-sm">Edit <code className="font-mono text-cyan2">aboutParagraphs</code> in <code className="font-mono text-cyan2">src/data/personal.ts</code> to add:</p>
  <ul className="list-inside list-disc space-y-1 text-sm">{p.aboutPlaceholders.map(x=><li key={x}>{x}</li>)}</ul></div></div></Section>}
