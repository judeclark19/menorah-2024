import { useState } from "react";
import menorahState from "../Menorah.state";
import { observer } from "mobx-react-lite";

const Candle4 = observer(() => {
  const [isHovered, setIsHovered] = useState(false);
  const candle = menorahState.candles[4];
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
          d="M765.4,317.2l-9.5-23.3c-1.6-4-7.3-4-8.9,0l-9.5,23.3c-1.8,4.5-0.8,9.7,2.7,13.1l2.7,2.7      c4.7,4.7,12.4,4.7,17.2,0l2.7-2.7C766.2,326.9,767.3,321.7,765.4,317.2z"
        />
        <path
          fill="#F0CF85"
          d="M750.9,332.2c-1.1-0.1-2.2-0.7-3-1.5l-3.1-3.1c-1.4-1.4-1.8-3.5-1.1-5.3l6.3-15.5c0.5-1.3,2.4-1.3,3,0      l6.3,15.5c0.7,1.8,0.3,3.9-1.1,5.3l-3.2,3.2C753.9,331.9,752.4,332.4,750.9,332.2z"
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
          d="M767,342.3h-31c-5,0-9,4-9,9v131.8H776V351.3C776,346.3,772,342.3,767,342.3z"
        />
      </g>
      <path
        fill="#504B42"
        d="M751.5,324.4L751.5,324.4c-1,0-1.8,0.8-1.8,1.8v16h3.7v-16C753.3,325.3,752.5,324.4,751.5,324.4z"
      />

      <g style={candle.coronaStyles}>
        <circle opacity="0.1" fill="#FEFEDE" cx="751.5" cy="319" r="115.7" />
        <circle opacity="0.1" fill="#FEFEDE" cx="749.7" cy="319" r="79.7" />
        <circle opacity="0.1" fill="#FEFEDE" cx="749.7" cy="319" r="47.2" />
      </g>
    </g>
  );
});

export default Candle4;
