const { createContext } = require("react");

const GlobalContext = createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
});

export default GlobalContext;
