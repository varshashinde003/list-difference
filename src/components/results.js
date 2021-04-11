import Card from "./card";
import ListWrapper from "./list-wrapper";

const Results = ({ list }) => {
  return Object.keys(list).map((item, idx) => {
    if (list[item].length) {
      return (
        <Card title={item} col_width={3} key={idx} count={list[item].length}>
          <ListWrapper list={list[item]} />
        </Card>
      );
    } else {
      return null;
    }
  });
};

export default Results;
