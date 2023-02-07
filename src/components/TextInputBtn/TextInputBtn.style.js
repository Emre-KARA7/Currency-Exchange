import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
  },
  label: {
    margin: 5,
    marginBottom: 2,
    fontSize: 18,
    fontWeight: '500',
  },
  innerContainer: {
    borderWidth: 1,
    borderColor: '#757575',
    borderRadius: 8,
    flexDirection: 'row',
  },
  input: {
    fontSize: 16,
    color: '#212121',
    flex: 6,
  },
  buttonView: {
    flex: 1,
  },
  container_btn: {
    borderWidth: 2,
    borderColor: '#4CAF50',
    height: 50,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text_btn: {
    fontSize: 16,
  },
});
