import React from 'react'
import * as Yup from 'yup'
import { formik } from 'formik'
import { View, Text } from 'react-native'

const FormikPostUploader = () => {
  return (
    <View>
      <Text style={{ color: 'white' }}>FORMIK</Text>
    </View>
  )
}

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required("A URL is required"),
    caption: Yup.string().max(2200, 'Caption has reached the character limit.'),
})

export default FormikPostUploader