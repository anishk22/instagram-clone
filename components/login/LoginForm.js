import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Touchable, TouchableOpacity } from 'react-native'

const LoginForm = () => (
    <View style={styles.wrapper}>
        <View style={styles.inputField}>
            <TextInput
                placeholderTextColor='#444'
                placeholder='Phone number, username, or email'
                autoCapitalize='none'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}
            />
        </View>

        <View style={styles.inputField}>
            <TextInput
                placeholderTextColor='#444'
                placeholder='Password'
                autoCapitalize='none'
                textContentType='password'
                secureTextEntry={true}
                autoCorrect={false}
            />
        </View>

        <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
            <TouchableOpacity>
                <Text style={{ color: '#6BB0F5' }}>Forgot password?</Text>
            </TouchableOpacity>
        </View>

        <Pressable titleSize={20} style={styles.button} 
            onPress = {() => console.log('Login button pressed!')}
        >
            <Text style={styles.buttonText}>Log In</Text>
        </Pressable>

        <View style={styles.signupContainer}>
            <Text>Don't have an account?{' '}</Text>
            <TouchableOpacity>
                <Text style={{ color: '#6BB0F5' }}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    </View> 
)

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80,
    },
    
    inputField: {
        borderRadius: 4,
        padding: 14,
        backgroundColor: '#FAFAFA',
        marginBottom: 20,
        borderWidth: 1,
    },

    button: {
        backgroundColor: '#0096F6',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 45,
        borderRadius: 4,
    },

    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 20,
    },

    signupContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    }
})

export default LoginForm