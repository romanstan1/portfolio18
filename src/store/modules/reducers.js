
const initialState = {
  posts: [
    {
      title: 'Performance Ecommerce',
      description: "This is a prototype, mobile-only, PWA, server-side rendered, ecommerce app - made following Google's RAIL performance model. To better replicate a production ecommerce site, it uses a real-time database, storage bucket and anonymous OAuth provided by Firebase. <br /> <br />It also has: <br /> - Voice search functionality via the Web Speech API, to easily find a product. <br /> - Barcode scanning to quickly find products for returning customers.",
      technologies: ['Next.js', 'React', 'Redux', 'Firebase - OAuth, Database & Storage Bucket', 'SW Precache', 'Styled Components', 'Material UI'],
      role: ['Sole developer', 'UI', 'UX'],
      link: 'https://performance-demo-ygknpgnsls.now.sh/'
    },
    {
      title: 'Skills Network',
      description: "This is a prototype, customisable, network visualisation that uses mock company data. It displays the complex relationships between individuals, teams and skillsets within an organisation. <br/><br/> To improve the frame rate off the visualisation, the nodes are SVG elements whilst the links are rendered using HTML5 Canvas.",
      technologies: [ 'D3.js', 'React', 'Redux' ],
      role: ['Sole developer', 'UI', 'UX'],
      link: 'https://skill-net.firebaseapp.com/'
    },
    {
      title: 'Product Discovery',
      description: " This prototype app blends together a number of native mobile features available on the web, in attempt to reimagine product discovery. It uses touch gestures, 60fps animations and CGI images to achieve this. <br /><br /> Some additonal features that have been used, include the <span>Vibration API</span>, <span>Payment Request API</span> and the mobile device's <span>Accelerometer</span> - which can rotate the 3D images.",
      technologies: [ 'React', 'Redux', 'GTLF 3D Images', 'React-spring', 'ThreeJS & WebGl'],
      role: ['Sole developer', 'UI', 'UX'],
      link: 'https://ecom-animation.firebaseapp.com/'
    }
  ]
}

export default (state=initialState, action) => {
  switch(action.type){
    default: return state
  }
}
