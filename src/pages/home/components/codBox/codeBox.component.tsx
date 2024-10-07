import React from "react";
import CodeBoxProps from "./assets/props/codeBox.props";
import './assets/style/codeBox.scss'


const CodeBox:React.FC<CodeBoxProps> = ({ color, language, handleCode}) => {

    const handleSetCode = (event:any) => {
        handleCode(event.currentTarget.textContent)

    }

    return (
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
                        onInput={handleSetCode}
                        >
                       Paste your code here
                    </code>
                </pre>
            </div>
          </section>
        </section>
    )
}

export default CodeBox;