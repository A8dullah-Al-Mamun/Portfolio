import { ArrowUp } from 'lucide-react'; import { personal as p } from '../data/personal'; import Social from './Social'
export default function Footer(){ return <footer className="border-t border-line"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm sm:flex-row sm:px-8">
 <div className="text-center sm:text-left"><p className="font-semibold text-white">{p.name}</p><p>{p.designation}</p><p>© {new Date().getFullYear()} {p.name}</p></div>
 <Social/><button className="btn-s" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}><ArrowUp size={16}/>Back to top</button></div></footer>}
