import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts, ApplicationStyles } from '../DevTheme/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    marginBottom: 0,
    // paddingTop: Metrics.section
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
        backgroundColor: 'rgba(0,33,0,0)',
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
        paddingTop: 0,
        alignItems: 'center',
        flexDirection:"column"
    },
    rowslogo:{
         justifyContent: 'center',
        alignItems: 'center',
        flex:5,
      
    },
    rowsform:{
         flex:5,
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
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:-15,
    },
    rowstextwith:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '10%',
    },     
    rowsloginwith:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      
    },     
    input:{
        color: 'black',
        padding: 20,
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
        fontSize:11,
        color:'#ffffff',
        padding:20
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