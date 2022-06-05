import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

const SignupForm = ({ navigation }) => {
    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(2, 'A username is required'),
        password: Yup.string().required().min(8, 'Your password has to have at least 8 characters'),
    })

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{email: '', username: '', password: ''}}
                onSubmit={values => {
                    console.log(values)
                }}
                validationSchema={SignupFormSchema}
                validateOnMount={true}
            >

                {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
                    <>
                        <View style={[
                            styles.inputField, 
                            {borderColor: 
                                values.email.length < 1 || Validator.validate(values.email)
                                ? '#ccc'
                                : 'red'
                            }
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Email address'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>

                        <View style={[
                            styles.inputField, 
                            {borderColor: 
                                1 > values.username.length || values.username.length >= 2
                                ? '#ccc'
                                : 'red'
                            }
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Username'
                                autoCapitalize='none'
                                textContentType='username'
                                autoFocus={true}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                        </View>

                        <View style={[
                            styles.inputField, 
                            {borderColor: 
                                1 > values.password.length || values.password.length >= 8
                                ? '#ccc'
                                : 'red'
                            }
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Password'
                                autoCapitalize='none'
                                textContentType='password'
                                secureTextEntry={true}
                                autoCorrect={false}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>

                        <Pressable 
                            titleSize={20} 
                            style={styles.button(isValid)} 
                            onPress={handleSubmit}
                        >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </Pressable>

                        <View style={styles.loginContainer}>
                            <Text>Already have an account?{' '}</Text>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={{ color: '#0096F6' }}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View> 
    )
}

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

    button: (isValid) => ({
        backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 45,
        borderRadius: 4,
        marginTop: 30,
    }),

    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 20,
    },

    loginContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    }
})

export default SignupForm