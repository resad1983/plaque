import { useEffect, useRef } from "react";

export default function PlaquePreview({
  storeName = "店名",
  plaqueText = "生意興隆",
  imageSrc = "",
}) {
  const canvasRef = useRef(null);

  // 畫圖與文字
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !imageSrc) return;

    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    const image = new Image();
    image.src = imageSrc;

    image.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imageWidth = image.width;
      const imageHeight = image.height;

      // 圖片置中位置
      const imgX = (canvasWidth - imageWidth) / 2;
      const imgY = (canvasHeight - imageHeight) / 2;

      // 畫匾額底圖
      ctx.drawImage(image, imgX, imgY, imageWidth, imageHeight);

      // 店家名稱
      ctx.font = "bold 20px sans-serif";
      ctx.fillStyle = "#ff66cc";
      ctx.textAlign = "center";
      ctx.fillText(storeName, canvasWidth / 2, 40);

      // 中間文字（稍微靠中）
      ctx.font = "bold 18px sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.fillText(plaqueText, canvasWidth / 2, imgY + imageHeight / 2 + 6);
    };
  }, [storeName, plaqueText, imageSrc]);

  // 下載為 JPG
  const downloadImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = `${storeName}_匾額.jpg`;
    link.href = canvas.toDataURL("image/jpeg", 0.95);
    link.click();
  };

  return (
    <div>
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
          margin: "0 auto 1rem",
        }}
      />
      <button
        onClick={downloadImage}
        style={{
          width: "100%",
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "0.6rem",
          border: "none",
          borderRadius: "8px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        📥 下載匾額（JPG）
      </button>
    </div>
  );
}