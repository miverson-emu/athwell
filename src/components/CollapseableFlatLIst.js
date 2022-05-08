import { Divider, List } from "react-native-paper"
import{ View, Text, useWindowDimensions, StyleSheet, TouchableOpacity, FlatList } from "react-native"
import { useState } from "react"
import SLIcons from "react-native-vector-icons/SimpleLineIcons"

export default function CollapseableFlatList({ title, data, renderItem, backgroundColor, centerTitle, bold}){
	const [isOpen, setOpen] = useState(false)

	console.log(data)
	const DropDownArrow = () => {
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


	return (
		<View style = {{flex: isOpen ? 1 : "", backgroundColor: backgroundColor}}>	
				<Divider/>
				
				<List.Item
				title = { title }
				right = {() => <DropDownArrow/>}
				style = {{ backgroundColor: backgroundColor }}
				titleStyle = {{ textAlign: centerTitle ? "center": "left", fontWeight: bold? "bold":""}}
				/>

				<Divider style = {{ height: isOpen ? 1 : 0 }} />

				<FlatList
					data = { data }
					renderItem = { renderItem }
					ItemSeparatorComponent = { () => <Divider/> }
					style = {{ display: isOpen ? "flex": "none" }}
					contentContainerStyle = {{ maxHeight: 0 }}
				/>
			</View>

	)
}