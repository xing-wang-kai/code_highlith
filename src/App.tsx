import React ,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CodeEditor from './pages/home/code_editor.page';
import Header from './pages/components/header/header.component';
import NavRight from './pages/components/navRight/navRight.component';
import Community from './pages/community/community';
import CardProps from './pages/components/cardProps';

const App:React.FC = () => {

  const [card, setCard] = useState<CardProps[]>([])

  const handleSetCards = (cardDict: CardProps) => {

    const currentCards: CardProps[] = [...card, cardDict];
    setCard(currentCards);

    console.log("CARDS  ", card)
  }

  useEffect(()=>{
    console.log(card)
  }, [card])

  return (
    <section className='app-container'>
    <Router>
      <Header/>
      <div className="body-container">
        <NavRight/>
        <Routes>
            <Route path='/' element={<CodeEditor HandleCard={handleSetCards}/>}/>
            <Route path='/comunidade' element={<Community cards={card}/>}/>
        </Routes>
      </div>
    </Router>
    </section>
  );
}

export default App;
