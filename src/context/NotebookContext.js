import { createContext, useState } from "react";

export const NotebookContext = createContext({});

function NotebookContextProvider({ children }) {
  const [mode, setMode] = useState("light");

  return (
    <NotebookContext.Provider
      value={{
        owner: "Dwight",
        mode: mode,
        toggleMode: () => {
          if (mode === "light") {
            setMode("dark");
          } else {
            setMode("light");
          }
        },
      }}
    >
      {children}
    </NotebookContext.Provider>
  );
}

export default NotebookContextProvider;
