import {useState, useEffect} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';

// function usePost() {
//   //
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const post = async (url, data) => {
//     try {
//       setLoading(true);
//       const resData = await axios.post(url, data);
//       setData(resData.data);
//       setLoading(false);
//     } catch (err) {
//       setError(err);
//       setLoading(false);
//     }
//   };

//   return {data, loading, error, post};
// }

// export default usePost;
