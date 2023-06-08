import { View, Text, StyleSheet, SafeAreaView, TextInput, useColorScheme } from 'react-native'
import React from 'react'
import HorizontalLine from '../../Components/HorizontalLine';
import Header from '../../Components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native-svg';
import Input from '../../Components/Input';
import COLORS from '../../constants/COLORS';
import { DIMENSIONS } from '../../constants/DIMENSIONS';
import { Call } from '../../../assets/svgs/Call';
import { Message } from '../../../assets/svgs/Message';
import {Name} from '../../../assets/svgs/Name';
import { Edit } from '../../../assets/svgs/Edit';



const PersonalDetails = ({ navigation }) => {
  const theme = useColorScheme();
  const isDark = theme === 'dark';
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.CREAM, flex: 1 }}>
      <Header headerName="Personal Details" showRightButton={true} />
      <HorizontalLine style={styles.line} />
      <View style={[styles.mainDiv_container]}>

        <Input
          IconLeft={null}
          autoFocus
          bgColor={COLORS.CREAM}
          IconRight={() => (
           <Name/>
          )}
          bR={5}
          bW={0.3}
          bColor={COLORS.LIGHT_GREY}
          text="Name"
          mV={5}
          textWidth={'17%'}
          placeholder="Eg John Doe"
          placeholderTextColor={COLORS.BLACK}
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
          IconRight={() => (
           <Call/>
          )}
          bR={5}
          bW={0.3}
          bColor={COLORS.LIGHT_GREY}
          text="Phone No."
          mV={15}
          textWidth={'27%'}
          placeholder="Eg. +123 (456) 789"
          placeholderTextColor={COLORS.BLACK}
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
          IconRight={() => (
           <Message/>
          )}
          bR={5}
          bW={0.3}
          bColor={COLORS.LIGHT_GREY}
          text="Email"
          mV={55}
          textWidth={'20%'}
          placeholder="Eg. johndoe@xyz.com"
          placeholderTextColor={COLORS.BLACK}
          style={{
            color: COLORS.BLACK,
            fontFamily: 'Roboto',
            fontWeight: '200',
          }}
        />
        {/* <Text style={[styles.textdata,styles.forPaddingTOP]}>Phone No.</Text>
            <TextInput
              style={[
                styles.textinput,
                {color: isDark ? COLORS.BLACK : COLORS.BLACK},
              ]}
              placeholder="Eg. +123 (456) 789"
              placeholderTextColor={{color: 'black'}}
            />
             <Text style={[styles.textdata,styles.forPaddingTOP]}>Email</Text>
            <TextInput
              style={[
                styles.textinput,
                {color: isDark ? COLORS.BLACK : COLORS.BLACK},
              ]}
              placeholder="Eg. johndoe@xyz.com"
              placeholderTextColor={{color: 'black'}}
            />  */}
            
      </View>
      <View style={styles.bottom}>
        <Text>Want to delete account?{' '}</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('deleteAccount')}}>
          <Text 
          style={{
            fontWeight: 800,
            font: 14,
            height: 25,
          }}
          >Request here.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  bottom: {
    marginTop: 400,
    marginLeft: 70,
    font: 14,
    fontfamily: 'Roboto',
    height: 25,
    color: COLORS.BLACK,
    flexDirection: 'row',
  },

  mainDiv_container: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom:40,
  // fontfamily: "Roboto",
  // color: "#000000",
  // fontSize: 24,
  // fontWeight: 700,
  // width: 300,
  // lineHeight: 26,
  // letterspacing: 0.5,
  height: 30,
  },
  textdata: {
    fontWeight: 'bold',
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
    paddingTop: 10,
    paddingBottom: 10,
  },
  shadowProp: {
    backgroundColor: 'white',
    shadowColor: Platform.OS === 'android' ? 'black' : "rgba(0,0,0,.555)",
    shadowOffset: {
      width: 8,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: Platform.OS === 'android' ? 8 : 0,
  },
  line: {
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 20,
  }
});


export default PersonalDetails