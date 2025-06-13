import { useState } from "react";
import PlaquePreview from "./components/PlaquePreview";
import "./App.css";

// 匾額圖（共 8 張）
import plaque1 from "./assets/plaques/plaque1.png";
import plaque2 from "./assets/plaques/plaque2.png";
import plaque3 from "./assets/plaques/plaque3.png";
import plaque4 from "./assets/plaques/plaque4.png";
import plaque5 from "./assets/plaques/plaque5.png";
import plaque6 from "./assets/plaques/plaque6.png";

function App() {
  const [storeName, setStoreName] = useState("好運小吃");
  const [plaqueText, setPlaqueText] = useState("生意興隆");
  const [selectedPlaque, setSelectedPlaque] = useState(plaque1);

  const plaqueImages = [plaque1, plaque2, plaque3, plaque4, plaque5, plaque6];

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw", // ✅ 加這一行讓整個容器撐滿螢幕寬度
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "2rem 1rem",
        backgroundColor: "#111",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#fff" }}>
          🎁 贈送匾額儀式
        </h1>

        {/* 表單輸入 */}
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            placeholder="請輸入店家名稱"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            style={{
              width: "100%",
              padding: "0.6rem",
              marginBottom: "0.5rem",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="text"
            placeholder="請輸入匾額文字"
            value={plaqueText}
            onChange={(e) => setPlaqueText(e.target.value)}
            style={{
              width: "100%",
              padding: "0.6rem",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* 匾額圖切換按鈕區（支援 RWD） */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(60px, 1fr))",
            gap: "8px",
            marginBottom: "1.5rem",
          }}
        >
          {plaqueImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`plaque${index + 1}`}
              onClick={() => setSelectedPlaque(img)}
              style={{
                width: "100%",
                height: "40px",
                objectFit: "cover",
                border: selectedPlaque === img ? "3px solid #ff66cc" : "1px solid #888",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        {/* 匾額預覽 + 下載按鈕 */}
        <PlaquePreview
          storeName={storeName}
          plaqueText={plaqueText}
          imageSrc={selectedPlaque}
        />
      </div>
    </div>
  );
}

export default App;