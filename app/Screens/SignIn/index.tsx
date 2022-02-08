import React, {useState} from 'react';
import {
    StatusBar,
    SafeAreaView, Text, View, TouchableOpacity, ViewStyle, TextStyle
} from 'react-native';
import {color} from '../../theme';

const CONTAINER: ViewStyle = {
    height: '100%', backgroundColor: color.palette.lightBlue
}
const HEADER: TextStyle = {
    marginTop: '35%',
    height: '100%',
    backgroundColor: color.palette.darkBlue,
    borderRadius: 40,
    alignItems: 'center'
}
const HEADER_TITLE: TextStyle = {
    color: color.palette.white, marginTop: '15%'
}

const TITLE: TextStyle = {
    color: color.palette.white, fontWeight: 'bold', fontSize: 24
}
const PARA_TEXT: TextStyle = {
    textDecorationLine: 'underline', fontWeight: 'bold'
}
const FILL_BLANK: TextStyle = {
    flexDirection: 'row', marginTop: 50
}
const CONTENT_FIRST: TextStyle = {
    color: color.palette.white, fontSize: 22
}
const BLANK: TextStyle = {
    color: color.palette.white, fontSize: 22
}
const BUTTON_TEXT: TextStyle = {
    color: color.palette.black, fontSize: 18
}
const CONTENT_SECOND: TextStyle = {
    marginLeft: 10, width: 80, height: 40, backgroundColor: color.palette.white, justifyContent: 'center',
    alignItems: 'center', borderRadius: 7, bottom: 10
}
const SELECTED_TEXT: TextStyle = {
    color: color.palette.black, fontSize: 18
}
const CONTINUE_BUTTON_TEXT: TextStyle = {
    color: 'white', fontSize: 16
}
const REPLY_TEXT: TextStyle = {
    color: 'white', fontSize: 20, padding: 20, fontWeight: 'bold'
}
const CORRECT_TEXT: TextStyle = {
    color: color.palette.lightBlue, fontSize: 16
}
const FAILURE_TEXT: TextStyle = {
    color: color.palette.angry, fontSize: 16
}
const BUTTONS_VIEW: ViewStyle = {flexDirection: 'row', marginTop: 60}
const BLUR_CONTINUE: ViewStyle = {
    backgroundColor: color.palette.blur,
    height: 60,
    width: '80%',
    marginTop: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
}
const LEFT_BUTTON: ViewStyle = {
    marginLeft: 10, width: 80, height: 40, backgroundColor: color.palette.white,
    justifyContent: 'center', alignItems: 'center', borderRadius: 7, bottom: 10
}
const RIGHT_BUTTON: ViewStyle = {
    marginLeft: 50, width: 80, height: 40, backgroundColor: color.palette.white,
    justifyContent: 'center', alignItems: 'center', borderRadius: 7, bottom: 10
}
const BLUR_LEFT_BUTTON: ViewStyle = {
    marginLeft: 10, width: 80, height: 40, backgroundColor: color.palette.blur,
    justifyContent: 'center', alignItems: 'center', borderRadius: 7, bottom: 10
}
const BLUR_RIGHT_BUTTON: ViewStyle = {
    marginLeft: 50, width: 80, height: 40, backgroundColor: color.palette.blur,
    justifyContent: 'center', alignItems: 'center', borderRadius: 7, bottom: 10
}
const SUBMIT_BUTTON: ViewStyle = {
    backgroundColor: color.palette.lightBlue, height: 60, width: '80%', marginTop: '40%',
    justifyContent: 'center', alignItems: 'center', borderRadius: 20,
}
const REPLY_BUTTON: ViewStyle = {
    backgroundColor: color.palette.white, height: 60, width: '80%', marginTop: 10,
    justifyContent: 'center', alignItems: 'center', borderRadius: 20, alignSelf: 'center'
}
const ANSWER_SUCCESS_VIEW: ViewStyle = {
    position: 'absolute', bottom: 0, height: '40%',
    backgroundColor: color.palette.lightBlue, borderRadius: 40, width: '100%'
}
const ANSWER_FAILURE_VIEW: ViewStyle = {
    position: 'absolute', bottom: 0, height: '40%',
    backgroundColor: color.palette.angry, borderRadius: 40, width: '100%'
}


const SignInScreen = () => {
    const [filled, setFilled] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [step, setStep] = React.useState(1);
    const [text, setText] = React.useState('');


    const Success = () => {
        if (text === 'Hause') {
            setSuccess(true)
        } else {
            setSuccess(false)
        }

        setStep(2)
    }

    return (
        <SafeAreaView>
            <StatusBar backgroundColor="transparent" translucent={true}/>
            <View style={CONTAINER}>
                <View style={HEADER}>
                    <Text style={HEADER_TITLE}>
                        Fill in the missing word
                    </Text>
                    <Text style={TITLE}>The <Text style={PARA_TEXT}>
                        House
                    </Text> is Small</Text>

                    <View style={FILL_BLANK}>
                        <Text style={CONTENT_FIRST}>Das </Text>
                        {
                            filled === false ?
                                <Text style={BLANK}> _________ </Text> :
                                <View style={CONTENT_SECOND}>
                                    <Text style={SELECTED_TEXT}>{text}</Text>
                                </View>
                        }
                        <Text style={CONTENT_FIRST}> ist klein</Text>
                    </View>

                    <View style={BUTTONS_VIEW}>
                        {
                            text !== "foigen" ?
                                <TouchableOpacity onPress={() => {
                                    setText('foigen')
                                    setFilled(true)
                                }}
                                                  style={LEFT_BUTTON}>
                                    <Text style={BUTTON_TEXT}>foigen</Text>
                                </TouchableOpacity> :
                                <TouchableOpacity style={BLUR_LEFT_BUTTON}>
                                </TouchableOpacity>
                        }
                        {
                            text !== "Schaf" ?
                                <TouchableOpacity
                                    onPress={() => {
                                        setText('Schaf')
                                        setFilled(true)
                                    }}
                                    style={RIGHT_BUTTON}>
                                    <Text style={BUTTON_TEXT}>Schaf</Text>
                                </TouchableOpacity> :
                                <TouchableOpacity style={BLUR_RIGHT_BUTTON}>
                                </TouchableOpacity>
                        }
                    </View>

                    <View style={BUTTONS_VIEW}>
                        {
                            text !== "Bereiden" ?
                                <TouchableOpacity
                                    onPress={() => {
                                        setText('Bereiden')
                                        setFilled(true)
                                    }}
                                    style={LEFT_BUTTON}>
                                    <Text style={BUTTON_TEXT}>Bereiden</Text>
                                </TouchableOpacity> :
                                <TouchableOpacity style={BLUR_LEFT_BUTTON}>
                                </TouchableOpacity>
                        }
                        {
                            text !== "Hause" ?
                                <TouchableOpacity
                                    onPress={() => {
                                        setText('Hause')
                                        setFilled(true)
                                    }}
                                    style={RIGHT_BUTTON}>
                                    <Text style={BUTTON_TEXT}>Hause</Text>
                                </TouchableOpacity> :
                                <TouchableOpacity style={BLUR_RIGHT_BUTTON}>
                                </TouchableOpacity>
                        }
                    </View>

                    {

                        filled === false &&
                        <TouchableOpacity
                            style={BLUR_CONTINUE}>
                            <Text style={CONTINUE_BUTTON_TEXT}>CONTINUE</Text>
                        </TouchableOpacity>
                    }

                    {
                        step === 1 &&
                        <TouchableOpacity
                            onPress={() => Success()}
                            style={SUBMIT_BUTTON}>
                            <Text style={CONTINUE_BUTTON_TEXT}>CONTINUE</Text>
                        </TouchableOpacity>

                    }
                    {
                        step === 2 && success === true &&
                        <View style={ANSWER_SUCCESS_VIEW}>
                            <Text style={REPLY_TEXT}>Great Job</Text>
                            <TouchableOpacity
                                onPress={() =>
                                    setStep(1)
                                }
                                style={REPLY_BUTTON}>
                                <Text style={CORRECT_TEXT}>CONTINUE</Text>
                            </TouchableOpacity>
                        </View>
                    }

                    {
                        step === 2 && success === false &&
                        <View style={ANSWER_FAILURE_VIEW}>
                            <Text style={REPLY_TEXT}>Answer: Hause</Text>
                            <TouchableOpacity
                                onPress={() =>
                                    setStep(1)
                                }
                                style={REPLY_BUTTON}>
                                <Text style={FAILURE_TEXT}>CONTINUE</Text>
                            </TouchableOpacity>
                        </View>
                    }

                </View>
            </View>
        </SafeAreaView>


    );
};

export default SignInScreen;
