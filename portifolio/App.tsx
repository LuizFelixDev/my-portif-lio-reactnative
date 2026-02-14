import { NavigationContainer } from '@react-navigation/native';
import { TabsRoutes } from './src/routes/bottomtab.routes';

export default function App() {
  return (
    <NavigationContainer>
      <TabsRoutes/>
    </NavigationContainer>
  );
}


