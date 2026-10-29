import type { SkillCategory } from '../types'
const d = (s:string, v='original') => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s}/${s}-${v}.svg`
export const skillCategories: SkillCategory[] = [
 {title:'Languages',skills:[{name:'C',icon:d('c')},{name:'C++',icon:d('cplusplus')},{name:'JavaScript',icon:d('javascript')},{name:'TypeScript',icon:d('typescript')},{name:'Python',icon:d('python')},{name:'HTML',icon:d('html5')},{name:'CSS',icon:d('css3')}]},
 {title:'Frontend',skills:[{name:'React',icon:d('react')},{name:'Tailwind CSS',icon:d('tailwindcss')}]},
 {title:'Backend',skills:[{name:'Node.js',icon:d('nodejs')},{name:'Express.js',icon:d('express')},{name:'Nginx',icon:d('nginx')}]},
 {title:'Database & Backend Services',skills:[{name:'MongoDB',icon:d('mongodb')},{name:'PostgreSQL',icon:d('postgresql')},{name:'SQLite',icon:d('sqlite')},{name:'Firebase',icon:d('firebase')}]},
 {title:'Tools & Environment',skills:[{name:'Visual Studio Code',icon:d('vscode')},{name:'Postman',icon:d('postman')},{name:'Ubuntu',icon:d('ubuntu')}]},
]
