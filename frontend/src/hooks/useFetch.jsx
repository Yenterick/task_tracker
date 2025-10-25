import { useState, useCallback } from "react";

function useFetch(url = "") {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (endpoint = "", method = "GET", body = null) => {
    setLoading(true);
    setError(null);

    try {
      const options = {
        method: method.toUpperCase(),
        headers: { "Content-Type": "application/json" },
      };

      if (body && method !== "GET") {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(url + endpoint, options);

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || `HTTP ${response.status}`);

      setData(result);
      return result;
    } catch (error) {
      setError(error.message);
      return null;
    } finally {
      setLoading(false);
    }
  }, [url]);

  return { data, loading, error, request };
}

export default useFetch;
