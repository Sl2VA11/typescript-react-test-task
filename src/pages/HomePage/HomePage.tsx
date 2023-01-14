import React, { useState } from "react";

import { ArticleCard } from "../../components/ArticleCard/ArticleCard";
import { Container } from "../../components/Container/Container";
import { Filter } from "../../components/Filter/Filter";
import styled from "./HomePage.module.scss";
export const HomePage: React.FC = () => {
  const [userText, setUserText] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserText(e.target.value);
  };

  return (
    <div className={styled.mainPage}>
      <Container>
        <Filter changeHandler={changeHandler} />
        <ArticleCard userText={userText} />
      </Container>
    </div>
  );
};
