import React, { useState, useEffect, useCallback, useRef } from "react";

export default function Dude() {
  const blinkRef = useRef(null);
  const xEyeTimeout = useRef(null);
  const lastMousePos = useRef({ x: null, y: null, t: null });
  const [isBlinking, setIsBlinking] = useState(false);
  const [isXEyes, setIsXEyes] = useState(false);

  const [positions, setPositions] = useState({
    head: { x: 20, y: 18 },
    leftEye: { x: 16, y: 19 },
    rightEye: { x: 24, y: 19 },
  });

  const handleMove = useCallback((clientX, clientY) => {
    const svg = document.getElementById("dude-svg");
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const svgCenterX = rect.left + rect.width / 2;
    const svgCenterY = rect.top + rect.height / 2;
    const offsetX = clientX - svgCenterX;
    const offsetY = clientY - svgCenterY;

    const now = Date.now();
    if (lastMousePos.current.x !== null && lastMousePos.current.y !== null) {
      const dx = clientX - lastMousePos.current.x;
      const dy = clientY - lastMousePos.current.y;
      const dt = now - lastMousePos.current.t;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const speed = dt > 0 ? dist / dt : 0;

      if (speed >= 15) {
        setIsXEyes((prev) => {
          if (!prev) {
            clearTimeout(xEyeTimeout.current);
            xEyeTimeout.current = setTimeout(() => setIsXEyes(false), 500);
          }
          return true;
        });
      }
    }
    lastMousePos.current = { x: clientX, y: clientY, t: now };

    const maxHeadOffset = 1.5;
    const headDistance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
    const clampedHeadDistance = Math.min(headDistance, maxHeadOffset);
    const headAngle = Math.atan2(offsetY, offsetX);
    const headMoveX = clampedHeadDistance * Math.cos(headAngle);
    const headMoveY = clampedHeadDistance * Math.sin(headAngle);

    const maxEyesOffset = 4;
    const clampedEyesDistance = Math.min(headDistance, maxEyesOffset);
    const eyeMoveX = clampedEyesDistance * Math.cos(headAngle);
    const eyeMoveY = clampedEyesDistance * Math.sin(headAngle);

    setPositions({
      head: { x: 20 + headMoveX, y: 18 + headMoveY },
      leftEye: { x: 16 + eyeMoveX, y: 19 + eyeMoveY },
      rightEye: { x: 24 + eyeMoveX, y: 19 + eyeMoveY },
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => handleMove(event.clientX, event.clientY);
    const handleTouchMove = (event) => {
      if (event.touches.length > 0) {
        handleMove(event.touches[0].clientX, event.touches[0].clientY);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      clearTimeout(xEyeTimeout.current);
    };
  }, [handleMove]);

  useEffect(() => {
    const scheduleBlink = () => {
      const nextBlink = Math.random() * 5000 + 5000;
      blinkRef.current = setTimeout(() => {
        setIsBlinking(true);
        blinkRef.current = setTimeout(() => setIsBlinking(false), 200);
        scheduleBlink();
      }, nextBlink);
    };
    scheduleBlink();
    return () => {
      if (blinkRef.current) clearTimeout(blinkRef.current);
    };
  }, []);

  return (
    <div style={{ width: 40, height: 40, margin: "auto" }}>
      <svg id="dude-svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <defs>
          <clipPath id="logoClip">
            <circle cx="20" cy="20" r="20" />
          </clipPath>
        </defs>
        <g clipPath="url(#logoClip)">
          <circle cx="20" cy="20" r="20" fill="#e3e3e3" />
          <ellipse
            cx="20"
            cy="38"
            rx="12"
            ry="10"
            fill="#6ca0dc"
            stroke="#2e5984"
            strokeWidth="1"
          />
          <circle
            cx={positions.head.x}
            cy={positions.head.y}
            r="12"
            fill="#f9d7b7"
            stroke="#d2b48c"
            strokeWidth="1.5"
          />
          {isXEyes ? (
            <>
              <g>
                <line
                  x1={positions.leftEye.x - 2}
                  y1={positions.leftEye.y - 3}
                  x2={positions.leftEye.x + 2}
                  y2={positions.leftEye.y + 3}
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1={positions.leftEye.x + 2}
                  y1={positions.leftEye.y - 3}
                  x2={positions.leftEye.x - 2}
                  y2={positions.leftEye.y + 3}
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
              <g>
                <line
                  x1={positions.rightEye.x - 2}
                  y1={positions.rightEye.y - 3}
                  x2={positions.rightEye.x + 2}
                  y2={positions.rightEye.y + 3}
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1={positions.rightEye.x + 2}
                  y1={positions.rightEye.y - 3}
                  x2={positions.rightEye.x - 2}
                  y2={positions.rightEye.y + 3}
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
            </>
          ) : (
            <>
              <ellipse
                cx={positions.leftEye.x}
                cy={positions.leftEye.y}
                rx="2.6"
                ry={isBlinking ? "0" : "5.2"}
                fill="black"
                style={{ transition: "ry 0.15s" }}
              />
              <ellipse
                cx={positions.rightEye.x}
                cy={positions.rightEye.y}
                rx="2.6"
                ry={isBlinking ? "0" : "5.2"}
                fill="black"
                style={{ transition: "ry 0.15s" }}
              />
            </>
          )}
        </g>
      </svg>
    </div>
  );
}
