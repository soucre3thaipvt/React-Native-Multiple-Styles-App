import {createStackNavigator} from '@react-navigation/stack';
import {createCompatNavigatorFactory} from '@react-navigation/compat';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SplashScreen from '../splash_screen/SplashScreen';
import MultipleStylesApp from '../multiple_styles_app';
import ChartWithRNSkia , {DrawingsRNSkia} from '../chart_with_rn_skia';

export enum ScreenName {
  SPLASH = 'SplashScreen',
  MULTIPLESTYLESAPP = 'MultipleStylesApp',
  CHARTWITHRNSKIA = 'ChartWithRNSkia',
  DRAWINGSRNSKIA = 'DrawingsRNSkia',
}
const AppNavigator = createCompatNavigatorFactory(createStackNavigator)(
  {
    SplashScreen: {screen: SplashScreen},
    MultipleStylesApp : {screen : MultipleStylesApp},
    ChartWithRNSkia : {screen : ChartWithRNSkia},
    DrawingsRNSkia : {screen : DrawingsRNSkia}

  },
  {
    headerMode: 'none',
    initialRouteName: ScreenName.SPLASH,
  },
);

/**********************************************************************************************************************************
 *
 * Implement switch navigator
 *
 **********************************************************************************************************************************/

const switchNavigator = createSwitchNavigator(
  {
    AppNavigator: AppNavigator,
  },
  {
    initialRouteName: 'AppNavigator',
  },
);

const AppContainer = createAppContainer(switchNavigator);
export default AppContainer;
