import "./progress.css";

const ProgressBar = (props) => {
  const { completed } = props;

  return (
    <div className="containerStyles">
      <div className="fillerStyles" style={{ width: `${completed}%` }}>
        <span className="labelStyles">{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
