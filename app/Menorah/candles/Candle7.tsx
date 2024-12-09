import { observer } from "mobx-react-lite";
import menorahState from "../Menorah.state";
import { useState } from "react";

const Candle7 = observer(() => {
  const [isHovered, setIsHovered] = useState(false);
  const candle = menorahState.candles[6];
  return (
    <g
      style={{
        transform: `translate(0, ${candle.isVisible ? 0 : -1000}px)`,
        transition: "transform 1s ease"
      }}
      onClick={() => {
        candle.setIsLit(!candle.isLit);
      }}
    >
      <g style={candle.flameStyles}>
        <path
          fill="#FEFEDE"
          d="M1132.9,317.2l9.5-23.3c1.6-4,7.3-4,8.9,0l9.5,23.3c1.8,4.5,0.8,9.7-2.7,13.1l-2.7,2.7      c-4.7,4.7-12.4,4.7-17.2,0l-2.7-2.7C1132.1,326.9,1131.1,321.7,1132.9,317.2z"
        />
        <path
          fill="#F0CF85"
          d="M1147.5,332.2c1.1-0.1,2.2-0.7,3-1.5l3.1-3.1c1.4-1.4,1.8-3.5,1.1-5.3l-6.3-15.5c-0.5-1.3-2.4-1.3-3,0      l-6.3,15.5c-0.7,1.8-0.3,3.9,1.1,5.3l3.2,3.2C1144.4,331.9,1145.9,332.4,1147.5,332.2z"
        />
      </g>

      <g
        style={{
          cursor: "pointer",
          pointerEvents: "all",
          stroke: isHovered ? "white" : "none",
          strokeWidth: isHovered ? 3 : 0
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <path
          fill="#9AC5E3"
          d="M1131.3,342.3h31c5,0,9,4,9,9v131.8h-49.1V351.3C1122.3,346.3,1126.3,342.3,1131.3,342.3z"
        />
      </g>
      <path
        fill="#504B42"
        d="M1146.8,324.4L1146.8,324.4c1,0,1.8,0.8,1.8,1.8v16h-3.7v-16C1145,325.3,1145.8,324.4,1146.8,324.4z"
      />
      <g style={candle.coronaStyles}>
        <circle opacity="0.1" fill="#FEFEDE" cx="1146.8" cy="319" r="115.7" />
        <circle opacity="0.1" fill="#FEFEDE" cx="1148.7" cy="319" r="79.7" />
        <circle opacity="0.1" fill="#FEFEDE" cx="1148.7" cy="319" r="47.2" />
      </g>
    </g>
  );
});

export default Candle7;