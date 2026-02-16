import {View} from "react-native";
import { styles } from "./moreStyles";
import { TopBar } from "../../components/TopBar";
import{TechContainer} from '../../components/TechContainer'


export default function More(){
    return(
        <View style={styles.container}>
          <TopBar/>
          <TechContainer/>
        </View>
    )
}