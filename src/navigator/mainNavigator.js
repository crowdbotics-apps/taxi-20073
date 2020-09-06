import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile98216Navigator from '../features/UserProfile98216/navigator';
import Tutorial98215Navigator from '../features/Tutorial98215/navigator';
import NotificationList98187Navigator from '../features/NotificationList98187/navigator';
import Settings98186Navigator from '../features/Settings98186/navigator';
import Settings98178Navigator from '../features/Settings98178/navigator';
import UserProfile98176Navigator from '../features/UserProfile98176/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile98216: { screen: UserProfile98216Navigator },
Tutorial98215: { screen: Tutorial98215Navigator },
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
