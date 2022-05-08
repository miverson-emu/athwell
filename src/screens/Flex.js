import { View, StyleSheet } from "react-native"
import { List } from "react-native-paper"

export default function Flex() {
	return (
		<View style = {[styles.c]}>
			<View style = {[ { height: 20 } ]}/>
			<View style = {[styles.v]}/>
			<View style = {[styles.v]}/>
		</View>

	)
	
}
const styles = StyleSheet.create({
	fl_ccs: {
	}, 
	v: {
		flex: 1, 
		borderWidth: 3, 
		borderColor: "green"
		
	}, 
	c: {
		flex: 1, 
		borderWidth: 3, 
		borderColor: "red"

	}, 
	header: {
		backgroundColor: "#f1f1f1"
	}
})