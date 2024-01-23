import { Link } from "react-router-dom";
import classes from "./Post.module.css";

export default function Post(props) {
  return (
    <li className={classes.post}>
      <Link to={props.id}>
        <h1 className={classes.author}>{props.author}</h1>
        <h1 className={classes.body}>{props.body}</h1>
      </Link>
    </li>
  );
}
