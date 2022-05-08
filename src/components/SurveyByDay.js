import { List, Divider, Badge, DataTable } from "react-native-paper"
import { StyleSheet, Text, FlatList, View } from "react-native"
import { useState, useEffect, useMemo } from "react"

import IOIcons from "react-native-vector-icons/Ionicons"
import { TouchableOpacity } from "react-native-web"
import { SampleStudentSurveyResultsByDay } from "./SampleData"

export default function SurveyResultsByDay({ dateNumberValue }) {
	const data = SampleStudentSurveyResultsByDay;

	const [date, setDate] = useState(dateNumberValue)
	const [surveyResults, setSurveyResults] = useState([])

	const [ascName, setAscName] = useState(false)
	const [ascResult, setAscResult] = useState(false)
	const [sortKey, setSortKey] = useState(null)

	/* ******* DATA ******* */
	useEffect(() => {
		setSurveyResults(data)
		console.log(date + " = " + displayDate(date))
		// GET NEW DATA BASED ON DATE
	}, [date])

	const sortedResults = useMemo(() => {
		console.log("Sorting " + sortKey + "...")

		if(sortKey == "name"){
			return (ascName ? ascendingSort(surveyResults, "ln"): descendingSort(surveyResults, "ln"))
		}
		else if (sortKey == "result") {
			return (ascResult ? ascendingSort(surveyResults, "rating"): descendingSort(surveyResults, "rating"))
		}
		else {
			return surveyResults
		}	
	}, [ascName, ascResult, surveyResults])	

	/* ******* FUNCTIONS ******* */

	function getPreviousDay(dateNumber) {
		const date = new Date(dateNumber)
		return new Date().setDate(date.getDate() - 1)
	}

	function getNextDay(dateNumber) {
		const date = new Date(dateNumber)
		return new Date().setDate(date.getDate() + 1)
	}

	function displayDate(dateNumber) {		
		const dow = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
		
		const date = new Date(dateNumber)
		return dow[date.getDay()].substring(0, 3) + " " + month[date.getMonth()].substring(0, 4) + " " + date.getDate() + ", " + date.getFullYear()
	}

	/* ******* DISPLAY COMPONENTS ******* */
	const RenderItem = ({ item }) => {
		return (
			<List.Item
				title = { item.ln + ", " + item.fn }
				right = {() => <Badge size = {30} style = { [styles[item["rating"]], { marginRight: 25 }] }/> }
				style = {[]}
			/>
		)
	}

	const ItemSeparator = () => {
		return (<Divider/>)
	}

	const HeaderLeft = () => {
		return (<TouchableOpacity
		onPress = {() => {
			let previousDay = getPreviousDay(date)
			setDate(previousDay)
		}}
		>
			<IOIcons size = {30} name = "ios-chevron-back"/>
		</TouchableOpacity>)
	}

	const HeaderRight = () => {
		return (<TouchableOpacity
		onPress = {() => {
			let nextDay = getNextDay(date)
			setDate(nextDay)
		}}
		>
			<IOIcons size = {30} name = "ios-chevron-forward"/>
		</TouchableOpacity>)
	}

	function ascendingSort(list, value) {
		let temp = list
		return temp.sort((a, b) => a[value].localeCompare(b[value]))
	}

	function descendingSort(list, value){
		let temp = list
		return temp.sort((a, b) => b[value].localeCompare(a[value]))
	}

	return (
		<View>
			<List.Item
			left = { HeaderLeft }
			right = { HeaderRight }
			title = { displayDate(date) }
			titleStyle = {{ textAlign: "center" }}
			/>

			<Divider/>

			<DataTable.Header>

				<TouchableOpacity 
					style = {{flex: 1}} 
					onPress = {() => {setSortKey("name"); setAscName(!ascName);}}>
					<DataTable.Title sortDirection = {ascName ? 'ascending': 'descending'}>
						<Text>Student Name</Text>
					</DataTable.Title>
				</TouchableOpacity>

				<TouchableOpacity
					onPress = {() => {
						console.log("Result Sort Change")
						setSortKey("result")
						setAscResult(!ascResult)
				}}
				>
					<DataTable.Title 
					numeric
					sortDirection = {ascResult ? 'ascending': 'descending'}
					>
						<Text>Survey Result</Text>
					</DataTable.Title>
				</TouchableOpacity>
				
			</DataTable.Header>

			<FlatList
				data = { sortedResults }
				renderItem = { RenderItem }
				keyExtractor = { (item) => item.aid }
				ItemSeparatorComponent = { ItemSeparator }
			/>

		</View>
	)
}



const styles = StyleSheet.create({ 
	high: {
	  backgroundColor: "#ff8073"
	}, 
	mild: {
	  backgroundColor: "#fff573"
	}, 
	low: {
	  backgroundColor: "#7bff73"
	}
  })