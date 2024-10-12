import React, {useEffect} from 'react'
import CardProps from "../../components/cardProps";
import '../components/assets/styles/cards.scss';
import '../../home/components/codBox/assets/style/codeBox.scss';
import '../../home/components/navCenter/assets/style/dracula.css';
import hljs from 'highlight.js';

import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import csharp from 'highlight.js/lib/languages/csharp';
import cpp from 'highlight.js/lib/languages/cpp';
import ruby from 'highlight.js/lib/languages/ruby';
import php from 'highlight.js/lib/languages/php';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('csharp', csharp);
hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('ruby', ruby);
hljs.registerLanguage('php', php);



const Card:React.FC<CardProps> = ({color, language, code}) => {
    useEffect(() => {
        hljs.highlightAll();
       
    }, [])
    return(
    <section style={{backgroundColor: color}} className="body-center">
    <section className="body-card">
      <fieldset className="body_text-corpo">
        <input
          className="escolhared"
          type="radio"
          name="escolha"
          id="red"
          defaultChecked
        />
        <label htmlFor="red"></label>
        <input
          className="escolhayellow"
          type="radio"
          name="escolha"
          id="yellow"
        />
        <label htmlFor="yellow"></label>
        <input
          className="escolhagreen"
          type="radio"
          name="escolha"
          id="green"
        />
        <label htmlFor="green"></label>
      </fieldset>
      
      <div className="body_textarea">
        <pre className="cod_wrapper">
              <code 
                  className={`preview hljs ${language}`}
                  contentEditable={true} 
                  area-label="Linha de código editave"
                  >
                 {code}
              </code>
          </pre>
      </div>
    </section>
  </section>)
}

export default Card;