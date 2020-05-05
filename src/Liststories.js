import React from 'react';
//import Landingpage from './landingpage';
//import {Link} from 'react-router-dom'
function Liststories(prop){

    const Item = prop.items;
    const liststories = Item.map(
        Item =>
        {
            return <div className="list" key="Item.key">
                <p>
                    {Item.addstory}
                </p>
            </div>
        }
    )
        return(
            <div>
                {liststories}
            </div>
        )
    
}
export default Liststories;