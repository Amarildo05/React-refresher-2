import classes from "./Post.module.css";

export default function Post() {
  return (
    <li className={classes.post}>
      <h1 className={classes.author}></h1>
      <h1 className={classes.body}></h1>
    </li>
  );
}
