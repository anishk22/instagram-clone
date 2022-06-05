import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import LoginForm from '../components/login/LoginForm'

const instagram_logo = 'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-512.png'

const LoginScreen = () => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={{ uri: instagram_logo, height: 100, width: 100}} />
        </View>
        <LoginForm/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },

    logoContainer: {
        alignItems: 'center',
        marginTop: 60,
    },
})

export default LoginScreen