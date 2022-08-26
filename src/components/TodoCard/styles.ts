import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginBottom: 8,
    padding: 12,
    backgroundColor: '#262626',
    borderRadius: 8,
    height: 64,
  },
  title: {
    fontWeight: '400',
    fontSize: 14,
    color: '#F2F2F2',
    width: '75%',
    textAlign: 'center',
  },
  button: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
