import React from 'react'
import LinkCard from './LinkCard';

const LinkList = ({links}) => {

return (
    <div>
        {
            links && links.map((link,i) => <LinkCard key={i} link={link} />)
        }
    </div>
)
    
}

export default LinkList
