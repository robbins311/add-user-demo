import styles from "./Card.module.css";

const Card = (props) => {
  // 래퍼로 감싸려면 props.children 써야됨(리액트 내장함수)
  return (
    <div className={`${props.className} ${styles.card}`}>{props.children}</div>
  );
};

export default Card;
