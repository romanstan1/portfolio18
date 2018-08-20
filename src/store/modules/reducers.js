
const initialState = {
  posts: [
    {
      title: 'Skills Network',
      description: "A network visualisation that shows links between a company's employees and their skills, both the development and design to this project was soley my own",
      technologies: [ 'D3', 'React', 'Redux' ],
      link: 'https://skill-net.firebaseapp.com/'
    },
    {
      title: 'SSR & PWA Ecom Journey',
      description: 'A server-side rendered fake Ecommerce Application, ',
      technologies: [ 'NextJS', 'Redux', 'Firebase - Auth, Database, ', 'Workbox', 'Material ' ],
      link: 'www.google.com'
    },
    {
      title: 'Reinvented Ecom Journey',
      description: 'A reimagined Ecom journey that breaks from the conventional route based format of a typical ecom app',
      technologies: [ 'React', 'Redux', 'GTLF 3D Images', 'ThreeJS' ],
      link: 'www.google.com'
    }
  ]
}

export default (state=initialState, action) => {
  switch(action.type){
    default: return state
  }
}
