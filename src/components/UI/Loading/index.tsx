import "./index.css";
import LoadingIcon from "./IconLoading";

function Loading() {
  return (
    <main className="loader">
      <div className="loaderMiniContainer">
        <LoadingIcon />
        <div className="barContainer">
          <span className="bar"></span>
          <span className="bar bar2"></span>
        </div>
      </div>
    </main>
  );
}

export default Loading;
