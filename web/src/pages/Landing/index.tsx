import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import api from "../../services/api";

// import "./styles.css";
import {
  PageLanding,
  LogoContainer,
  ButtonsContainer,
  TotalConnections,
} from "./styles";

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((response) => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  return (
    <PageLanding>
      <div id='page-landing-content' className='container'>
        <LogoContainer>
          <img src={logoImg} alt='Proffy' />
          <h2>Sua plataforma de estudos online</h2>
        </LogoContainer>

        <img
          src={landingImg}
          alt='Plataforma de estudos'
          className='hero-image'
        />

        <ButtonsContainer>
          <Link to='/study' className='study'>
            <img src={studyIcon} alt='Estudar' />
            Estudar
          </Link>

          <Link to='/give-classes' className='give-classes'>
            <img src={giveClassesIcon} alt='Estudar' />
            Dar Aulas
          </Link>
        </ButtonsContainer>

        <TotalConnections>
          Total de {totalConnections} conexões{" "}
          <img src={purpleHeartIcon} alt='Coração roxo' />
        </TotalConnections>
      </div>
    </PageLanding>
  );
}

export default Landing;
