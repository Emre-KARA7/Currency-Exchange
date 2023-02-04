import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Checkbox = () => {
  const [Check, setCheck] = useState(false); //checkbox
  return <BouncyCheckbox onPress={Check} />;
};

export default Checkbox;
