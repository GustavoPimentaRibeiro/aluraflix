import { Link, useLocation } from "react-router-dom";
import styles from "./CabecalhoLink.module.css";

function CabecalhoLink({ children, to, ...props }) {
  const localizacao = useLocation();

  return (
    <Link
      to={to}
      className={`${styles.link} ${
        localizacao.pathname === to && styles.ativo
      }`}
      {...props}
    >
      {children}
    </Link>
  );
}

export default CabecalhoLink;
