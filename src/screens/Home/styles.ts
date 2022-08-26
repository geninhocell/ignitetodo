import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D0D0D',
    height: 173,
  },
  inputContainer: {
    paddingHorizontal: 24,
    position: 'relative',
    top: -27,
    height: 54,
    flexDirection: 'row',
    width: '100%',
    borderRadius: 6,
  },
  input: {
    flex: 1,
    marginRight: 4,
    backgroundColor: '#262626',
    borderRadius: 6,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22.4,
    color: '#F2F2F2',
    padding: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 54,
    width: 54,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
  },
  status: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  list: {
    marginTop: 20,
  },
});
