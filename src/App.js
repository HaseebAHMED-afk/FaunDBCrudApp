import React , {useEffect , useState} from 'react'
import './App.css';
import LinkForm from './Components/LinkForm';
import LinkList from './Components/LinkList';

function App() {

  const [links, setLinks] = useState([])

  const loadLinks = async () =>{

    try {
      const res = await fetch('/api/getLink');
    const links = await res.json()
    setLinks(links)     
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

    <LinkForm refreshLinks={loadLinks} />
      <LinkList links={links} refreshLinks={loadLinks} />

      
    </div>
  );
}

export default App;
