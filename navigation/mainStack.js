import React, { useContext} from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MainPage from '../screens/MainPage'
import QuestionWeb from '../screens/QuestionWeb'
import { MyText } from "../components/MyText"
import Icon from 'react-native-vector-icons/Ionicons'
import { ThemeContext } from '../utils/ThemeProvider'
import colors from '../constans/colors'
const MainStackNavigator = createNativeStackNavigator()

export const MainStack = (props) => {
    const { darkTheme, toggleTheme } = useContext(ThemeContext)

    const toggleThemePress = () => {
        toggleTheme()
    }

    return <MainStackNavigator.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: colors('primary', darkTheme)
            },
            headerTintColor: 'black',
            headerTitleAlign: "left",
            headerTitle: () => <MyText style={{ fontSize: 24, color: "#fff" }}>Stack' Post</MyText>,
            headerRight: () => <Icon color={"#fff"} name={darkTheme ? "moon-outline" : "sunny-outline"} size={24} onPress={toggleThemePress} />
        }}
    >
        <MainStackNavigator.Screen
            name="main"
            component={MainPage}
        />
        <MainStackNavigator.Screen name="question" component={QuestionWeb} />
    </MainStackNavigator.Navigator>
}


