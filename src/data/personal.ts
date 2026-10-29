export const personal = {
  name:'Abdullah Al Mamun', designation:'Full Stack Developer & Competitive Programmer', location:'Bangladesh',
  university:'Khwaja Yunus Ali University', department:'Computer Science and Engineering (CSE)', status:'Second-year student',
  email:'a8dullah.al.mamun@gmail.com', phone:'+8801311004914',
  github:'https://github.com/A8dullah-Al-Mamun', linkedin:'https://linkedin.com/in/a8dullah-al-mamun/', instagram:'https://instagram.com/myself_mamun_',
  interests:['Competitive Programming','Cybersecurity'],
  // TODO: add a tagline of your own. Leave '' to hide it.
  tagline:'',
  intro:'CSE student at Khwaja Yunus Ali University, interested in competitive programming and cybersecurity.',
  // TODO: expand these with your real story. Empty list = shows a prompt instead.
  aboutParagraphs:[] as string[],
  aboutPlaceholders:['Programming journey','Preferred types of development work','How I approach learning','Interests outside programming'],
  education:[{ institution:'Khwaja Yunus Ali University', department:'Computer Science and Engineering (CSE)', status:'Second-year student', extra:[] as string[] }],
  experience:[] as import('../types').ExperienceItem[],
  profileImage:'images/profile.jpg', resumePath:'resume/resume.pdf',
}
export const asset = (p:string) => import.meta.env.BASE_URL + p
