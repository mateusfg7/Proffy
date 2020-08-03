import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className='teacher-item'>
      <header>
        <img
          src='https://avatars1.githubusercontent.com/u/40613276?v=4'
          alt='Mateus Felipe'
        />
        <div>
          <strong>Mateus Felipe</strong>
          <span>Blockchain</span>
        </div>
      </header>

      <p>
        Entusiasta de tecnologias descentralizadas.
        <br />
        <br />
        Adora espalhar ideias de descentralisação de tudo que vier na frente,
        principalmente por meio da tecnologia!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>BTC 0.016</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcon} alt='Whatsapp' />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
