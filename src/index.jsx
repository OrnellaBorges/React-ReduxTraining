import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // on a besoin de ça pour transmettre la donnée
import { store } from "./slices/store"; // impporter le store
import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
    <Provider store={store}>
        <App />
    </Provider>
);
