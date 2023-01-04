import { chaper_data } from "../../utilities/type";

type props = {
  data: chaper_data;
};

export default function chapter_table(props: props) {
  return (
    <div>
      <h1>{"第" + props.data.chaper + "章:" + props.data.title}</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">題名</th>
            <th scope="col">アニメ</th>
            <th scope="col">なろう</th>
          </tr>
        </thead>
        <tbody>
          {props.data.stories?.map((story) => {
            return (
              <tr key={story.index}>
                <td>{story.index}</td>
                <td>{story.title}</td>
                <td>{story.anime}</td>
                <td>
                  <a href={story.narou_url}>リンク</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
