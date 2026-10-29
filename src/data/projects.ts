import type { Project } from '../types'
// Replace each placeholder with real details. Add a screenshot to public/images/projects/ and set image:'images/projects/x.png'.
const ph = (n:number):Project => ({
  slug:`project-${n}`, name:`Project ${n} (placeholder)`, shortDescription:'Placeholder. Replace with a short description of your project.',
  description:'Placeholder. Replace with a detailed description of what this project does and why you built it.',
  tech:['Add technology'], liveUrl:'', repoUrl:'', challenges:'', futurePlans:'' })
export const projects: Project[] = [ph(1), ph(2), ph(3)]
