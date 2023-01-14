import styled from './ResultValue.module.scss'
interface ResultValueNumber{
   value: number
}
export const ResultValue: React.FC<ResultValueNumber> = (props) => {
   
   return (
     <div className={styled.resultValueWrapper}>
       <p className={styled.resultValue}>Results: {props.value}</p>
     </div>
   );
}