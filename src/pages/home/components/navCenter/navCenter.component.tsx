import React, { useEffect, useState} from "react";
import './assets/style/navCenter.scss';
import navCenterProps from "./assets/props/navCenter.props";
import hljs from 'highlight.js';
import './assets/style/dracula.css';

import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import csharp from 'highlight.js/lib/languages/csharp';
import cpp from 'highlight.js/lib/languages/cpp';
import ruby from 'highlight.js/lib/languages/ruby';
import php from 'highlight.js/lib/languages/php';
import CodeBox from "../codBox/codeBox.component";

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('csharp', csharp);
hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('ruby', ruby);
hljs.registerLanguage('php', php);

const NavCenter: React.FC<navCenterProps> = ({color, language, handleCode}) => {

   const [code, setCode] = useState<string>()


    useEffect(() => {
        hljs.highlightAll();
        handleCode(code);

       
    }, [code, handleCode])
    
    const handleApplyHighLight = (e:any) => {
        e.preventDefault()
   
        const codeArea:HTMLElement | null = document.querySelector<HTMLElement>(".cod_wrapper")

        if(codeArea){

            const currentCode = codeArea.innerText

            setCode(currentCode)
        
            codeArea.innerHTML = `<code class="preview ${language} hljs language-${language}" contenteditable="true" area-label="Linha de código editave">${currentCode}</code>`
            
        }
    }
    
    
  return (
    <section className="body_container-center">
        <form >
            <CodeBox  color={color} 
                language={language}
                handleCode={handleCode}
                />
        <button type='button' className="body_botao" onClick={(e)=>handleApplyHighLight(e)}>Visualizar com highlight</button>
        </form>
    </section>
  );
};

export default NavCenter;
