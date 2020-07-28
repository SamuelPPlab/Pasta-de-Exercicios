import React from "react";
import "./button.css";

const Button = ({ className, children, disabled, onClick }) => ( //button é declarado como uma arrow function
  //em vez de uma classe, e recebe como parametro sua classe, 
  <button
    onClick={onClick} //event listener que recebe uma função para executar quando o botão é clicado
    className={`button-text ${className}`} //classes para uso do css. Recebe uma fixa, e uma variavel que é passada quando
    //o elemento é chamado
    disabled={disabled} //se for true, o botão ficará inativo
  >
    {children} {/*é o que fica dentro da tag html entre a abertura e o fechamento*/}
  </button>
);

export default Button;