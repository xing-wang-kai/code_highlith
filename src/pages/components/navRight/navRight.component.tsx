import React, {useState} from "react";
import ImgEditor from "./assets/_img/editor3.png";
import ImgComunid from "./assets/_img/comunidade3.png";
import "./assets/style/navRight.scss";
import ItemList from "./components/itemList";

const NavRight: React.FC = () => {

  const [menuItens, ] = useState([
    {img: ImgEditor, alt: 'Editor de Código', label: 'Editor de Código', path:'/'},
    {img: ImgComunid, alt: 'Imagem da comunidade', label: 'Comunidade', path:'/comunidade'} 
  ])


  return (
    <section className="menu_container">
      <nav className="menu_nav">
        <ul>
          <h2 className="menu_titulo">MENU</h2>
            {menuItens.map((item, key)=>(
               <ItemList  key={key} 
                          path={item.path} 
                          img={item.img} 
                          label={item.label} 
                          alt={item.alt} 
                />
            ))
          }
        </ul>
      </nav>
    </section>
  );
};

export default NavRight;
