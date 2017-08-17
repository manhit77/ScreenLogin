import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts, ApplicationStyles } from '../DevTheme/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    marginBottom: 0,
    // paddingTop: Metrics.section
  },
  scroll: {
       paddingTop:'25%',
    flex: 1,
    width: null,
        height: null,
     backgroundColor: 'rgba(0,0,0,.5)',
     
    //  paddingBottom: Metrics.baseMargin
  },
  backgroundImage:{
       flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
  },
 text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    },
    backgroundColor:{
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    rows:{
        
         flex:1,
        paddingTop: 10,
        alignItems: 'center',
        flexDirection:"column"
    },
    rowslogo:{
         justifyContent: 'center',
        alignItems: 'center',
        flex:3,
         paddingBottom:'20%',
      
    },
    rowsform:{
         flex:7,
        //   margin: 10
    },
    logo:{  
        height:80,
        width:180,
    },
    rowsinput:{
        alignItems: 'center',
         margin: 5
    },
    rowspass:{
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // flexDirection: 'row',
        // justifyContent: 'center',
        marginTop:'-5%',
        alignSelf: 'flex-end',  
         marginRight: '-6%',
    },
    rowstextwith:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '15%',
    },     
    rowsloginwith:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      
    },     
    input:{
        color: 'black',
        padding: '2%',
        backgroundColor:'rgba(244,244,248,.5)',
        width: '101%',
        borderRadius: 2,
        fontSize: 14,
        alignItems: 'center',
    },
     button: {
        margin: 10,
        width: '101%',
        padding: 12,
        alignItems: 'center',
        backgroundColor: '#56cc56',
        borderRadius: 2,
    },
    buttonfacebook: {
        margin: 13,
        width: '40%',
        padding: 12,
        alignItems: 'center',
        backgroundColor: '#3b5998',
        borderRadius: 2,
    },
     buttontwitter: {
        margin: 13,
        width: '40%',
        padding: 12,
        alignItems: 'center',
        backgroundColor: '#55acee',
        borderRadius: 2,
    },
    textpass:{
        fontSize:12,
        color:'#ffffff',
        padding:20,
        fontWeight: 'bold',
        alignSelf: 'flex-end',  
    },
     textsignupwith:{
        fontSize:10,
        color:'#ffffff',
        padding:1
    },
    texloginwith:{
        paddingLeft:3,
        color:'#ffffff'
    }
    });