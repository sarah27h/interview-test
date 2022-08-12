import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // pass endpoint 'https://randomuser.me/api' to fetch
  // it will return a promise once it is resolved, will use a then method
  // we get a response object which is not the data
  // so we need to parse respone into js object this async a take time to do it will return a promise
  // use then method that will fire once the parse is complete
  // finally we can get our data
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        //   ?????? why
        //  he said that because he hit the end page
        if (result === undefined) return;
        // setData(JSON.stringify(data.results[0], null, 2));
        const newData = [...data, ...result.results];
        setData(newData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      });

    //   I got this warning as it need to add data in array dependencies
    // but I can't figure how to solve
    //   React Hook useEffect has a missing dependency: 'data'.
    // Either include it or remove the dependency array react-hooks/exhaustive-deps
  }, [url]);

  return { data, error };
}
