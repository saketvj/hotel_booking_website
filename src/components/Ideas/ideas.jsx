import "./ideas.scss";

const Ideas = ({ data }) => {
  return (
    <div className="ideas">
      <div className="Heading">
        {data[0]}
        <div className="items">
          {data.map((item, i) => {
            return <p key={i}>{data[i + 1]}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Ideas;
