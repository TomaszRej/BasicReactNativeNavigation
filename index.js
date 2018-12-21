// /** @format */
//
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
//
// AppRegistry.registerComponent(appName, () => App);

import {Navigation} from 'react-native-navigation';
import Welcome from './screens/Welcome';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

Navigation.registerComponent('Welcome', () => Welcome);
Navigation.registerComponent('SignIn', () => SignIn);
Navigation.registerComponent('SignUp', () => SignUp);

// Navigation.events().registerAppLaunchedListener(() => {
//     Navigation.setRoot({
//         root: {
//             stack: {
//                 id: 'AppStack',
//                 children: [
//                     {
//                         component: {
//                             name: 'Welcome',
//                             options:{
//                                 topBar: {
//                                     title:
//                                         {
//                                             text: 'Welcome'
//                                         }
//                                 }
//                             }
//                         },
//
//                     }
//
//                 ]
//             }
//         }
//     })
// });
Navigation.events().registerAppLaunchedListener(()=>{
    Navigation.setRoot({
        root: {
            bottomTabs: {
                children: [{
                    stack: {
                        children: [{
                            component: {
                                name: 'SignIn',
                                passProps: {
                                    text: 'This is tab 1'
                                }
                            }
                        }],
                        options: {
                            bottomTab: {
                                text: 'Tab 1',
                                icon: require('./images/one.png'),
                                testID: 'FIRST_TAB_BAR_BUTTON'
                            }
                        }
                    }
                },
                    {
                        component: {
                            name: 'SignUp',
                            passProps: {
                                text: 'This is tab 2'
                            },
                            options: {
                                bottomTab: {
                                    text: 'Tab 2',
                                    icon: require('./images/two.png'),
                                    testID: 'SECOND_TAB_BAR_BUTTON'
                                }
                            }
                        }
                    }]
            }
        }
    });
});

