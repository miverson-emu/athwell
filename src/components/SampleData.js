
export const SampleStudentSurveyResults = 
	{
		student: {
			lastName: "LastName", 
			firstName: "FirstName"
		},
		surveyData: {
			title: "surveyTitle", 
			date: "mmddyyyy"
		},
		studentSurveyData: {
			score: 19, 
			total: 27, 
			rating: "high"
		}, 
		surveyResults: [
			{
				id: 0, 
				title: "Category0", 
				rating: "mild", 
				score: 5, 
				total: 10,
				
				measurements: [
					{
						id: 0, 
						title: "Measurement0", 
						score: 3, 
						total: 5,	
					}, 
					{
						id: 1,
						title: "Measurement1", 
						score: 2, 
						total: 5
					}
				]  
			}, 
			{
				id: 1, 
				title: "Category1", 
				rating: "high", 
				score: 14, 
				total: 17,
				
				measurements: [
					{
						id: 0, 
						title: "Measurement0", 
						score: 3, 
						total: 3,	
					}, 
					{
						id: 1,
						title: "Measurement1", 
						score: 2, 
						total: 3
					}, 
					{
						id: 2,
						title: "Measurement2", 
						score: 1, 
						total: 3
					}, 
					{
						id: 3,
						title: "Measurement3", 
						score: 5, 
						total: 5
					},  
					{
						id: 1,
						title: "Measurement4", 
						score: 3, 
						total: 3
					}
				]  
			}
			]
		}

export const SampleStudentSurveyResultsByDay = [
			{
				aid: "001", 
				ln: "Smith", 
				fn: "John", 
				rating: "high"
			}, 
			{
				aid: "002", 
				ln: "Johnson", 
				fn: "Adam", 
				rating: "mild"
			},
			{
				aid: "003", 
				ln: "Anderson", 
				fn: "Randal", 
				rating: "low"
			}
		]
	