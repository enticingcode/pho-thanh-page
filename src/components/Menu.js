import React from 'react'
import { phoBowls, appetizers } from "./MenuData"



const Menu = () => {

    function getMenuItems(menuCategory) {
        return menuCategory.map(item => {
            return (
                <div>
                    <h1>{item.name}</h1>
                    <h3>{item.description}</h3>
                </div>
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
        <div className="menu--content">
            {getMenuItems(appetizers)}
            {/* {phoBowls} */}
        </div>
    )
}

export default Menu