import { Button, Divider, List } from "react-native-paper"
import{ View, Text, useWindowDimensions, StyleSheet, TouchableOpacity, FlatList } from "react-native"
import { useState } from "react"
import SLIcons from "react-native-vector-icons/SimpleLineIcons"

import CollapseableFlatList from "../components/CollapseableFlatLIst"
export default function TeamManageScreen() {
	const { height } = useWindowDimensions();

	const coaches = [...Array(10).keys()].map((item) => {
		return {
			"id": item, 
			"title":  "Coach " + item, 
		}
	})
	const athletes = [...Array(10).keys()].map((item) => {
		return {
			"id": item, 
			"title":  "Athlete " + item, 
		}
	})
	const surveys = [...Array(10).keys()].map((item) => {
		return {
			"id": item, 
			"title":  "Survey " + item, 
		}
	})
	
// make max height of collpasables = (1/2) of height - description-section-height

	const DropDownArrow = ({ isOpen, setOpen }) => {
		return( 
			<TouchableOpacity
			onPress = {() => {
				setOpen(!isOpen)
			}}
			>
				{
				isOpen ? 
				<SLIcons size = {25} name = "arrow-up"/> 
				: <SLIcons size = {25} name = "arrow-down"/>
				}
			</TouchableOpacity>
			)
	}

	const RenderItem = ({ item }) => {
		return (
			<List.Item
					title = { item.title }
				/>
		)
	}
	return (
		<View style = { styles.container }>
			<View style = {[{ flex: 1, margin: 10 }]}>

				<View style = {{ flex: 2, flexDirection: "column", justifyContent: "space-between", margin: 5}}>
					<Text style = {[ styles.title, { flex: 1 }]}>Team Name</Text>
					
					<View style = {{ flex: 2, backgroundColor: "lightgrey", padding: 3 }}>
						<Text>Description</Text>
					</View>

				</View>
				<Button> See Assigned Surveys </Button>
			</View>

			

			<View style = { styles.section }>

				<CollapseableFlatList
					title = { "Coaches (" + coaches.length + ")" }
					data = { coaches }
					renderItem = { RenderItem }

				/>

				<CollapseableFlatList
					title = { "Athletes (" + coaches.length + ")" }
					data = { athletes }
					renderItem = { RenderItem }
				/>
				
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	flatListContentContainerStyle: {
		maxHeight: 0
	}, 
	section: {
		flex: 3
	}, 
	container: {
		flex:1
	}, 
	title: {
		fontSize: "150%", 
		fontWeight: "bold"
	}
})