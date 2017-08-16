import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity,TextInput } from 'react-native'
import { Images } from './DevTheme'
import ButtonBox from './ButtonBox'
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';
// Screens
import SignIn from './SignIn'
import styles from './Styles/SignUpScreenStyle'

class BackgroundImage extends React.Component {

    render() {
        return (
            
            <Image source={Images.bglogin} style={styles.backgroundImage} >
                 {this.props.children}
                </Image>
        )
    }
}


class SignUp extends React.Component {
    openSignIn = () => {
    this.props.navigation.navigate('SignIn')
  }
 LG(){
     return(
       <View style={styles.backgroundColor}>
         <View style={styles.rows}>   
         
            <View style={styles.rowslogo}>
                <Image source={Images.logoLogin}
                  style={styles.logo}>
                
                 </Image>
            </View>   
            <View style={styles.rowsform} >
                <View style={styles.rowsinput}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => this.setState({text})}
                                    value={"First Name"}
                            />
                        </View> 
                        <View style={styles.rowsinput}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => this.setState({text})}
                                    value={"Last Name"}
                            />
                        </View> 
                    <View style={styles.rowsinput}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => this.setState({text})}
                                    value={"Username"}
                            />
                        </View> 
                    <View style={styles.rowsinput}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => this.setState({text})}
                                    value={"Password"}
                            />
                    </View>
                    
                    <View  style={styles.rowsinput}>
                        <View style={styles.button}>
                        <Text style={{ color: 'white',fontWeight: 'bold',}} >SIGN UP</Text>
                        </View>
                    </View>  
                    <View style={styles.rowspass}>
                         <TouchableOpacity  onPress={this.openSignIp}  >
                            <Text style={styles.textpass}>Already Registered?</Text>
                            </TouchableOpacity>
                    </View>  
                    <View style={styles.rowstextwith}>
                        
                        <Text style={styles.textsignupwith}>──────────   OR SIGNIN WITH    ──────────</Text>
                    </View>  
                    <View style={styles.rowsloginwith}>
                            <View  style={styles.buttontwitter}>
                                    <Text style={styles.texloginwith}>  <Icon name="twitter" size={15} color="#ffffff" />  Twitter</Text>
                            </View> 
                            <View  style={styles.buttonfacebook}>
                                    <Text style={styles.texloginwith}> <Icon name="facebook" padding={10} size={15} color="#ffffff" />  Facebook</Text>
                            </View> 
                    </View>          
            </View>

         </View>    
         </View>
     )
 }
       
  render () {
    return (
        <BackgroundImage>
            {this.LG()}
            </BackgroundImage>
       
    )
  }
}

export default StackNavigator({
  //  SignIn: {screen: SignIn},
  SignUp: {screen: SignUp},
   
   }, {
  cardStyle: {
    opacity: 1,
    backgroundColor: '#3e243f'
  },
  initialRouteName: 'SignUp',
  headerMode: 'none',
  // Keeping this here for future when we can make
  navigationOptions: {
    header: {
      left: (
        <TouchableOpacity onPress={() => window.alert('pop')} ><Image source={Images.closeButton} style={{marginHorizontal: 10}} /></TouchableOpacity>
      ),
      style: {
        backgroundColor: '#3e243f'
      }
    }
  }
})
