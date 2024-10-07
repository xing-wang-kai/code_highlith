import React, {useState} from "react";
import "./assets/style/navLeft.scss";
import NavLeftProps from "./assets/props/navLeft.props";

const NavLeft: React.FC<NavLeftProps> = ({handleCard, handleColor, handleLanguage, code}) => {

  const [codeLanguagens, ] = useState<string[]>([
    'javascript',
    'python',
    'cshap',
    'cpp',
    'ruby',
    'java',
    'php'
  ])

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [color, setFormColor] = useState<string>("#6BD1FF");
  const [language, setCodeLanguage] = useState<string>('javascript')

  const handleFormColor = (value:string) => {
    setFormColor(value);
    handleColor(value);
  }

  const handleFormLanguage = (value:string) => {
    setCodeLanguage(value);
    handleLanguage(value);

  }

  const handleSubmit = (e:any) => {
    handleCard({title, description, language, color, code})
  }


  return (
    <section className="menu_left-container">
      <div className="menu_left-div">
        <form className="menu_left-form">
          <div className="menu-1">
            <h3 className="menu_left-form--item menu-titulo">seu projeto</h3>
            <input
              className="menu_left-form--item item-imput"
              type="text"
              name="projeto"
              placeholder="Nome do seu Projeto"
              value={title}
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
            />
            <textarea
              className="menu_left-form--item item-textarea"
              rows={2}
              name="projeto"
              placeholder="Descrição do seu Projeto"
              value={description}
              onChange={(e)=> {
                setDescription(e.target.value)
              }}
            />
          </div>
          <div className="menu-2">
            <h3 className="menu_left-form--item menu-titulo">personalização</h3>
            <select className="menu_left-form--item item-select" 
                    value={language}
                    onChange={(e) => 
                      handleFormLanguage(e.target.value)
                    }
             >
              {codeLanguagens.map((value, idx) => (
                <option key={idx} value={value}>
                  {value}
                </option>
              ))}
            
            </select>
            <input
              type="color"
              value={color}
              name="projeto"
              className="menu_left-form--item item-color"
              onChange={(e) => 
                handleFormColor(e.target.value)
              }
            />
          </div>
          <button type="button" className="menu_left--botao" onClick={(e)=>handleSubmit(e)}>Salvar projeto</button>
        </form>
      </div>
    </section>
  );
};

export default NavLeft;
