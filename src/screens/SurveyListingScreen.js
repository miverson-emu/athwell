import { FlatList, View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { List, Badge, Divider } from "react-native-paper"
import CollapseableFlatList from "../components/CollapseableFlatLIst";
export default function SurveyListingScreen({ hasDrafts }) {


	const surveys = [...Array(10).keys()].map((item) => {
		return {
			"id": item, 
			"title":  "Survey " + (item + 1), 
		}
	})
	const drafts = [...Array(10).keys()].map((item) => {
		return {
			"id": item, 
			"title":  "Draft " + (item + 1), 
		}
	})

	const RenderItem = ({ item }) => {
		return(
			<List.Item
			title = { item.title }
			/>
		)
	}

	return (
		<View style = {styles.c}>
			{
			hasDrafts ? 
			<View style = {[]}>

				<Divider/>
				<CollapseableFlatList
				title = { "Drafts" }
				data = { drafts }
				renderItem = { RenderItem }
				centerTitle = { true }
				bold = { true }
				backgroundColor = { "#f1f1f1" }
				/>
			</View> 
			: <View style = {{ flex: 0 }}/>
			}

			<View style = {[styles.v]}>
				<Divider/>

				<List.Item
					title = {"Surveys"}
					titleStyle = {{textAlign: "center", fontWeight: "bold"}}
					style = { styles.header }
				/>

				<Divider/>

				<FlatList
					persistentScrollbar
					data = { surveys }
					renderItem = { RenderItem }
					ItemSeparatorComponent = { () => <Divider/>}
					contentContainerStyle = { styles.fl_ccs }
				/>
			</View>


			
		</View>

	)

}

const styles = StyleSheet.create({
	fl_ccs: {
		maxHeight: 0
	}, 
	v: {
		flex: 1, 
	}, 
	c: {
		flex: 1, 
	}, 
	header: {
		backgroundColor: "#f1f1f1"
	}
})