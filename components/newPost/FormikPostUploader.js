import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { View, Text, Image, TextInput, Button } from 'react-native'
import { Divider } from 'react-native-elements'
import validUrl from 'valid-url'
import { firebase, database } from '../../firebase'

const placeholder_img = 'https://media.mixbook.com/images/templates/97_1_0_m.jpg'

const FormikPostUploader = ({ navigation }) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(placeholder_img)
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null)

    const getUsername = () => {
        const user = firebase.auth().currentUser
        const unsubscribe = database
        .collection('users')
        .where('owner_uid', '==', user.uid)
        .limit(1)
        .onSnapshot(snapshot => snapshot.docs.map(doc => {
            setCurrentLoggedInUser({
                username: doc.data().username,
                profilePicture: doc.data().profile_picture
            })
        }))
        return unsubscribe
    }

    useEffect(() => {
        getUsername()
    }, [])

    const uploadPostToFire = (imageUrl, caption) => {
        const unsubscribe = database
        .collection('users')
        .doc(firebase.auth().currentUser.email)
        .collection('posts')
        .add({
            imageUrl: imageUrl,
            user: currentLoggedInUser.username,
            profile_picture: currentLoggedInUser.profilePicture,
            owner_uid: firebase.auth().currentUser.uid,
            caption: caption,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            likes: 0,
            likes_by_users: [],
            comments: [],
        })
        .then(() => navigation.goBack())

        return unsubscribe
    }

    return (
        <Formik
            initialValues={{imageUrl: '', caption: ''}}
            onSubmit={values => {
                uploadPostToFire(values.imageUrl, values.caption)
            }}

            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
                <>
                    <View style={{ margin: 15, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Image 
                            source={{ uri: 
                                validUrl.isUri(thumbnailUrl) 
                                ? thumbnailUrl 
                                : placeholder_img 
                            }} 
                            style={{ width: 100, height: 100 }}
                        />

                        <View style={{ flex: 1, marginLeft: 14 }}>
                            <TextInput 
                                style={{ color: 'white', fontSize: 18 }}
                                placeholder='Write a caption...' 
                                placeholderTextColor='gray' 
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>
                    </View>

                    <Divider width={0.2} orientation={'vertical'} />

                    <TextInput 
                        style={{ color: 'white', fontSize: 16, marginTop: 10, marginLeft: 10 }}
                        placeholder='Enter image URL' 
                        placeholderTextColor='gray'
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                        onChange={e => setThumbnailUrl(e.nativeEvent.text)}
                    />  
                    {errors.imageUrl && (
                        <Text style={{ fontSize: 10, color: 'red', marginTop: 5, marginLeft: 10}}>
                            {errors.imageUrl}
                        </Text>
                    )}

                    <View style={{ marginTop: 50 }}>
                        <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
                    </View> 
                </>
            )}
            
        </Formik>
    )
}

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required("A URL is required"),
    caption: Yup.string().max(2200, 'Caption has reached the character limit.'),
})

export default FormikPostUploader