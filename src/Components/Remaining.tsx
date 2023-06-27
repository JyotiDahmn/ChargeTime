import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import COLORS from '../constants/COLORS';
import LinearGradient from 'react-native-linear-gradient';
import {DIMENSIONS} from '../constants/DIMENSIONS';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {API} from '../api/API';
import {setOverUsage, setRemainingData} from '../redux/action';
import AnimatedLottieView from 'lottie-react-native';
import {useFocusEffect} from '@react-navigation/native';
import { navigationRef } from '../../App';

const Remaining = ({...props}) => {
  const dispatch = useDispatch();
  const {getRemainingData, getUserID, overusage} = useSelector(
    (state: any) => state,
  );
  const [modalVisible, setModalVisible] = useState(false);
  useFocusEffect(
    // overusage && setModalVisible(true);
    useCallback(() => {
      remainigUsuageData();
    }, []),
  );

  const remainigUsuageData = () => {
    let remaingData;

    axios
      .get(`${API}/remainingusage/${getUserID}`)
      .then(res => {
        if (res.data?.kwh_unit_remaining > 0) {
          remaingData = res.data?.kwh_unit_remaining;
          dispatch(setOverUsage(false));
        } else {
          remaingData = res.data?.kwh_unit_overusage;
          dispatch(setOverUsage(true));
          setModalVisible(true);
        }
        console.log('first')
        dispatch(setRemainingData(remaingData));
      })
      .catch(err => {
        console.log(err);
      });
  };
const nav = () => {
  // navigationRef.navigate('EnergyOptions')
  console.log(navigationRef.current?.getState().key)
}
  const OverusageModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Overusage</Text>
            <AnimatedLottieView
              source={{
                uri: 'https://assets6.lottiefiles.com/private_files/lf30_mf7q9oho.json',
              }} // Replace with your animation file
              autoPlay
              loop
              style={{width: 50, height: 50}}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: COLORS.BLACK,
              }}>
              You have utilized your package, please purchase a new package.
            </Text>
            <View style={styles.button_one}>
              <Pressable
                style={[styles.button]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={nav}>
                <Text style={styles.textStyle}>Purchase Plan</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <>
      <View
        style={{
        //   backgroundColor: '#F5F5F5',
        // width: props?.data !== "energy" ? DIMENSIONS.SCREEN_WIDTH * 0.4 : DIMENSIONS.SCREEN_WIDTH * 0.9,
        // height: DIMENSIONS.SCREEN_WIDTH * 0.35,
        // marginVertical: 20,
        // flexDirection: 'column-reverse',
        // //  shadowColor: '#000000',
        // //   shadowOffset: {
        // //     width: 0,
        // //     height: 6,
        // //   },
        // //   shadowOpacity: 0.2,
        // //   shadowRadius: 5.62,
        // //  elevation: 8,
        // shadowColor: '#000000',
        // shadowOffset: { width: 0, height: 6 },
        // shadowOpacity: 0.2,
        // shadowRadius: 2,
        // elevation: 5,
        // borderWidth: 0,
        // borderRadius: 10,
        // overflow: 'hidden',
          backgroundColor: '#F5F5F5',
          width:
            props?.data !== 'energy'
              ? DIMENSIONS.SCREEN_WIDTH * 0.4
              : DIMENSIONS.SCREEN_WIDTH * 0.9,
          height: DIMENSIONS.SCREEN_WIDTH * 0.35,
          marginVertical: 20,
          flexDirection: 'column-reverse',
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.2,
          shadowRadius: 5.62,
          elevation: 8,
          borderWidth: 0,
          borderRadius: 10,
          overflow: 'hidden',
          // transform: [animatedValue ? {rotate}: null],
        }}>
        <Text
          style={{
            padding: 5,
            fontWeight: '600',
            fontSize: 12,
            lineHeight: 14,
            textTransform: 'capitalize',
            color: COLORS.BLACK,
            position: 'absolute',
            top: 10,
            left: 10,
          }}>
          {overusage ? 'Overusage' : 'Remaining Usage'}
        </Text>
        <View
          style={{
            top: '40%',
            alignItems: 'center',
            position: 'absolute',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontWeight: '800',
              fontSize: 16,
              lineHeight: 20,
              color: COLORS.BLACK,
            }}>
            {' '}
            {getRemainingData ? getRemainingData : 0}
            {' kWh'}
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 10,
              lineHeight: 12,
              color: 'rgba(61, 61, 61, 0.6)',
            }}>
            Units Left To Be Used
          </Text>
        </View>
        {overusage ? (
          <View
            style={{
              width: '100%',
              height: '100%',
              flexDirection: 'column-reverse',
              backgroundColor: COLORS.RED,
              zIndex: -1,
            }}
          />
        ) : (
          <LinearGradient
            colors={['rgba(177, 211, 79, 0.7) 0%,', 'rgb(177, 211, 79) 0%,']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={{
              width: '100%',
              height: getRemainingData >= 1000 ? '100%' : getRemainingData < 1000 ?`${getRemainingData / 10}%` : '1%',
              flexDirection: 'column-reverse',
              zIndex: -1,
            }}
          />
        )}
        {/* <View
        style={{
          flexDirection: 'row',
        //   flex: 0.1,
          backgroundColor: COLORS.GREEN,
        }}>
        {getRemainingData > 10 && getRemainingData < 90 && (
          <View
            style={{
              width: '100%',
              height: '1%',
            }}>
            <LinearGradient
              colors={['#B1D34F', '#50AC3D']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{
                width: '100%',
                height: '1%',
              }}
            />
          </View>
        )}
        {getRemainingData > 10 && getRemainingData < 90 && (
          <View
            style={{
              width: '100%',
              height: '10%',
            }}>
            <LinearGradient
              colors={['#B1D34F', '#50AC3D']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              style={{
                width: '100%',
                height: '10%',
              }}
            />
          </View>
        )}
      </View> */}
      </View>
      <OverusageModal />
    </>
  );
};

export default Remaining;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: DIMENSIONS.SCREEN_WIDTH * 0.8,
  },
  button_one: {
    // marginLeft: 80,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: COLORS.GREEN,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 24,
    color: '#000000',
  },
});
