import React from "react";
import H4 from "../../Componentes/H4/H4";
import Input from "../../Componentes/Input/Input";
import Label from "../../Componentes/Label/Label";
import P from "../../Componentes/P/P";
import Btn2 from "../../Componentes/Btn2/Btn2";
import S from "./SectionOne.module.css";


const SectionOne = () => {
  return (
    <div className={S.divFather}>
      <div className={S.divL}>
        <H4 text="Ajude o algorítimo a ser mais certeiro" />
        <P text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend. Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus." />
      </div>

      <div className={S.divR}>
        <div className={S.inputDiv}>
          <Label text="Seu nome:" />
          <Input />
        </div>

        <div>
          <Label text="E-mail" />
          <Input />
        </div>

        <div>
          <Label text="CPF:" />
          <Input />
        </div>
        
        <div>
            <div>
              <Label />
              <input type="radio" name="gender" id="masc"></input>
            </div>

            <div>
              <Label />
              <input type="radio" name="gender" id="fem"></input>
            </div>
            <Btn2 text="Enviar" />
          </div>

        <div></div>
      </div>
    </div>
  );
};

export default SectionOne;
