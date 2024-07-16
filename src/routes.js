import { BrowserRouter, Route, Routes } from "react-router-dom";

import { VideosProvider } from "context/VideosContext";

import PaginaInicial from "pages/PaginaInicial";
import NovoVideo from "pages/NovoVideo";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";

import styles from "./routes.module.css";
import { TimesProvider } from "context/TimesContext";

function AppRouter() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Cabecalho />

        <VideosProvider>
          <TimesProvider>
            <Routes>
              <Route path="/" element={<PaginaInicial />} />
              <Route path="/novovideo" element={<NovoVideo />} />
            </Routes>
          </TimesProvider>
        </VideosProvider>

        <Rodape />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
