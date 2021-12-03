import React, { Component } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import About from './AboutComponent';
import Project from './ProjectsComponent';
import Contact from './ContactComponent';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import SafeAreaView from 'react-native-safe-area-view';

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About}
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='info-circle'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
    
);

const ProjectNavigator = createStackNavigator(
    {
        About: { screen: Project}
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='info-circle'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
    
);

const ContactNavigator = createStackNavigator(
    {
        About: { screen: Contact}
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='info-circle'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
    
);


const MainNavigator = createDrawerNavigator(
    {
        About: { 
            screen: AboutNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                   <Icon 
                    name='sign-in'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                    /> 
                )
            }
        },
        Project: { 
            screen: ProjectNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                   <Icon 
                    name='sign-in'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                    /> 
                )
            }
        },
        Contact: { 
            screen: ContactNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                   <Icon 
                    name='sign-in'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                    /> 
                )
            }
        }
    }
)
const Appnavigator = createAppContainer(MainNavigator)

class Main extends Component {
    render() {
        return(
            <View>
                <Appnavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#5637DD',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerheaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default Main;