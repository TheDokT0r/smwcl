import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const getData = async () => {
      const response = await window.ipcRenderer.invoke("rest", {
        a: "getsectioninfo",
        s: "smwhacks"
      });
      console.log(response);
    };

    getData();
  }, []);

  return <div>Hello, World!</div>;
}

export default App;
