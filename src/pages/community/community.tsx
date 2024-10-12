import React from "react";
import CommunityProps from "./assets/props/Community.props";
import Card from "./components/cards.components";
import './assets/style/community.style.scss'
import hearterPng from './assets/_img/heart.png';
import commentPng from './assets/_img/comment.png';
import authorPng from '../../../src/pages/components/header/assets/_img/login-photo.png'

const Community:React.FC<CommunityProps> = ({cards}) => {
    return (
        <div className="community_container">
        {cards.length <= 0 ? 
        <div>Nenhuma card adicionado</div>:
        cards.map( (card, key)=> (
            <div className='community_container--card' key={key}>

                <Card   
                        color={card.color} 
                        language={card.language} 
                        code={card.code} />
                <div className='community_body'>
                    <h3  className='community_body--title'>{card.title}</h3>
                    <p  className='community_body--description'>{card.description}</p>
                    <div className='community_body--resume'>
                        <div className='community_body--resume-engajamento'>
                            <div className='community_body--resume-engajamento-heater'>
                                <img src={hearterPng} alt="imagem de coração" />
                                <p>9</p>
                            </div>
                            <div className='community_body--resume-engajamento-comment'>
                                <img src={commentPng} alt="imagem de ballow comments" />
                                <p>9</p>
                            </div>
                        </div>
                        <div className='community_body--author'>
                                <img src={authorPng} alt="imagem do author" />
                                <p>@kai_wang</p>
                        </div>
                    </div>

                </div>
            </div>
        ))   
    }</div>
    )
}

export default Community;