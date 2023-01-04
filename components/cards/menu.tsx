import styles from "../../styles/Home.module.css";
import { Inter } from "@next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
const menu = () => {
  return (
    <div className={styles.grid}>
      <Link
        href="list/"
        className={styles.card}
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          使う <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          リゼロの小説やアニメの関係を一目で確認できます。
        </p>
      </Link>

      <Link
        href="/"
        className={styles.card}
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          概要 <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          このサイトの概要とマイルストーンを掲載しています。
        </p>
      </Link>

      <a
        href="https://github.com/yossisuper/rezero_log"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          協力する <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          このサイトのソースコードはgithubにて公開されています。プルリクエスト募集！
        </p>
      </a>

      <Link
        href="/"
        className={styles.card}
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          クレジット <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          このサイトの作成に協力してくださった方を紹介しています。
        </p>
      </Link>
    </div>
  );
};

export default menu;
