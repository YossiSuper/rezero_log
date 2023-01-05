import { GetStaticProps } from "next";
import Head from "next/head";
import Menu from "../components/cards/menu";
import styles from "../styles/Home.module.css";
import fs from "fs";
import Chaper_table from "../components/cards/chaper_table";
import { chaper_data } from "../utilities/type";
import React from "react";


type props = {
  data:chaper_data[]
}
const list = (props:props) => {
  const [spoiler,setSpoiler] = React.useState(false);
  return (
    <div>
      <Head>
        <title>Rezero_Log</title>
      </Head>
      <main className={styles.main}>
        <button onClick={()=>{
          setSpoiler(!spoiler)
        }}>ネタバレを表示/非表示</button>
        <Chaper_table data={props.data[0]} spoiler={spoiler}></Chaper_table>
        <Menu></Menu>
      </main>
    </div>
  );

  
};

export const getStaticProps:GetStaticProps = async (ctx) => {
    var data:chaper_data[] = []
    data.push(JSON.parse(fs.readFileSync("public/data/1.json", 'utf-8')))
    
    return {
        props:{data}
    }
}

export default list;
