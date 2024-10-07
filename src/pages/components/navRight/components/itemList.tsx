import React from "react";
import { Link, useLocation } from "react-router-dom";
import ItemListProps from "../assets/props/ItemList.props";
import './assets/styles/itemList.scss'



const ItemList:React.FC<ItemListProps> = ({key, path, img, alt, label}) => {
    
    const location = useLocation()
    const currentPath = location.pathname;
    const isActive = currentPath === path

    return (
<li key={key} className="menu_item" >
    <Link to={path}>
        <figure className="menu_figure">
            <div className={`menu_figure_bg ${isActive ? 'menu_figure_bg--active' : ''}`}>
                <img src={img} className="menu_figure-img" alt={alt} />
            </div>
        <figcaption className={`menu_figure-label ${isActive ? 'menu_figure-label--active' : ''}`}>{label}</figcaption>
        </figure>
    </Link>
</li>)
}

export default ItemList;