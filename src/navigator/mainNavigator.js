import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList98187Navigator from '../features/NotificationList98187/navigator';
import Settings98186Navigator from '../features/Settings98186/navigator';
import Settings98178Navigator from '../features/Settings98178/navigator';
import UserProfile98176Navigator from '../features/UserProfile98176/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList98187: { screen: NotificationList98187Navigator },
Settings98186: { screen: Settings98186Navigator },
Settings98178: { screen: Settings98178Navigator },
UserProfile98176: { screen: UserProfile98176Navigator },

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
