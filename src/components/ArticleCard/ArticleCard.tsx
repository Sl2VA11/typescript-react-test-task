import { useEffect, useState, useRef } from "react";
import { Snackbar } from "@mui/material";

import { priorityText } from "../../helpers/priorityText";
import { getArticle } from "../../api/getArticle";
import { ResultValue } from "../ResultValue/ResultValue";
import styled from "./ArticleCard.module.scss";
import { ArticleCardItem } from "./ArticleCardItem";
import { ArticleItems } from "../../types/articleItems";
import { UserText } from "../../types/userText";

export const ArticleCard: React.FC<UserText> = (props) => {
  const [articleData, setArticleData] = useState<ArticleItems[]>([]);
  const listRef = useRef<HTMLUListElement>(null);
  const [resultValue, setResultValue] = useState<number>(0);

  useEffect(() => {
    getArticle()
      .then((res) => {
        if (res.length > 0) {
          setResultValue(res.length);
          setArticleData(res);
        }
      })

      .catch((err) => {
        console.warn("Getting problem", err);
      });
  }, []);

  useEffect(() => {
    const quantityItems = listRef.current?.childNodes.length;

    setResultValue(Number(quantityItems));
  }, [props.userText]);

  return (
    <>
      <ResultValue value={resultValue} />
      {resultValue === 0 && (
        <Snackbar
          open={true}
          message="Article not found, enter something else"
        />
      )}
      <ul className={styled.articleList} ref={listRef}>
        {props.userText
          ? articleData
              .sort((a, b) => {
                let priorityA = 0;
                let priorityB = 0;
                const userTextLowerCase = props.userText.toLowerCase();

                if (a.title.toLowerCase().includes(userTextLowerCase)) {
                  priorityA = 0;
                } else if (
                  a.summary.toLowerCase().includes(userTextLowerCase)
                ) {
                  priorityA = 1;
                }

                if (b.title.toLowerCase().includes(userTextLowerCase)) {
                  priorityB = 0;
                } else if (
                  b.summary.toLowerCase().includes(userTextLowerCase)
                ) {
                  priorityB = 1;
                }

                return priorityA - priorityB;
              })
              .map(({ id, imageUrl, summary, title, publishedAt }) => {
                const result = priorityText(title, summary, props.userText);

                if (result === 0) {
                  return (
                    <ArticleCardItem
                      id={id}
                      key={id}
                      imageUrl={imageUrl}
                      summary={summary}
                      title={title}
                      publishedAt={publishedAt}
                      userText={props.userText}
                    />
                  );
                } else if (result === 1) {
                  return (
                    <ArticleCardItem
                      id={id}
                      key={id}
                      imageUrl={imageUrl}
                      summary={summary}
                      title={title}
                      publishedAt={publishedAt}
                      userText={props.userText}
                    />
                  );
                }
                return null
              })
          : articleData.map(({ id, imageUrl, summary, title, publishedAt }) => {
              return (
                <ArticleCardItem
                  id={id}
                  key={id}
                  imageUrl={imageUrl}
                  summary={summary}
                  title={title}
                  publishedAt={publishedAt}
                  userText={props.userText}
                />
              );
            })}
      </ul>
    </>
  );
};
