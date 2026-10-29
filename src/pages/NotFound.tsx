import { Link } from 'react-router-dom'
export default function NotFound({what='Page'}:{what?:string}){ return <div className="mx-auto max-w-xl px-5 pb-24 pt-36 text-center"><h1 className="text-4xl font-bold">{what} not found</h1><p className="mt-3">The address doesn't match anything here.</p>
 <div className="mt-6 flex justify-center gap-3"><Link className="btn-p" to="/">Go home</Link></div></div>}
