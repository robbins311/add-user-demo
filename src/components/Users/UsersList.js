import React from "react";

import styles from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.data.map((users, idx) => {
          return (
            <li key={idx}>
              {users.name}({users.age})
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
