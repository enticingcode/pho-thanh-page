import React from 'react'
import { phoBowls, appetizers } from "./MenuData"



const Menu = () => {

    function getMenuItems(menuCategory) {
        return menuCategory.map(item => {
            return (
                <li>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </li>
            )
        })
    }


    // const appetizerMenu = appetizers.map(item => {
    //     return (
    //         <div>
    //             <h1>{item.name}</h1>
    //             <h3>{item.description}</h3>
    //         </div>
    //     )
    // })




    return (
        <div className="menu--container">

            <ul className="appetizers menu--category">
                <div className="app--background banner--holder">
                    <div className="category--banner">
                        <h1>Appetizers</h1>
                    </div>
                </div>
                {getMenuItems(appetizers)}
            </ul>

            <ul className="pho menu--category">
                <div className="pho--background banner--holder">
                    <div className="category--banner">
                        <h1>Pho</h1>
                    </div>
                </div>
                {getMenuItems(phoBowls)}
            </ul>
        </div>
    )
}

export default Menu