// HomePage.tsx
import React, {useEffect, useState} from 'react';
import './assests/styles/home.scss'; 
import NavLeft from '../components/navLeft/navLeft.component';
import NavCenter from './components/navCenter/navCenter.component';
import CodeEditorProps from './assests/codeEditor.props';

// Define um componente funcional que pode ser tipado se necessário
const CodeEditor: React.FC<CodeEditorProps> = ({HandleCard}) => {

  const [formColor, setFormColor] = useState<string>("#6BD1FF");
  const [language, setLanguage] = useState<string>('javascript');
  const [code, setCode] = useState<string>('')

  const handleFormColor = (value:string) => {
    setFormColor(value)
    console.log(formColor)
  }
  const handleSetLanguage = (value:string) => {
    setLanguage(value)
    console.log(language)
  }

  useEffect(()=>{
    console.log(language, formColor)
  }, [language, formColor])


  const handleSetCode = (value:string) => {
    setCode(value)
  }

  return (
      <section className="code_editor-container">
        <NavCenter color={formColor} 
                   language={language} 
                   handleCode={handleSetCode}
        />
        <NavLeft handleCard={HandleCard}
                 handleColor={handleFormColor}
                 handleLanguage={handleSetLanguage} 
                 code={code}
        />
      </section>
  );
};

export default CodeEditor;
