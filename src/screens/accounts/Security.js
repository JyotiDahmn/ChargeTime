import { View, Text, SafeAreaView,StyleSheet,TextInput, TouchableOpacity,ToastAndroid,} from 'react-native'
import React, { useEffect } from 'react'
import * as Yup from 'yup';
import COLORS from '../../constants/COLORS'
import HorizontalLine from '../../Components/HorizontalLine'
import Header from '../../Components/Header'
import Input from '../../Components/Input'
import { Key } from '../../../assets/svgs/Key'
import {Eye} from '../../../assets/svgs/Eye'
import { Formik } from 'formik';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {API} from '../../api/API';
import Toast from 'react-native-toast-message';
import { PLATFORM_IOS } from '../../constants/DIMENSIONS';
import { navigationRef } from '../../../App';

const PasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const ValidateSchema = Yup.object().shape({
  password: Yup
    .string()
    .matches(
      PasswordRegex,
      'Wachtwoord moet 1 hoofdletter en 1 kleine letter bevatten, 1 cijfer en 1 speciaal teken, en de lengte moet minimaal 8 zijn',
    )
    .required('Voer uw wachtwoord in'),
  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password'), ''], 'wachtwoorden moeten overeenkomen')
    .required('Voer je wachtwoord opnieuw in'),
});


const Security = () => {
const userRegisterData = useSelector((state)=> state.userRegisterData)
const [isEditable, setIsEditable] = useState(false);
const [currentPassword, setCurrentPassword] = useState('');
// const [passwordError, setPasswordError] = useState('');
const [newPassword, setNewPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');

useEffect(() => {
  console.log("+++++++++++++++",userRegisterData)
}, []);
const onPress = ()=>{
  // updatePersonalDetails();
  UpdatePassword();
}
// const handlePasswordVerification = () => {
//   const old_password = userRegisterData[3]?.password;
//   if (currentPassword === old_password) {
//     setPasswordError('');
//   } else {
//     setPasswordError('Old password does not match.');
//   }
// };
const mail = userRegisterData[0]?.email;
const enableEdit =()=>{
  console.log("enable edit",isEditable)
  setIsEditable(true)
}
const UpdatePassword= async () =>{
    // console.log(values);
    try {
      await fetch(`${API}/changePassword `,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pwa_email: mail,
          old_password: currentPassword,
          password: newPassword,
          conifrm_password: confirmPassword,
        }),
      })
      
      .then(res => res.json())
        .then(data => {
          console.log(data, 'fff');
          if (data.success !== false) { 
            PLATFORM_IOS
              ? Toast.show({
                  type: 'success',
                  text1: 'Password updated Successfully',
                })
              : ToastAndroid.show(
                  'Password updated Successfully',
                  ToastAndroid.SHORT,
                );
                setIsEditable(false)
                navigationRef.navigate('Account');
                setCurrentPassword(' ');
                setNewPassword (' ');
                setConfirmPassword(' ');
          } else {
            PLATFORM_IOS
              ? Toast.show({
                  type: 'error',
                  text1: 'Current password does not match',
                  // position: 'bottom',
                })
              : ToastAndroid.show('Current password does not match', ToastAndroid.SHORT);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };




  return (
    <SafeAreaView style={{ backgroundColor: COLORS.CREAM, flex: 1 }}>
     <Header headerName="Security" showRightButton={true} onPress={onPress} enableEdit ={enableEdit} editButton={isEditable} />
      
     <HorizontalLine style={styles.line} />
     <View style={[styles.mainDiv_container]}>
      <Input
        IconLeft={null}
        autoFocus
        bgColor={COLORS.CREAM}
        editable={isEditable}
        IconRight={() => <Key />}
        bR={5}
        bW={0.3}
        bColor={COLORS.BLACK}
        // secureTextEntry={true}
        onChangeText={text => setCurrentPassword(text)}
        value={currentPassword}
        text="Current Password"
        mV={7}
        textWidth={'50%'}
        placeholder="*************"
        placeholderTextColor={COLORS.GREY}
        style={{
          color: COLORS.BLACK,
          fontFamily: 'Roboto',
          fontWeight: '200',
        }}
      />
      {/* {passwordError !== '' && (
        <Text style={{ color: 'red' }}>{passwordError}</Text>
       )} */}

      <Input
        IconLeft={null}
        autoFocus
        bgColor={COLORS.CREAM}
        editable={isEditable}
        IconRight={() => <Eye />}
        bR={5}
        bW={0.3}
        bColor={COLORS.BLACK}
        // secureTextEntry={true}
        onChangeText={text => setNewPassword(text)}
         value={newPassword}
        text="New Password"
        mV={15}
        textWidth={'35%'}
        placeholderTextColor={COLORS.GREY}
        style={{
          color: COLORS.BLACK,
          fontFamily: 'Roboto',
          fontWeight: '200',
        }}
      />

      <Input
        IconLeft={null}
        autoFocus
        bgColor={COLORS.CREAM}
        IconRight={() => <Eye />}
        bR={5}
        bW={0.3}
        bColor={COLORS.BLACK}
        editable={isEditable}
        // secureTextEntry={true}
        onChangeText={text => setConfirmPassword(text)}
         value={confirmPassword}
        text="Re-enter New Password"
        mV={7}
        textWidth={'53%'}
        placeholderTextColor={COLORS.GREY}
        style={{
          color: COLORS.BLACK,
          fontFamily: 'Roboto',
          fontWeight: '200',
        }}
      />

</View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
mainDiv_container: {
  paddingHorizontal: 20,
  marginLeft:20,
  marginRight:20,
  paddingTop: 30,
  marginTop:30,
  paddingBottom:30 ,
  borderRadius:4,
  border:14,
},
textdata: {
  fontWeight: 800,
  fontSize: 15,
  color: COLORS.BLACK,
},

textinput: {
  backgroundColor: COLORS.BROWN,
  borderRadius: 10,
  paddingHorizontal: 15,
  height: Platform.OS === 'ios' ? 50 : 50,
},
forPaddingTOP: {
  paddingTop: 20,
},
shadowProp: {
  backgroundColor: 'white',
  shadowColor: Platform.OS === 'android' ?'black' :"rgba(0,0,0,.555)", // Shadow color
  shadowOffset: {
    width: 6, 
    height: 4, 
  },
  shadowOpacity: 1, 
  shadowRadius: 4, 
  elevation: Platform.OS === 'android' ? 8 : 0,
},
line:{
  marginTop:50,
  marginBottom:10,
  marginHorizontal:5,
},
innerContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 15,
  paddingVertical: 10,
  alignItems: 'center',
},
header: {
  backgroundColor: COLORS.CREAM,
},
headerButton: {
  paddingHorizontal: 10,
},
backButton: {
  width: 40,
},
headerText: {
  fontFamily: 'Roboto',
  color: COLORS.BLACK,
  fontSize: 20,
  fontWeight: '700',
  width: 250,
  lineHeight: 26,
  letterSpacing: 0.5,
  height: 30,
},
rightButton: {
  width: 40,
},
});

export default Security