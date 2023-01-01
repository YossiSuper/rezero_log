
import styles from '../../styles/Home.module.css'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
const menu = () => {
    return (
        <div className={styles.grid}>
          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              使う <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              リゼロの小説やアニメの関係を一目で確認できます。
            </p>
          </a>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              概要 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              このサイトの概要とマイルストーンを掲載しています。
            </p>
          </a>

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

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              クレジット <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              このサイトの作成に協力してくださった方を紹介しています。
            </p>
          </a>
        </div>
    );
}




export default menu;