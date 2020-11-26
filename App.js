import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from "./src/screens/SearchScreen"
import RestaurantDetail from "./src/screens/RestaurantDetail"

const navigator= createStackNavigator({
	Search:SearchScreen,
	Detail:RestaurantDetail
	},{
		intialRouteName:'Search',
		defaultNavigationOptions:{
			title:'Business Search'
		} 	
	}	
);      			

export default createAppContainer(navigator);