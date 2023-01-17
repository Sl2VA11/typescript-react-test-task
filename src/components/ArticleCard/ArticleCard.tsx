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
  const { userText } = props;
  
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
  }, [userText]);

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
        {userText
          ? articleData
              .sort((a, b) => {
                let priorityA = 0;
                let priorityB = 0;
                const currentSummaryA =
                  a.summary.length > 100
                    ? a.summary.slice(0, 100)
                    : a.summary;
                const currentSummaryB =
                  b.summary.length > 100 ? b.summary.slice(0, 100) : b.summary;
                
                const userTextLowerCase = userText.toLowerCase();

                if (a.title.toLowerCase().includes(userTextLowerCase)) {
                  priorityA = 0;
                } else if (currentSummaryA.toLowerCase().includes(userTextLowerCase)) {
                  priorityA = 1;
                }

                if (b.title.toLowerCase().includes(userTextLowerCase)) {
                  priorityB = 0;
                } else if (currentSummaryB.toLowerCase().includes(userTextLowerCase)) {
                  priorityB = 1;
                }

                return priorityA - priorityB;
              })
            .map(({ id, imageUrl, summary, title, publishedAt }) => {
                 const currentSummary =
                   summary.length > 100 ? summary.slice(0, 100) : summary;
              
                const result = priorityText(title, currentSummary, userText);

                if (result === 0) {
                  return (
                    <ArticleCardItem
                      id={id}
                      key={id}
                      imageUrl={imageUrl}
                      summary={currentSummary}
                      title={title}
                      publishedAt={publishedAt}
                      userText={userText}
                    />
                  );
                } else if (result === 1) {
                  return (
                    <ArticleCardItem
                      id={id}
                      key={id}
                      imageUrl={imageUrl}
                      summary={currentSummary}
                      title={title}
                      publishedAt={publishedAt}
                      userText={userText}
                    />
                  );
                }
                return null;
              })
          : articleData.map(({ id, imageUrl, summary, title, publishedAt }) => {
            const currentSummary =
              summary.length > 100 ? summary.slice(0, 100) : summary;
              return (
                <ArticleCardItem
                  id={id}
                  key={id}
                  imageUrl={imageUrl}
                  summary={currentSummary}
                  title={title}
                  publishedAt={publishedAt}
                  userText={userText}
                />
              );
            })}
      </ul>
    </>
  );
};
