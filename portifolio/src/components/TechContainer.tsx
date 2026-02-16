import {View, Text, Image} from 'react-native'
import { StyleSheet } from 'react-native'
import types from '../../assets/typescript.png'
import reactn from '../../assets/physics.png'
import js from '../../assets/js.png'
import csharp from '../../assets/c-sharp.png'
import py from '../../assets/python.png'
import mySql from '../../assets/mysql-database.png'
import iot from '../../assets/iot.png'

export function TechContainer() {
    return(
      <View style={styles.toBarStyle}>
        <Text style={styles.textTop}>Tecnologias</Text>
        <View style={styles.iconsContainer}>
            <Image source={types} />
            <Image source={js} style={{marginStart: 10}}/>
            <Image source={reactn} style={{marginStart: 10}}/>
            <Image source={csharp} style={{marginStart: 10}}/>
            <Image source={py} style={{marginStart: 10, marginTop:25}}/>
            <Image source={mySql} style={{marginStart: 10, marginTop:25}}/>
            <Image source={iot} style={{marginStart: 10, marginTop:25}}/>
        </View>
      </View>
    )
}

export const styles = StyleSheet.create({
  toBarStyle: {
    marginTop: 70,
    flexDirection: 'column',
    justifyContent: "flex-start", 
    alignItems: "center",
    backgroundColor: '#1e1e1f',
    width: 390,
    height: 250,
    borderRadius: 20,
  },
  textTop: {
    marginTop: 10,
    color: 'white',
    fontSize:22,
    fontWeight: 'bold',
  },
  iconsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: 350,
  }
}
)

