import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { blue, info, lightBlue, lightGray, primary, quaternary, secondary, tertiary, white } from '../constants/colors.js';

import getStyles from './CustomTabBar.styles.js';

const CustomTabBar = (props) => {
    /**
     * @param routes = [{ key: 'holdings', title: 'Holdings' }]
     * @param sceneMap = { holdings: HoldingComponent}
     */

    const { routes=[], scene, styleProps } = props;

    const [index, setIndex] = useState(0);
    const [sceneMap, setSceneMap] = useState(null)

    const styles = StyleSheet.create(getStyles());
    const { width, height } = useWindowDimensions();

    useEffect(() => {
        if (routes[0] && scene) {
            setSceneMap(scene);
        }
    }, [routes, scene])

    const renderScene = SceneMap(sceneMap);

    const renderTabBar = props => (
        <TabBar
            {...props}
            activeColor={white}
            inactiveColor={white}
            indicatorStyle={{backgroundColor: quaternary, height: 4}}
            renderLabel={({ route, focused, color }) => (
                <Text
                    style={{
                        color,
                        fontSize: 16,
                        fontWeight: focused ? 'bold' : 'normal',
                        letterSpacing: 1,
                        width: width / routes.length,
                        textAlign: 'center'
                    }}>
                    {route.title}
                </Text>
            )}
            style={{ backgroundColor: primary, fontWeight: 'bold' }}
        />
    );

    return routes[0] && sceneMap && (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{ width }}
        />
    );
};
export default CustomTabBar;
