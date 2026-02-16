import {View, Text} from 'react-native'
import { StyleSheet } from 'react-native'


export function ProjectContainer() {
    return(
      <View style={styles.projectContainer}>
        <Text style={styles.title}>Projetos</Text>
      </View>
    )
}

export const styles = StyleSheet.create({
  projectContainer: {
    marginTop: 30,
    flexDirection: 'column',
    justifyContent: "flex-start", 
    alignItems: "center",
    backgroundColor: '#1e1e1f',
    width: 390,
    height: 320,
    borderRadius: 20
  },
  title: {
    marginTop: 10,
    color: 'white',
    fontSize:22,
    fontWeight: 'bold',
  },
});