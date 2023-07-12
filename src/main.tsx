import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import CounterProvider from "./context/CounterContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <CounterProvider>
        <App />
    </CounterProvider>
);
