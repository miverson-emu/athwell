import { View, FlatList, StyleSheet, SafeAreaView, Text} from 'react-native'
import { Title } from 'react-native-paper'
import StudentSurveyListItem from './SurveyListItem'
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/

export default function HorizontalFlatList({ listTitle, data, renderItem }) {


	return (
		<SafeAreaView
		style = { styles.container }>
			<Title>{ listTitle }</Title>
			<FlatList
			data = { data }
			keyExtractor={ (item) => item.id}
			renderItem = { renderItem }
			horizontal= {true}
			contentContainerStyle = {{ 
			}}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		borderColor: 'white', 
		borderWidth: 5, 
		// backgroundColor: "green"
	}
})
