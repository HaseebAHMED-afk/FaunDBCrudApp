import React from 'react'
import './LinkList.css'
import LinkCard from './LinkCard';

const LinkList = ({links , refreshLinks}) => {

return (
    <div>
        <h1 className='second-heading' >LINKS</h1>
        {
            links && links.filter((link) => !link.archived).map((link,i) => <LinkCard key={i} link={link} refreshLinks={refreshLinks} />)
        }

        <h1 className='second-heading' >ARCHIVED LINKS</h1>
        {
            links && links.filter((link) => link.archived).map((link,i) => <LinkCard key={i} link={link} refreshLinks={refreshLinks} />)
        }
    </div>
)
    
}

export default LinkList
