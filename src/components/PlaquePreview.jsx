import { useEffect, useRef } from "react";
import plaque1 from "../assets/plaques/plaque1.png"; // 匾額圖：320x160 PNG

export default function PlaquePreview({ storeName = "店名", plaqueText = "生意興隆" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    const image = new Image();
    image.src = plaque1;

    image.onload = () => {
      // 清空畫布
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 畫布 & 圖片尺寸
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imageWidth = image.width;
      const imageHeight = image.height;

      // 將匾額圖片置中（Y 軸也置中）
      const imgX = (canvasWidth - imageWidth) / 2;
      const imgY = (canvasHeight - imageHeight) / 2;

      // 畫匾額底圖
      ctx.drawImage(image, imgX, imgY, imageWidth, imageHeight);

      // 畫上方店名
      ctx.font = "bold 20px sans-serif";
      ctx.fillStyle = "#ff66cc";
      ctx.textAlign = "center";
      ctx.fillText(storeName, canvasWidth / 2, 40); // 固定在畫布上方

      // 畫中間匾額文字（圖中央偏下一點）
      ctx.font = "bold 18px sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.fillText(plaqueText, canvasWidth / 2, imgY + imageHeight / 2 + 6);
    };
  }, [storeName, plaqueText]);

  return (
    <canvas
      ref={canvasRef}
      width={320}
      height={240}
      style={{
        maxWidth: "100%",
        height: "auto",
        borderRadius: "12px",
        border: "2px solid #ccc",
        backgroundColor: "#000",
        display: "block",
        margin: "0 auto",
      }}
    />
  );
}