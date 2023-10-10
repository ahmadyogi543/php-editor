import { useEffect, useRef, useState } from "react";
import { PhpWeb } from "php-wasm/PhpWeb";

export default function usePHPWeb() {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(true);
  const instance = useRef();

  const execute = (code) => {
    if (!loading) {
      setOutput("");
      instance.current.run(code);
      instance.current.refresh();
    }
  };

  const clear = () => setOutput("");

  useEffect(() => {
    const php = new PhpWeb();

    const outputListener = (output) => {
      setOutput((prevOutput) =>
        [...prevOutput, output.detail.join("")].join("")
      );
    };
    const readyListener = () => {
      setLoading(() => {
        instance.current = php;
        return false;
      });
    };

    php.addEventListener("output", outputListener);
    php.addEventListener("ready", readyListener);
  }, []);

  return { clear, execute, output, loading };
}
