import CardProps from "../../components/cardProps";
import '../components/assets/styles/cards.scss';
import '../../home/components/codBox/assets/style/codeBox.scss'



const Card:React.FC<CardProps> = ({title, description, color, language, code}) => {

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