import stories from "./stories.json";
import { StoryCard } from "../StoryCard";
import styles from "./styles.module.scss";

export const StoryCardsArea = () => (
  <div className={styles.container}>
    <div className={styles.cards_container}>
      {stories.map(({ name, xp_points, image_url }, i) => (
        <StoryCard title={name} exp={xp_points} image={image_url} key={i} />
      ))}
    </div>
  </div>
);
