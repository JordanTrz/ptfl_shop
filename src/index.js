// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react'; // importado librería react
import ReactDOM from 'react-dom'; // importador funcionalidad para renderizar elementos en el virtual dom
import "./index.css";
import { Header } from './Components/1_header/header';
import { Main } from './Components/2_main/main';
import { Fruits } from './Components/3-1_fruits/fruits';
import { Footer } from './Components/3_footer/footer';
import { Frutas } from './data';

function App(){
  return(
    <div className="globalWrapper">
      <Header />
      <Main>
        {Frutas.map((fruta) => {
          return <Fruits key={fruta.name} fruta={fruta} />
        })}
      </Main>
      <Footer />
    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'))