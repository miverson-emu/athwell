import { View, FlatList, StyleSheet } from "react-native"
import { Divider } from "react-native-paper"

export default function FlatListMenu({ data, renderItem }) {

	return (
	<View
	style = { styles.container }>
		<FlatList
		
		data = { data }
		keyExtractor = { (item) => item.id }
		renderItem = { renderItem }
		ItemSeparatorComponent = { () => <Divider/>}
		/>
	</View> 
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white", 
		// border: "3px solid black", 
	}

})

