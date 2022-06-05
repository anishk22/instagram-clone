import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { View, Text, Image, TextInput, Button } from 'react-native'
import { Divider } from 'react-native-elements'

const placeholder_img = 'https://media.mixbook.com/images/templates/97_1_0_m.jpg'

const FormikPostUploader = () => {
    const [thumbnailUrl, setThumbnailUrl] = useState(placeholder_img)

    return (
        <Formik
            initialValues={{imageUrl: '', caption: ''}}
            onSubmit={(values) => console.log(values)}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
                <>
                    <View style={{ margin: 15, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Image 
                            source={{ uri: thumbnailUrl ? thumbnailUrl : placeholder_img }} 
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
                        <Text style={{ fontSize: 10, color: 'red', marginTop: 5, marginLeft: 10, marginBottom: 20}}>
                            {errors.imageUrl}
                        </Text>
                    )}

                    <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
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