import styles from './error.module.scss';

type Props = {
  text: string;
};

export const Error: React.VFC<Props> = ({ text }) => {
  return (
    <div className={styles.error}>
      <p>{text}</p>
      <img src="/metamon.png" alt="メタモンの画像" />
    </div>
  );
};
