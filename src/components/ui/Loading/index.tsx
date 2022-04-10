import styles from './loading.module.scss';

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <p>読み込み中</p>
      <img src="/loading.svg" alt="メタモンの画像" />
    </div>
  );
};
