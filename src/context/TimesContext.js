import { createContext, useEffect, useState } from "react";

import timeDados from "../mocks/times.json";

export const TimesContext = createContext();

export const TimesProvider = ({ children }) => {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    JSON.stringify(timeDados);
    setTimes(timeDados.times);
  }, [times]);

  return (
    <TimesContext.Provider value={{ times, setTimes }}>
      {children}
    </TimesContext.Provider>
  );
};
