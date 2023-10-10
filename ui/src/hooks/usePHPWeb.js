import { useEffect, useState } from "react";

export default function usePHPWeb() {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(true);

  const execute = (code) => {
    if (!loading) {
      setOutput("");
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": 1,
        },
        body: JSON.stringify({
          code,
          input: "",
          language: "php",
        }),
      };
      fetch("http://localhost:5000/api/v1/compiler/execute", options)
        .then((resp) => resp.json())
        .then((rest) => {
          setOutput(rest.output);
        });
    }
  };

  const clear = () => setOutput("");

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/ping")
      .then((resp) => resp.json())
      .then(() => setLoading(false));
  }, []);

  return { clear, execute, output, loading };
}
