import React from "react";
import styled from "./Filter.module.scss";
import { ReactComponent as SearchIcon } from "../../images/icons/vector.svg";
interface IProps {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Filter: React.FC<IProps> = (props) => {
  return (
    <div className={styled.filterWrapper}>
      <form className={styled.filterForm}>
        <label className={styled.filterLabel}>Filter by keywords</label>
        <input
          type="text"
          className={styled.filterInput}
          onChange={(e) => props.changeHandler(e)}
        />
        <SearchIcon className={styled.filterSearchIcon} />
      </form>

    </div>
  );
};
