import React from 'react';
import logoKoder from "./assets/_img/Kodigo-solutions-logo-2.png";
import loginphoto from "./assets/_img/login-photo.png";
import ALuraMenuLog from "./assets/_img/menu3.png";
import pesquisaimg from "./assets/_img/Pesquisar3x.png";
import './assets/style/header.scss';

const Header: React.FC = () => {
  return (
    <section className='header_container'>
      <figure className='header_imagen'>
        <img src={logoKoder} alt="logo-alura" className='header_imagem--img' />
      </figure>

      <form className='header_forms'>
        <input 
          type="search" 
          placeholder='Busque por Algo' 
          className='header_forms--search' 
        />
      </form>
      <img 
        src={pesquisaimg} 
        className='header_form-pesquisa--img' 
        alt='PESQUISAR' 
      />

      <figcaption className='header_imagem--login'>
        <img 
          src={loginphoto} 
          alt="foto-perfil" 
          className='header_imagem--login-imagem' 
        />
        <figcaption className='header_imagem--label'>kai wang</figcaption>
      </figcaption>

      <figcaption className='header_imagem--menu'>
        <img 
          src={ALuraMenuLog} 
          alt="foto-perfil" 
          className='header_imagem--menu-img' 
        />
      </figcaption>
    </section>
  );
};

export default Header;
