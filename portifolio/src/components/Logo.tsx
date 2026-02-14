import { StyleSheet } from "react-native";
import {View, Text, Image} from 'react-native'
import perfil from '../../assets/170638825.png'

export default function Logo(){
    return(
        <View style={styles.perfilContainer}>
            <Image source={perfil} style={styles.perfil}/>
            <Text style={styles.mainTitle}>
                Hello, I'm Luiz Henrique!{"\n"} 
                {' '}I'm software developer
            </Text>
        </View>
    )

}


export const styles = StyleSheet.create({
  perfilContainer:{
    backgroundColor: '#2b2c2c',
    width: 350,
    height:300,
    marginTop:80,
    justifyContent:"center",
    alignItems: "center",
    borderRadius:20
  },
  mainTitle: {
    marginTop:20,
    fontSize:28,
    fontWeight: 'bold',
    color: '#f4f8ff',
  },
  perfil: {
    marginStart: 10,
    alignSelf:"center",
    width: 180,
    height: 180,
    borderRadius: 200
  },

});