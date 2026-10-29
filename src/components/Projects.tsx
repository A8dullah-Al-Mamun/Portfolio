import Section from './Section'; import ProjectCard from './ProjectCard'; import { projects } from '../data/projects'
export default function Projects(){ return <Section id="projects" title="Projects"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map(p=><ProjectCard key={p.slug} p={p}/>)}</div></Section>}
