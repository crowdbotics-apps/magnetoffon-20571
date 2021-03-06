import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList105596Navigator from '../features/ArticleList105596/navigator';
import ArticleList105595Navigator from '../features/ArticleList105595/navigator';
import ArticleList105594Navigator from '../features/ArticleList105594/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList105596: { screen: ArticleList105596Navigator },
ArticleList105595: { screen: ArticleList105595Navigator },
ArticleList105594: { screen: ArticleList105594Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
