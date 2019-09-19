import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

//import {createBottomTabNavigator} from 'react-navigation-tabs';

//import {createDrawerNavigator} from 'react-navigation-drawer';

import Main from './pages/Main/index';
import User from './pages/User/index';
import FavoriteRepository from './pages/FavoriteRepository/index';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
      FavoriteRepository,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
      },
    },
  ),
);

export default Routes;
