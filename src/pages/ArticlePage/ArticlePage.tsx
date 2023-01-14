import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../api/getArticleById";
import { Container } from "../../components/Container/Container";
import { ReactComponent as Arrow } from "../../images/icons/arrow.svg";
import styled from "./ArticlePage.module.scss";
import { ArticleItems } from "../../types/articleItems";

export const ArticlePage: React.FC<{}> = () => {
  const [articalDetails, setArticleDetails] = useState<ArticleItems[]>([]);

  const { id } = useParams();

  useEffect(() => {
    getArticleById(Number(id)).then((data) => setArticleDetails([data]));
  }, [id]);

  return (
    <>
      {articalDetails.map(({ title, summary, imageUrl, id }) => {
        return (
          <div
            className={styled.ArticlePage}
            style={{ backgroundImage: `url(${imageUrl})` }}
            key={id}
          >
            <Container>
              <div className={styled.ArticleWrapper}>
                <h1 className={styled.ArticleTitle}>{title}</h1>
                <p className={styled.ArticleText}>{summary}</p>
              </div>
              <Link to="/">
                <div className={styled.ArticleGoBackWrapper}>
                  <Arrow className={styled.ArticleGoBackIcon} />
                  <p className={styled.ArticleGoBackText}>Back to homepage</p>
                </div>
              </Link>
            </Container>
          </div>
        );
      })}
    </>
  );
};
