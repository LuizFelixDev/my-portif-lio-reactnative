import Home from "../screens/Home/Home";
import More from "../screens/More/More";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export function TabsRoutes(){
    return(
        <Tab.Navigator screenOptions={{ headerShown: false,
            tabBarStyle: {backgroundColor: '#111111'}
        }}>
            <Tab.Screen name="Home" component={Home} 
              options={{tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name='home'
                  color={'#4651eb'}
                  size={28}
                />
              )}}
            />
            <Tab.Screen name="More" component={More}
              options={{tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name='window-open'
                  color={'#4651eb'}
                  size={28}
                />
              )}}
            />
        </Tab.Navigator> 
    )
}

