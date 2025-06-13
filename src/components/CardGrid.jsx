import Card from "./Card";
import styles from "./CardGrid.module.css";

export default function CardGrid() {
  const cards = [
    {title: "My text",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum arcu eget ipsum suscipit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed finibus, tellus eu vestibulum gravida, elit neque fringilla ligula, in molestie enim neque in est. Aenean id arcu ac ipsum malesuada gravida. Maecenas consequat nulla blandit quam luctus, sed cursus mauris efficitur. Praesent suscipit mattis arcu in ultricies. Ut cursus massa lobortis, posuere ipsum quis, bibendum nisi.",},
    {title: "My text",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum arcu eget ipsum suscipit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed finibus, tellus eu vestibulum gravida, elit neque fringilla ligula, in molestie enim neque in est. Aenean id arcu ac ipsum malesuada gravida. Maecenas consequat nulla blandit quam luctus, sed cursus mauris efficitur. Praesent suscipit mattis arcu in ultricies. Ut cursus massa lobortis, posuere ipsum quis, bibendum nisi.",},
    {title: "My text",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum arcu eget ipsum suscipit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed finibus, tellus eu vestibulum gravida, elit neque fringilla ligula, in molestie enim neque in est. Aenean id arcu ac ipsum malesuada gravida. Maecenas consequat nulla blandit quam luctus, sed cursus mauris efficitur. Praesent suscipit mattis arcu in ultricies. Ut cursus massa lobortis, posuere ipsum quis, bibendum nisi.",},
    {title: "My text",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum arcu eget ipsum suscipit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed finibus, tellus eu vestibulum gravida, elit neque fringilla ligula, in molestie enim neque in est. Aenean id arcu ac ipsum malesuada gravida. Maecenas consequat nulla blandit quam luctus, sed cursus mauris efficitur. Praesent suscipit mattis arcu in ultricies. Ut cursus massa lobortis, posuere ipsum quis, bibendum nisi.",},
    {title: "My text",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum arcu eget ipsum suscipit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed finibus, tellus eu vestibulum gravida, elit neque fringilla ligula, in molestie enim neque in est. Aenean id arcu ac ipsum malesuada gravida. Maecenas consequat nulla blandit quam luctus, sed cursus mauris efficitur. Praesent suscipit mattis arcu in ultricies. Ut cursus massa lobortis, posuere ipsum quis, bibendum nisi.",},
  ];

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title + " " + index}
            img={`https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/200/200`}>{card.content}
          </Card>
        ))}
      </div>
    </div>
  );
}
