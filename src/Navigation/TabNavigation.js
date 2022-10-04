import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import Flexbox from '../screens/Flexbox';
import LoggedIn from '../screens/LoggedIn';
import Update from '../screens/Update';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Flex Box" component={Flexbox} />
      <Tab.Screen name="Account" component={LoggedIn} />
      <Tab.Screen name="Update" component={Update} />
    </Tab.Navigator>
  );
};
export default TabNavigation;
