import "./App.css";
import Btn2 from "./assets/Componentes/Btn2/Btn2";
import HeaderBg from "./assets/Componentes/HeaderBg/HeaderBg";
import SectionTt from "./assets/Componentes/SectionTt/SectionTt";
import FooterBg from "./assets/Componentes/FooterBg/FooterBg";
import SectionOne from "./assets/PageParts/SectionOne/SectionOne";
import SectionTwo from "./assets/PageParts/SectionTwo/SectionTwo";
import SectionThree from "./assets/PageParts/SectionThree/SectionThree";
import API from "./assets/API/API";

/*
INSTRUÇÕES

text personaliza texto;
src personaliza imagem;
alt personaliza o texto alternativo a image;

height personaliza a altura;
width personaliza a largura;

parcel personaliza a quantade de parcelas;
price personaliza o preço;




*/
function App() {
  return (
    <div className="App">
      <API/>
      <HeaderBg />
      <SectionOne /> 
      <SectionTt text="Sua seleção especial" />
      <SectionTwo />      
      <SectionTt text='Compartilhe a novidade'/>
      <SectionThree />

     

      
      <FooterBg/>
    </div>
  );
}

export default App;
