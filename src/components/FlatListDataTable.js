// Flat list with Headers
// Flatlist sortable by clicking header - useState()
import { List, Divider } from "react-native-paper"
import { StyleSheet, Text, FlatList, View } from "react-native"


export default function FlatListDataTable({ data }) {
// TO DO: HANDLE EMPTY DATA
	// console.log(data)

	const TableDataRow = ({ item } ) => {

		return ( 
			<List.Item 
				title = { item["title"] }
				score = { item["score"] }
				total = { item["total"] }
				right = {() => <Text style = { styles.dataRight }>{ item["score"] }<Text style = { styles.smlNum }>{ " /" + item["total"] }</Text></Text>}
			/>
		)
	}
	//  item <= title, score, total, rating, 
	const TableHeaderRow = ({ item }) => {
		return (
			<List.Item 
				title = { item["title"] }
				right = {() => <Text style = { styles.dataRight }>{ item["score"] }<Text style = { styles.smlNum }>{ " /" + item["total"] }</Text></Text>}
				style = { [ {backgroundColor: "lightgrey"} /**styles[item["rating"]] , styles["headerBorder"]**/] }
				titleStyle = { styles.titleText }
				// {...props}
			/>
		)
	}

	const TableTitle = ({ title, description, id, ...props }) => {
		console.log(props)

		return (
			<List.Item 
			key = { id }
			title = { title }
			description = { description }
			titleStyle = {{ textAlign: "center", fontWeight: "bold" }}
			descriptionStyle = {{ fontSize: "50%", textAlign: "center", fontWeight: "bold" }}
			style = { [ styles["title"], /** styles["titleBorder"] **/] }
			{...props}
			/>
		)
	}

	const RenderItem = ({ item }) => {
		return item
	}

	const Error = () => {
		return <List.Item 
			title = "There was an error gathering this data!"
			key = {1}
			titleStyle = {{ textAlign: "center", fontWeight: "bold", color: "red"}}
		/>
	}

	//generate list of components
	const ParseResults = ( data ) => {

		console.log(data)
		let DataTableData = []


		//sort categories by "category"
		//sort measurment by "title"

		if (data) {
			let key = 0

			//STUDENT NAME 
			try{
				DataTableData.push(
					<TableTitle 
					key = { key++ } 
					title = {data["student"]["lastName"] + ", " +  data["student"]["firstName"]} 
					description = { "Mon Jan 01, 2022" } 
					separate = { false }/>
				)
			} catch(e) {
				// console.log(e)
				console.log("Student Name Error")
				DataTableData = Array(<Error/>)
				return DataTableData
			}
			try {
				// STUDENT SCORE
				DataTableData.push(
					<TableTitle 
					key = { key++ } 
					title = { data["studentSurveyData"]["score"] + " / " + data["studentSurveyData"]["total"] }
					style = { [ /** styles[data["studentSurveyData"]["rating"]] **/ ] }
					separate = { false }/>
				)
			} catch(e) {
				// console.log(e)
				console.log("Student Score Error")

				DataTableData = Array(<Error/>)
				return DataTableData
			}
			
			try{
				data["surveyResults"].forEach(result => {
				const { title, rating, score, total } = result //DO NOT PASS TOO MUCH DATA
				
				//Render Header Row
				DataTableData.push(
					<TableHeaderRow 
					key = { key++ } 
					item = { { title, rating, score, total } } 
					separate = { false } />
				)

				result["measurements"].forEach(measurement => {
					const { title, score, total } = measurement //DO NOT PASS TOO MUCH DATA

					//Render Data Row
					DataTableData.push(
						<TableDataRow 
						key = { key++ }
						item = { { title, score, total } } 
						separate = { true }/>)
				})
			})
			} catch(e) {
				// console.log(e)
				console.log("Surey Results Error")

				DataTableData = Array(<Error/>)
				return DataTableData
			}
			
		}

		return DataTableData
	}

	// only display separator on data rows not title or header => check separate prop
	const ItemSeparator = ( item ) => {
		const separateItem = item["leadingItem"]["props"]["separate"]

		return (separateItem ? <Divider/> : <View/>)
	}

	return (
	<FlatList 
		data = { ParseResults( data ) }
		renderItem = { RenderItem }
		ItemSeparatorComponent = { ItemSeparator }
		/>
	)
}
const styles = StyleSheet.create({ 
	title: {
		backgroundColor: "#19B092", 
		textAlign: "center", 
		fontWeight: "bold"
	},
	header: {

	}, 
	titleText: {
		fontWeight: "bold", 
	},
	dataRight: {
		fontWeight: "bold", 
		fontSize: "150%",
		width: "60px",
		textAlign: "center" //"left"
	},
	bigNum: {
		
	}, 
	titleBorder:{
		borderTopColor: "black", 
		borderTopWidth: "5px",
		borderBottomColor: "black", 
		borderBottomWidth: "5px"
	},
	headerBorder: {
		borderTopColor: "black", 
		borderTopWidth: "2px",
		borderBottomColor: "black", 
		borderBottomWidth: "2px"
	},
	smlNum: {
		fontSize: "50%"
	},
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