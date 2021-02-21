import React , {useEffect , useState} from 'react'
import './App.css';
import LinkList from './Components/LinkList';

function App() {

  const [links, setLinks] = useState([])

  const loadLinks = async () =>{

    try {
      const res = await fetch('/api/getLink');
    const links = await res.json()
    setLinks(links)     
    console.log(links);
    } catch (error) {
        console.error(error);
    }

  }

  useEffect( () => {
    loadLinks()
  },[] )


  return (
    <div className="App">
      <h1 className='main-heading' >FaunaDB and Netlify CRUD App</h1>
      <label className="label" >ID: <input className="text-field" type='text' placeholder='Use ID for updating only'  /></label><br /><br />
      <label className="label" >Name: <input className="text-field" type='text' placeholder='Enter a name'  /></label><br /><br />
      <label className="label" >URL: <input className="text-field" type='text' placeholder='Enter a URL'  /></label><br /><br />
      <label className="label" >Desription: <input className="text-field" type='text' placeholder='Give a small description'  /></label><br /><br />

    <h1 className="second-heading" >LINKS</h1>

      <LinkList links={links} />

      
    </div>
  );
}

export default App;
