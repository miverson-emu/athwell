import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function FlatListBlock({color, contents, onPress}) {

	return (
		<TouchableOpacity
		onPress = { onPress }
		>
		<View
		style = { [styles.container, { backgroundColor: color } ] }> 
			{contents}
		</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create( {
	container: {
		aspectRatio: 1, 
		height: 200, /* FIX TO MOBILE DEVICE */ 

		justifyContent: "center", 
		alignContent: "center",
		margin: 10, 
	}
})