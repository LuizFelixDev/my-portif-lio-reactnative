import { View, Text, TouchableOpacity, Linking} from "react-native";
import { StyleSheet } from "react-native";

export function Buttons(){
    return(
        <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={()=> Linking.openURL('https://www.linkedin.com/in/luizfelixdev/')}>
                <View style={styles.buttonStyle}>
                    <Text style={styles.textButton}>Linkedin</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Linking.openURL('https://github.com/LuizFelixDev')}>
                <View style={styles.buttonStyle}>
                    <Text style={styles.textButton}>Github</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Linking.openURL('https://www.instagram.com/luiz_felix07?igsh=ZWk0N3AyMmZtczZk')}>
                <View style={styles.buttonStyle}>
                    <Text style={styles.textButton}>Instagram</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
      marginTop: 10,
      width: 250,
      height:40,
      backgroundColor: '#0d24a7'
    },
    textButton: {
        fontSize: 20,
        color: 'white',
    },
    buttonsContainer:{
      marginTop: 40,
      flexDirection: "column",
      width: 350,
      height:300,
      justifyContent:"flex-start",
      alignItems: "center",
      borderRadius:20
    },
})

