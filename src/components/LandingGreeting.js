import { View, Text } from 'react-native'
import { Title } from 'react-native-paper'
export default function LandingGreeting({ user, body }) {

	return (
		<View style = {{  padding: "5px", }}>
				<Title> Hello { user }!</Title>
				<Text style = {{marginLeft: "10px"}}> { body } </Text>
			</View>
	)
}