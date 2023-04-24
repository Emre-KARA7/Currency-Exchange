import {useEffect} from 'react';
import TouchID from 'react-native-touch-id';

export function bio(val,set) {
    
    useEffect(() => {
      if (val) {
        const optionalConfigObject = {
          unifiedErrors: false, // use unified error messages (default false)
          passcodeFallback: false, // if true is passed, itwill allow isSupported to return an error if the device is not enrolled in touch id/face id etc. Otherwise, it will just tell you what method is supported, even if the user is not enrolled.  (default false)
        };
        TouchID.isSupported(optionalConfigObject)
          .then(biometryType => {
            TouchID.authenticate('Login')
              .then(succes => {
                dispatch(changeAuthState(!authVal));
              })
              .catch(err => {
                set(false);
              });
          })
          .catch(err => {
            console.log('desteklemio' + err);
          });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [val]); //biometric auth
  }