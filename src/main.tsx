import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BaseLayoutProvider } from "admin-panel-layout";
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BaseLayoutProvider>
            <App />
        </BaseLayoutProvider>
    </React.StrictMode>
);
