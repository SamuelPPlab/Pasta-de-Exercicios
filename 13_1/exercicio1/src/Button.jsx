import React from 'react';
const Button = (props) => {
  const { showComponent, isDisable, content } = props;
  return (
    <button
      type="button"
      disabled={isDisable}// recebe a chave de mesmo nome do estado do app
      onClick={() => showComponent()}//chama a função recebida como prop
    >
      {content} {/*mostra a prop content dentro do botão */}
    </button>
  )
}
export default Button;