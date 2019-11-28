import React from 'react'
import { View, TextInput } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { Formik, getIn, FieldArray, Field } from 'formik'
import * as Yup from 'yup'

type item = {
  key: string
  name: string
  other?: string
}

const ItemSchema = Yup.object().shape({
  items: Yup.array().of(
    Yup.object().shape({
      key: Yup.string().required('Required'),
      name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      other: Yup.string(),
    }),
  ),
})

const data: Array<item> = [
  {
    key: '1',
    name: 'the names',
    other: 'lol',
  },
  {
    key: '2',
    name: 'another naem',
  },
]

export const MyReactNativeForm = (props: any) => {
  return (
    <View>
      <Formik
        initialValues={{ items: data }}
        validationSchema={ItemSchema}
        onSubmit={values => console.log(values)}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <FieldArray
              name="items"
              render={fArrayBag => {
                return values.items.map((item, i) => (
                  <View
                    key={item.key}
                    style={{
                      elevation: 3,
                      padding: 2,
                      margin: 5,
                      borderColor: 'black',
                      borderWidth: 1,
                      borderStyle: 'dashed',
                    }}>
                    <TextInput
                      onChangeText={handleChange(`items[${i}].key`)}
                      onBlur={handleBlur(`items[${i}].key`)}
                      value={item.key}
                    />
                    <TextInput
                      onChangeText={handleChange(`items[${i}].name`)}
                      onBlur={handleBlur(`items[${i}].name`)}
                      value={item.name}
                    />
                    <ErrorMessage name={`items[${i}.name]`}></ErrorMessage>
                    <TextInput
                      onChangeText={handleChange(`items[${i}].other`)}
                      onBlur={handleBlur(`items[${i}].other`)}
                      value={item.other}
                    />
                  </View>
                ))
              }}></FieldArray>
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  )
}

const ErrorMessage = ({ name }) => (
  <Field name={name}>
    {({ form }) => {
      const error = getIn(form.errors, name)
      const touch = getIn(form.touched, name)
      return touch && error ? (
        <Text style={{ color: 'red' }}>{error}</Text>
      ) : null
    }}
  </Field>
)

export default MyReactNativeForm
