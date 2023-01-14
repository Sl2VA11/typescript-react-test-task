import React from "react";
import moment from "moment";
import Highlighter from "react-highlight-words";

import { ReactComponent as Calendar } from "../../images/icons/calendar.svg";
import { ReactComponent as Arrow } from "../../images/icons/arrow.svg";
import styled from "./ArticleCard.module.scss";
import { Link } from "react-router-dom";

interface ArticleItemData {
  id: number;
  imageUrl: string;
  publishedAt: string;
  summary: string;
  userText: string;
  title: string;
}
export const ArticleCardItem: React.FC<ArticleItemData> = (props) => {
  let newSummary = props.summary.slice(0, 100);

  return (
    <li className={styled.articleItem} key={props.id}>
      <div className={styled.articleWrapper}>
        <img
          src={props.imageUrl}
          alt="articleImage"
          width={400}
          height={217}
          className={styled.articleImage}
        />
        <div className={styled.articleDataWrapper}>
          <div className={styled.articleData}>
            <Calendar className={styled.articleCalendarIcon} />
            <p className={styled.articleDataValue}>
              {moment(props.publishedAt).format("MMMM Do, YYYY")}
            </p>
          </div>

          <p className={styled.articleTitle}>
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={[props.userText]}
              autoEscape={true}
              textToHighlight={props.title}
            />
          </p>

          <p className={styled.articleAfterTitle}>
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={[props.userText]}
              autoEscape={true}
              textToHighlight={
                props.summary.length > 100 ? newSummary : props.summary
              }
            />
            ...
          </p>

          <Link to={"/artical/" + props.id}>
            <div className={styled.articleReadMoreWrapper}>
              <p className={styled.articleReadMore}>Read More</p>
              <Arrow className={styled.articleReadMoreArrow} />
            </div>
          </Link>
        </div>
      </div>
    </li>
  );
};
