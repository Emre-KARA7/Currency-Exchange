import {Dimensions} from 'react-native';

function percentage(percent) {
  const windowWidth =
    Dimensions.get('window').width > 500 ? 500 : Dimensions.get('window').width;
  return (windowWidth * percent) / 100;
}

export default percentage;
