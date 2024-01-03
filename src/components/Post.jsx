import classes from "./Post.module.css";

export default function Post(props) {
  return (
    <li className={classes.post}>
      <h1 className={classes.author}>{props.author}</h1>
      <h1 className={classes.body}>{props.body}</h1>
    </li>
  );
}
