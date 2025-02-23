import { useRef, useEffect, useState, useLayoutEffect } from "react";
import Card from "./Card";
import "./animation.css"
import { data_repeted} from "../../data";

export default function AnimationPage() {
  const ref = useRef(null);
  const [containerWidth, setWidth] = useState(100 + "%");
  const [animationState, setPlay] = useState("paused");
  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth + "px");
      setPlay("running");
    }
  }, []);
  const renderCards = data_repeted.map((el, index) => {
    return <Card key={index} cardName={[el.url,el.name]} type="animation-sec" />;
  });


  return (
    <div className="App">
      <div
        className="d-flex"
        ref={ref}
        style={{
          width: `${containerWidth}`,
          animationPlayState: animationState
        }}
      >
        {renderCards}
     
      </div>
    </div>
  );
}