import ICIcon from 'react-native-vector-icons/Ionicons'
import { StyleSheet } from 'react-native'

export function backArrowIcon({color}) {
	return( <ICIcon name = "ios-chevron-back" size = "30" color = { color } style = { styles.arrow }/>)
}
export function nextArrowIcon({color}) {
	return( <ICIcon name = "ios-chevron-forward" size = "30" color = { color } style = { styles.arrow }/>)
}
export function upArrowIcon({color}) {
	return( <ICIcon name = "ios-chevron-up" size = "30" color = { color } style = { styles.arrow }/>)
}
export function downArrowIcon({color}) {
	return( <ICIcon name = "ios-chevron-down" size = "30" color = { color } style = { styles.arrow }/>)
}


const styles = StyleSheet.create({
	arrow: {
		fontSize: 30
	}
});