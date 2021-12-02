import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          setData(data);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 2000);
  }, []);

  return [data, isLoading];
}

export default useFetch;
