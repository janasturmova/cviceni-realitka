import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Estate } from '../components/Estate';

const path = window.location.pathname.match(/dum\d{2}/)[0];
const response = await fetch(`https://apps.kodim.cz/daweb/trening-api/apis/realitka/${path}`)
const data= await response.json();  
const {title, city, price, text, photo} = data;
console.log(response)
console.log(data)



document.querySelector('#root').innerHTML = render(
  <div className="container">
    <Header/>
    <Estate title={title} city={city} price={price} text={text} src={photo}/>
  </div>
);
