import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import CheckLogin from './CheckLogin';
import Login from './Login';
import MovieHome from './MovieHome';
import MovieDetail from './MovieDetail';

const LoginNavigator = createStackNavigator({
  Login,
});

const MovieNavigator = createStackNavigator({
  MovieHome,
  MovieDetail,
});

const AppNavigator = createSwitchNavigator(
  {
    CheckLogin,
    LoginNavigator,
    MovieNavigator,
  },
  {
    initialRouteName: 'CheckLogin',
  },
);

export default createAppContainer(AppNavigator);
