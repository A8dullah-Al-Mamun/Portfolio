import { motion } from 'motion/react'; import type { ReactNode } from 'react'
export default function Section({id,title,children}:{id:string;title:string;children:ReactNode}){
  return <section id={id} className="sec"><motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.5}}>
  <h2 className="mb-10 text-3xl font-bold sm:text-4xl">{title}</h2>{children}</motion.div></section>}
