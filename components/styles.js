import { StyleSheet } from 'react-native';


export default styles = StyleSheet.create({
  container: {
    marginTop: 22,
    flex: 1,
    justifyContent: 'center',  
  },
  menu: {
    marginBottom:10
  },
  btnContainer: {
    // borderColor: 'black',
    // borderWidth: 1,
    padding: 10,
    backgroundColor: '#d5d5d5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  content: {
    marginLeft: 10,
    marginRight: 10,
  },

  predkoscSkrawania: {
    flexDirection: 'column'
  },

  fW: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  obrotyWynik: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
    padding: 20,
    borderRadius: 7,
  },
  fs: {
    fontSize: 20,
  },

    naglowekOtworow: {
      top: -13,
    },
    wartosciii: {
      padding: 15,
    },
    srodek: {
      flexDirection: 'row',
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    wLinii: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
    },
    outInput: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: 'dark',
      borderWidth: 2,
    },
    btnW: {
      width: 50,
    },
  
    btn: {
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 5,
    },
    btnText: {
      color: 'white',
    },
  
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: 100,
      marginLeft: 10, 
      textAlign: 'center',
    },
    select: {
      flex: 1, 
      justifyContent: 'center',
      backgroundColor: '#e5e5e5',
      marginLeft: 10,
      borderRadius: 10,
    },
    samSelectlect: {
      
      // width: '20%',
      // backgroundColor: 'grey',
    },

    superscript: {
      fontSize: 10,
      lineHeight: 10,
      top: -10,
    },
    subscript: {
      fontSize: 10,
      lineHeight: 20,
      bottom: -6,
    },
  });