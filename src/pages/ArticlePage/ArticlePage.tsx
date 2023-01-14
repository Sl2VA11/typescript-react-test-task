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
            className={styled.articlePage}
            style={{ backgroundImage: `url(${imageUrl})` }}
            key={id}
          >
            <Container>
              <div className={styled.articleWrapper}>
                <h1 className={styled.articleTitle}>{title}</h1>
                <p className={styled.articleText}>{summary}</p>
              </div>
              <Link to="/">
                <div className={styled.articleGoBackWrapper}>
                  <Arrow className={styled.articleGoBackIcon} />
                  <p className={styled.articleGoBackText}>Back to homepage</p>
                </div>
              </Link>
            </Container>
          </div>
        );
      })}
    </>
  );
};
