import { View, Text, StyleSheet } from 'react-native';
import FlatListBlock from './FlatListBlock';

export function CoachSurveyListItem({ item }) {

	return (
		<FlatListBlock
		color = { item.color }

		onPress = { () => { console.log(item.id + " pressed!")}}
		
		contents = {
			<View
			style = { styles.textContainer }>			
				<Text 
				numberOfLines={1}
				adjustsFontSizeToFit
				
				style = { [ styles.text, styles.title ] }>{ item.title }</Text>

			
				<Text 
				style = { styles.text }>Assigned To: { item.teamName } </Text>
				<Text 
				style = { styles.text }>Assigned By: { item.creator } </Text>
				<Text 
				style = { styles.text }>{ item.date }</Text>

				<View>
				<Text style = { [ styles.text, { color: "red", fontWeight: "bold", backgroundColor: "transparent", borderRadius: "10px", alignSelf: "center", padding: "3px", borderColor: "red", borderWidth: "2px" }] }>{ "* " + item.responses + " New Responses"}</Text>
				</View>

			</View>

		}/>
	)
}
export function StudentSurveyListItem({ item }) {

	return (
		<FlatListBlock
		color = { item.color }

		onPress = { () => { console.log(item.id + " pressed!")}}
		
		contents = {
			<View
			style = { styles.textContainer }>			
				<Text 
				numberOfLines={1}
				adjustsFontSizeToFit
				style = { [ styles.text, styles.title ] }>{ item.title }</Text>
			
				<Text 
				adjustsFontSizeToFit
				style = { styles.text }>Assigned By: { item.creator } </Text>
				<Text 
				style = { styles.text }>{ item.date }</Text>

			</View>

		}/>
	)
}

const styles = StyleSheet.create( {

	textContainer: {
		justifyContent: "center",
		padding: 0 
	}, 
	text: {
		color: "black", 
		fontSize: 9, 
		textAlign: "center", 
		marginBottom: 5

	}, 
	title: {
		fontSize: 20, 
		fontWeight: "bold",
		
	}
})