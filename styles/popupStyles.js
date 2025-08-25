import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  inlineMenu: {
    position: 'absolute',
    backgroundColor: '#E1E3E9',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    zIndex: 1000,
    elevation: 20, // Para Android
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  menuText: {
    fontSize: 14,
    color: 'rgba(28, 28, 30, 0.68)',
    fontFamily: 'Quicksand',
    marginLeft: 5,
  },
});
