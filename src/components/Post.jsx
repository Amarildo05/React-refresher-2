import classes from "./Post.module.css";

const names = ["Amarildo", "Lido"];
const content = ["React refresher course", "React updated course"];

export default function Post() {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  const choseContent = Math.random() > 0.5 ? content[0] : content[1];

  return (
    <li className={classes.post}>
      <h1 className={classes.author}>{chosenName}</h1>
      <h1 className={classes.body}>{choseContent}</h1>
    </li>
  );
}
