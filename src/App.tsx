import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'; import Footer from './components/Footer'
import Home from './pages/Home'; import ProjectDetails from './pages/ProjectDetails'; import NotFound from './pages/NotFound'
export default function App(){ return (<>
  <div className="grid-bg pointer-events-none fixed inset-0 -z-10" aria-hidden/>
  <Navbar/><main><Routes><Route path="/" element={<Home/>}/><Route path="/projects/:slug" element={<ProjectDetails/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/></>)}
