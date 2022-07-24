import React from 'react'
import * as menuDir from "./MenuData"



const Menu = () => {

    function getMenuItems(menuCategory) {
        return menuCategory.map(item => {
            return (
                <li key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p className="price">{item.price}</p>
                </li>
            )
        })
    }

    return (
        <>
            <div className="menu--container">

                <div className="bg--fade"></div>
                <div className="menu--bg--container"></div>
                <ul className="appetizers menu--category">
                    <div className="app--background banner--holder">
                        <div className="category--banner">
                            <h1>Appetizers</h1>
                        </div>
                    </div>
                    {getMenuItems(menuDir.appetizers)}
                </ul>

                <ul className="pho menu--category">
                    <div className="pho--background banner--holder">
                        <div className="category--banner">
                            <h1>Pho</h1>
                        </div>
                    </div>
                    {getMenuItems(menuDir.phoBowls)}
                </ul>

                <ul className="noodles menu--category">
                    <div className="noodles--background banner--holder">
                        <div className="category--banner">
                            <h1>Noodles</h1>
                        </div>
                    </div>
                    {getMenuItems(menuDir.noodles)}
                </ul>

                <ul className="vermicelli menu--category">
                    <div className="vermicelli--background banner--holder">
                        <div className="category--banner">
                            <h1>Vermicelli</h1>
                        </div>
                    </div>
                    {getMenuItems(menuDir.vermicelliNoodle)}
                </ul>

                <ul className="stirFriedNoodle menu--category">
                    <div className="stirFriedNoodle--background banner--holder">
                        <div className="category--banner">
                            <h1>Stir Fried Noodles</h1>
                        </div>
                    </div>
                    {getMenuItems(menuDir.stirFriedNoodle)}
                </ul>

                <ul className="friedRice menu--category">
                    <div className="friedRice--background banner--holder">
                        <div className="category--banner">
                            <h1>Fried Rice</h1>
                        </div>
                    </div>
                    {getMenuItems(menuDir.friedRice)}
                </ul>

                <ul className="hotPot menu--category">
                    <div className="hotPot--background banner--holder">
                        <div className="category--banner">
                            <h1>Hot Pot</h1>
                        </div>
                    </div>
                    {getMenuItems(menuDir.hotPot)}
                </ul>

                <ul className="camTamRiceDish menu--category">
                    <div className="camTamRiceDish--background banner--holder">
                        <div className="category--banner">
                            <h1>Cam Tam - Rice Dish</h1>
                        </div>
                    </div>
                    {getMenuItems(menuDir.comTamRiceDish)}
                </ul>

                <ul className="doChay menu--category">
                    <div className="doChay--background banner--holder">
                        <div className="category--banner">
                            <h1>Do Chay</h1>
                        </div>
                    </div>
                    {getMenuItems(menuDir.doChay)}
                </ul>

                <ul className="loMein menu--category">
                    <div className="loMein--background banner--holder">
                        <div className="category--banner">
                            <h1>Lo Mein</h1>
                        </div>
                    </div>
                    {getMenuItems(menuDir.loMein)}
                </ul>
                <ul className="kidsPho menu--category">
                    <div className="kidsPho--background banner--holder">
                        <div className="category--banner">
                            <h1>Kid's Pho</h1>
                        </div>
                    </div>
                    {getMenuItems(menuDir.kidsPho)}
                </ul>
                <ul className="thucuong menu--category">
                    <div className="thucuong--background banner--holder">
                        <div className="category--banner">
                            <h1>ThuCuong - Beverages</h1>
                        </div>
                    </div>
                    {getMenuItems(menuDir.thucuong)}
                </ul>
                <ul className="chefSpecial menu--category">
                    <div className="chefSpecial--background banner--holder">
                        <div className="category--banner">
                            <h1>Chef Specials</h1>
                        </div>
                    </div>
                    {getMenuItems(menuDir.chefSpecial)}
                </ul>

            </div>

        </>
    )
}

export default Menu