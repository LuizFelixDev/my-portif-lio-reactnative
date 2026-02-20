import { View, Text} from "react-native";
import { styles } from "./homeStyles";
import Logo from '../../components/Logo'
import { Buttons } from "../../components/Buttons";

export default function Home(){
    return(
        <View style={styles.container}>
            <Logo/>
            
            <Text style={styles.paragraph1}>
                My name is Luiz Henrique, and I am a 
                Web and Mobile Developer currently pursuing a degree in 
                Information Systems at UFRN.
            </Text>

            <Text style={styles.paragraph}>
                I have over two years of hands-on experience building functional, 
                well-structured applications focused on solving real-world problems.
            </Text>

            <Text style={styles.paragraph}>
                I am committed to continuous improvement, refining my technical skills 
                and delivering efficient solutions. I value responsibility, clean code, 
                and collaborative teamwork.
            </Text>

            <Text style={styles.paragraph}>
                My goal is to grow as a developer while adding value through 
                productivity, organization, and strong communication.
            </Text>

            <Buttons />
        </View>
    )
}