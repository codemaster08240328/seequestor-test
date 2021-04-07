import { useState, useEffect } from 'react';

const useFetch = (fn, dependencies) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fn()
      .then(res => {
        setIsLoading(false);
        setData(res);
      })
      .catch(e => {
        setIsLoading(false);
        setIsError(true);
      })
  }, [...dependencies]);

  if (isLoading) return { type: 'loading' };
  if (isError) return { type: 'error' };

  return {
    type: 'success',
    data,
  }
}

export default useFetch;
