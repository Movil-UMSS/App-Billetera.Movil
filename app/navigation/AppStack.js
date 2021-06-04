import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({navigation}) => {
<Stack.Navigator>
    <Stack.Screen
        name = "Home"
        component = {HomeScreen}
    />
</Stack.Navigator>
}
const AppStack = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={FeedStack}
                options={({route}) => ({
                    tabBarLabel: 'Home',
                })}
            />
        </Tab.Navigator>
    );
};

export default AppStack;