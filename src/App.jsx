import { useState } from "react";
import PlaquePreview from "./components/PlaquePreview";

// 匾額圖（6 張）
import plaque1 from "./assets/plaques/plaque1.png";
import plaque2 from "./assets/plaques/plaque2.png";
import plaque3 from "./assets/plaques/plaque3.png";
import plaque4 from "./assets/plaques/plaque4.png";
import plaque5 from "./assets/plaques/plaque5.png";
import plaque6 from "./assets/plaques/plaque6.png";

import "./App.css";

function App() {
  const [storeName, setStoreName] = useState("好運小吃");
  const [plaqueText, setPlaqueText] = useState("生意興隆");
  const [selectedPlaque, setSelectedPlaque] = useState(plaque1);

  const plaqueImages = [plaque1, plaque2, plaque3, plaque4, plaque5, plaque6];
  const isMobileInApp = /Line|FB|Instagram/i.test(navigator.userAgent);

  return (
    <div className="app-container">
      <div className="content-box">
        <h1 className="title">🎁 贈送匾額儀式</h1>

        <div className="form-group">
          <label className="field-label">贈送店家</label>
          <input
            type="text"
            placeholder="店家名稱"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            className="text-input"
          />

          <label className="field-label">匾額文字</label>
          <input
            type="text"
            placeholder="請輸入匾額文字"
            value={plaqueText}
            onChange={(e) => setPlaqueText(e.target.value)}
            className="text-input"
          />
        </div>

        <div className="plaque-grid">
          {plaqueImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`plaque${index + 1}`}
              onClick={() => setSelectedPlaque(img)}
              className={`plaque-thumb ${selectedPlaque === img ? "active" : ""}`}
            />
          ))}
        </div>

        <PlaquePreview
          storeName={storeName}
          plaqueText={plaqueText}
          imageSrc={selectedPlaque}
        />

        {isMobileInApp && (
          <p className="download-warning">
            ⚠️ LINE / IG 內建瀏覽器不支援下載，請改用手機瀏覽器開啟
          </p>
        )}
      </div>
    </div>
  );
}

export default App;