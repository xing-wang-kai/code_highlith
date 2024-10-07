import React from "react";
import CommunityProps from "./assets/props/Community.props";
import Card from "./components/cards.components";
import './assets/style/community.style.scss'

const Community:React.FC<CommunityProps> = ({cards}) => {
    return (
        <div className="community_container">
        {cards.length <= 0 ? 
        <div>Nenhuma card adicionado</div>:
        cards.map( (card, key)=> (
            <div className='community_container--card' key={key}>

                <Card   title={card.title}
                        description={card.description}
                        color={card.color} 
                        language={card.language} 
                        code={card.code} />
                <div className='c'>
                    <h3  className='community_body--title'>{card.title}</h3>
                    <p  className='community_body--description'>{card.description}</p>

                </div>
            </div>
        ))   
    }</div>
    )
}

export default Community;