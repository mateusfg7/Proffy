import React from "react";

import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";

import { Header, TopBarContainer, Content } from "./styles";

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <Header>
      <TopBarContainer>
        <Link to='/'>
          <img src={backIcon} alt='Voltar' />
        </Link>
        <img src={logoImg} alt='Proffy' />
      </TopBarContainer>

      <Content>
        <strong>{props.title}</strong>

        {props.description && <p>{props.description}</p>}

        {props.children}
      </Content>
    </Header>
  );
};

export default PageHeader;
