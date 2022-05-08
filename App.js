import { View, Text } from "react-native";
import FlatListDataTable from "./src/components/FlatListDataTable";
import FlatListMenu from "./src/components/FlatListMenu";
import HorizontalFlatList from "./src/components/HorizontalFlatList";

import Screen1 from "./src/screens/StudentLandingScreen"
import SurveyResults from "./src/screens/SurveyResults";
import SurveyResultsByDay from "./src/components/SurveyByDay";
import StudentLandingScreen from "./src/screens/StudentLandingScreen"
import TeamListingScreen from "./src/screens/TeamListingScreen"
import CoachLandingScreen from "./src/screens/CoachLandingScreen"
import SurveyListingScreen from "./src/screens/SurveyListingScreen"

import TeamManageScreen from "./src/screens/TeamManageScreen";
import Flex from "./src/screens/Flex"
export default function App() {

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white"
      }}
    >
      {/* <TeamManageScreen/> */}
      <SurveyListingScreen hasDrafts = {true} />
      {/* <SurveyResultsByDay dateNumberValue = {new Date().valueOf()}/> */}
    </View>
  );
}

