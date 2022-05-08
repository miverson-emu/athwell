import { FlatList, View, Text } from "react-native";
import { List, Badge, Divider } from "react-native-paper"

export default function TeamListingScreen() {
	const teamData = [...Array(5).keys()].map((item) => {
		return {
			"id": item, 
			"teamName":  "Team " + (item + 1), 
			"newResponses": Math.floor(Math.random() * 3), 
		}
	})

	const RenderItem = ({ item }) => {
		return(
			<List.Item
			title = {item.teamName}
			right = {() => item.newResponses > 0 ? <Badge size = {30} style = {{backgroundColor: "red", fontWeight: "bold", fontFamily: "sans-serif"}}>{item.newResponses}</Badge>: <View/>}
			/>
		)
	}

	return (
		<View>

		<FlatList
		data = { teamData }
		renderItem = { RenderItem }
		ItemSeparatorComponent = { () => <Divider/>}
		/>
		<Divider/>
		<List.Item
		title = {"Create New Team"}
		titleStyle = {{textAlign: "center", fontWeight: "bold"}}
		style = {{backgroundColor: ""}}
		/>
		<Divider/>

		</View>

	)

}