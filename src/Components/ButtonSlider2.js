import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,

    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useState, } from 'react';
import { DIMENSIONS } from '../constants/DIMENSIONS';
import COLORS from '../constants/COLORS';
import axios from 'axios';
import { API } from '../api/API';
import { useDispatch, useSelector } from 'react-redux';
import { setChargerStatus } from '../redux/action';
import ActivityLoader from './ActivityLoader';
import AnimatedLottieView from 'lottie-react-native';



const ButtonSlider2 = () => {
    const { getUserID, getChargerStatus } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);


    const handleComplete = (Data) => {
        setIsLoading(true);
        if (Data == '0') {
            axios
                .post(`${API}/charger_ON/${getUserID}`)
                .then(res => {
                    dispatch(setChargerStatus(res?.data));
                    setIsLoading(false);

                })
                .catch(err => {
                    console.log(err);
                    setIsLoading(false);
                });
        }
        else {
            axios
                .post(`${API}/charger_OFF/${getUserID}`)
                .then(res => {

                    dispatch(setChargerStatus(res?.data));
                    setIsLoading(false);
                    ;
                })
                .catch(err => {
                    console.log(err);
                    setIsLoading(false);
                });
        }
    };


    return (
        <TouchableOpacity onPress={() => {
            if (getChargerStatus.message == 'Online' || getChargerStatus.message == 'Charging') {
                handleComplete(1)
            } else {
                handleComplete(0)
            }
        }} style={styles.container}>
            {isLoading && <ActivityLoader />}

            <View style={styles.button}

                activeOpacity={1}>
                <LinearGradient
                    colors={[
                        // 'rgba(22, 249, 4, 0.2) 0%,',
                        // 'rgba(138, 8, 242, 0.2) 10%)',
                        // 'rgba(138, 8, 242, 0.2) 10%)',

                        'rgba(22, 249, 4, 0.3)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(138, 8, 242, 0.3)',
                    ]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                        width: DIMENSIONS.SCREEN_WIDTH * 60 / 100,
                        height: DIMENSIONS.SCREEN_HEIGHT * 6.5 / 100,
                        borderRadius: 15,
                        position: 'absolute',


                    }}
                >


                </LinearGradient>


                <LinearGradient
                    colors={['rgba(22, 249, 4, 0.3)', 'rgba(138, 8, 242, 0.3)']}
                    // colors={['#50AC3D', 'rgba(141, 1, 249, 0.5) 50%)']}
                    end={{ x: 1, y: 0 }}
                    style={{
                        width: DIMENSIONS.SCREEN_WIDTH * 10 / 100,
                        height: DIMENSIONS.SCREEN_HEIGHT * 5 / 100,
                        margin: DIMENSIONS.SCREEN_WIDTH * 2 / 100,
                        borderRadius: 70,
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'flex-end',

                    }}>

                    {getChargerStatus.message == 'Online' ||
                        getChargerStatus.message == 'Charging' ? (
                        <Image
                            source={require('../../assets/images/PowerButton.png')}
                            style={{ width: 32, height: 32 }}
                        />
                    ) : (

                        <AnimatedLottieView
                            source={{
                                uri: 'https://assets9.lottiefiles.com/packages/lf20_hbr24n88.json',
                            }} // Replace with your animation file
                            autoPlay
                            loop
                            style={{ width: 32, height: 32, }}
                        />
                    )}

                </LinearGradient>


            </View>

            <Text style={[styles.swipeText]}>
                {getChargerStatus.message == 'Online' ||
                    getChargerStatus.message == 'Charging'
                    ? 'TURN CHARGER OFF'
                    : 'TURN CHARGER ON'}

            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: DIMENSIONS.SCREEN_WIDTH * 0.04,
        marginBottom: DIMENSIONS.SCREEN_HEIGHT * 4 / 100,
    },
    button: {
        width: DIMENSIONS.SCREEN_WIDTH * 0.6,
        height: DIMENSIONS.SCREEN_HEIGHT * 0.07,
        borderRadius: 15,
        borderWidth: 1,
        position: 'absolute',
        bottom: DIMENSIONS.SCREEN_HEIGHT * 0.01,
        borderColor:['rgba(22, 249, 4, 0.4)', 'rgba(138, 8, 242, 0.5)'],
        alignItems: 'flex-end'

    },
    swipeText: {
        alignSelf: 'flex-start',
        color: 'black',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: '700',
        left: DIMENSIONS.SCREEN_WIDTH * 0.43,
        //  zIndex: 2,
        bottom: DIMENSIONS.SCREEN_HEIGHT * 0.03,
        //  paddingLeft:30
        // backgroundColor:'white'
    }


});

export default ButtonSlider2;