import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Contador from './01/Contador';
import Letreiro from './01/Letreiro';
import DataTime from './01/DataTime';
import Toolbar from './03/Exemplo1';
import Gallery from './03/Exemplo2';
import Count from './03/Exemplo3';
import Form from './03/Exemplo4';
import MovingDot from './03/Exemplo5';
import Form2 from './03/Exemplo6';
import Form3 from './03/Exemplo7';
import List from './03/Exemplo8';
import List2 from './03/Exemplo9';
import ShapeEditor from './03/Exemplo10';
import CounterList from './03/Exemplo11';
import List3 from './03/Exemplo12';
import List4 from './03/Exemplo13';
import  BucketList from './03/Exemplo14';
import  Quiz from './04/Exemplo1';
import {Menu} from './Menu';
import FormTicket from './04/FormTicket';
import Accordion from './04/Exemplo3';
import Contact from './04/Exemplo04';
import Gallery2 from './02/Exemplo1';
import TodoList from './02/Exemplo2';
import Calculadora from './Calculadora';
import Memoria from './MemoryGame/Memory';

function MinhasRotas() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menu/>} />
      <Route path="/datatime" element={<DataTime/>} />
      <Route path="/letreiro" element={<Letreiro/>} />
      <Route path="/contador" element={<Contador/>} />
      <Route path="/gallery2" element={<Gallery2/>} />
      <Route path="/toolbar" element={<Toolbar/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/todolist" element={<TodoList/>} />
      <Route path="/count" element={<Count/>} />
      <Route path="/form" element={<Form/>} />
      <Route path="/movingDot" element={<MovingDot/>} />
      <Route path="/form2" element={<Form2/>} />
      <Route path="/form3" element={<Form3/>} />
      <Route path="/list" element={<List/>} />
      <Route path="/list2" element={<List2/>} />
      <Route path="/shapeEditor" element={<ShapeEditor/>} />
      <Route path="/counterList" element={<CounterList/>} />
      <Route path="/list3" element={<List3/>} />
      <Route path="/list4" element={<List4/>} />
      <Route path="/bucketList" element={<BucketList/>} />
      <Route path="/city" element={<Quiz/>} />
      <Route path="/ticket" element={<FormTicket/>} />
      <Route path="/accordion" element={<Accordion/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/calculadora" element={<Calculadora/>} />
      <Route path="/memoria" element={<Memoria/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default MinhasRotas;