import {Image, View} from 'react-native'
import Title from '../../assets/image.png'
import { StyleSheet } from 'react-native'

export function TopBar() {
    return(
      <View style={styles.toBarStyle}>
        <Image source={Title} style={styles.textTop}/>
      </View>
    )
}

export const styles = StyleSheet.create({
  toBarStyle: {
    flexDirection: 'row',
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor: '#1e1e1f',
    width: 410,
    height: 120,
    borderRadius: 20
  },
  textTop: {
    marginTop: 40,
    width:400,
    height: 150,
  }
}
)

