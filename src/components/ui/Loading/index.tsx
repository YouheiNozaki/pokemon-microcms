import styles from './loading.module.scss';

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <img src="/loading.svg" alt="メタモンの画像" />
      <p>読み込み中...</p>
    </div>
  );
};
