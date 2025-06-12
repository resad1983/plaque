import { useState } from "react";
import "./App.css";
import PlaquePreview from "./components/PlaquePreview";

function App() {
  const [storeName, setStoreName] = useState("台中老店");
  const [plaqueText, setPlaqueText] = useState("生意興隆");

  return (
    <div className="app-container">
      <div className="card">
        <h1>🎉 贈送匾額儀式</h1>

        <label>店家名稱</label>
        <input
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
          placeholder="輸入店家名稱"
        />

        <label>匾額文字</label>
        <input
          value={plaqueText}
          onChange={(e) => setPlaqueText(e.target.value)}
          placeholder="輸入匾額文字"
        />

        <div className="preview-wrapper">
          <PlaquePreview storeName={storeName} plaqueText={plaqueText} />
        </div>

        <button onClick={() => alert("🎁 匾額贈送成功！")}>🎀 贈送匾額</button>
      </div>
    </div>
  );
}

export default App;