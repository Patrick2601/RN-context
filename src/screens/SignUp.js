// SignUp.js
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import CustomInput from '../components/CustomInput';
import {signUp} from '../services/Auth';
import Buttons from '../components/Buttons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}) => {
  const signUpValidationSchema = yup.object().shape({
    fullName: yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 names')
      .required('Full name is required'),
    age: yup
      .string()
      .matches(/(\d){2}\b/, 'Enter a valid age')
      .required('age is required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
    password: yup
      .string()
      // .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
      // .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
      // .matches(/\d/, "Password must have a number")
      //  .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  });
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.signupContainer}>
          <Text style={{color: 'black'}}>Sign Up Screen</Text>

          <Formik
            validationSchema={signUpValidationSchema}
            initialValues={{
              fullName: '',
              email: '',
              age: '',
              password: '',
              confirmPassword: '',
            }}
            //onSubmit={values => console.log(values)}
            onSubmit={async values => {
              const response = await signUp({
                email: values.email,
                name: values.fullName,
                age: values.age,
                password: values.password,
              });
              console.log(response);
              if (response.user) {
                alert('succefully added');
                navigation.navigate('Login');
              } else {
                alert('User Already Exist');
              }
              try {
                const jsonValue = JSON.stringify(values);
                await AsyncStorage.setItem(values.email, jsonValue);
                //alert('user added in async');
                //navigation.navigate("Login");
              } catch (e) {
                console.log(`error.......${e}`);
              }
              // console.log(values);
              // navigation.navigate('Project');
            }}>
            {({handleSubmit, isValid}) => (
              <>
                <Field
                  component={CustomInput}
                  name="fullName"
                  placeholder="  Full Name"
                  placeholderTextColor="black"
                />
                <Field
                  component={CustomInput}
                  name="email"
                  placeholder="  Email Address"
                  keyboardType="email-address"
                  placeholderTextColor="black"
                />
                <Field
                  component={CustomInput}
                  name="age"
                  placeholder="  Age"
                  keyboardType="numeric"
                  placeholderTextColor="black"
                />
                <Field
                  component={CustomInput}
                  name="password"
                  placeholder="  Password"
                  placeholderTextColor="black"
                  secureTextEntry
                />
                <Field
                  component={CustomInput}
                  name="confirmPassword"
                  placeholder="  Confirm Password"
                  placeholderTextColor="black"
                  style={styles.field}
                  secureTextEntry
                />

                <Buttons onPress={handleSubmit} name="SIGN UP" />
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  field: {
    color: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupContainer: {
    width: '80%',
    alignItems: 'center',
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6',
  },
});
export default SignUp;
