export interface Project { slug:string; name:string; image?:string; shortDescription:string; description:string; tech:string[]; liveUrl?:string; repoUrl?:string; challenges:string; futurePlans:string }
export interface Skill { name:string; icon:string }
export interface SkillCategory { title:string; skills:Skill[] }
export interface ExperienceItem { role:string; org:string; period:string; summary:string }
