import {useState} from 'react';
import axios from 'axios';

function useHttps() {
  //
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = async (url, data) => {
    try {
      setLoading(true);
      const resData = await axios.post(url, data);
      setData(resData);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const get = async url => {
    try {
      setLoading(true);
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return {data, loading, error, post, get};
}

export default useHttps;
