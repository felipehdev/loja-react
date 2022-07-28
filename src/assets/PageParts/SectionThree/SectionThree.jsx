import React from "react";
import Btn2 from "../../Componentes/Btn2/Btn2";
import Input from "../../Componentes/Input/Input";
import Label from "../../Componentes/Label/Label";
import P from "../../Componentes/P/P";
import S from "./SectionThree.module.css";
const SectionThree = () => {
  return (
    <div className={S.sectionThree}>
      <P text="Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!" />
      <div className={S.inputsDiv}>
        <div>
          <Label text="Nome do seu amigo:" />
          <Input />
        </div>

        <div>
          <Label text="E-mail:" />
          <Input />
        </div>
      </div>
      
      <Btn2 text='Enviar agora'/>
    </div>
  );
};

export default SectionThree;
