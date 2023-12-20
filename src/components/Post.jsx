const names = ["Amarildo", "Lido"];

export default function Post() {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <h1>{chosenName}</h1>
      <h1>React refresher course</h1>
    </div>
  );
}
