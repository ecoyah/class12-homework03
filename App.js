import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Image, KeyboardAvoidingView } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)
  const [validCode, setValidCode] = useState('')  /*為輸入框宣告一個變數*/
  const [inputJudgeButtonResult, setInputJudgeButtonSetResult] = useState('')
  const inputJudgeButton = () => {
    if
      (inputJudgeButtonResult.length > 0 & inputJudgeButtonResult.length < 4) {
      return (<Text style={styles.inputRight}>請輸入您的密碼</Text>
      )
    } else {
      if (inputJudgeButtonResult === '1234') {
        return <Text style={styles.inputRight}>密碼輸入正確！</Text>
      } else {
        return <Text style={styles.inputRight}>密碼輸入錯誤，請重新輸入！</Text>
      }
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}
    >
      {/* 以KeyboardAvoidingView取代view 於<>加入behavior="padding" 可實現輸入畫面不被鍵盤遮擋 */}
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.mainText}>密碼驗證</Text>
        <StatusBar style="auto" />
        <TextInput
          style={styles.TextInputStyle}
          placeholder="密碼欄"  /*輸入前的提示字*/
          maxLength={4} /*可輸入字數*/
          onChangeText={(text) => setValidCode(text)}
          value={validCode}
          keyboardType={'numeric'} /*鍵盤類型*/
          secureTextEntry={true} /*密碼*/
          editable={true}  /*限制不可輸入true,false*/
          autoFocus={true}  /*自動焦點*/
        />
        {/* 顯示輸入的內容 */}
        <Text>{inputJudgeButton()}</Text>

        <TouchableOpacity
          style={styles.containerOpacity}
          onPress={() => setInputJudgeButtonSetResult(validCode)}>
          <Image
            style={{ width: 300, height: 103 }}
            source={require('./src/image/button.png')}
          />

        </TouchableOpacity>
      </KeyboardAvoidingView >
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#021678',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 1
  },
  mainText: {
    fontSize: 16,
    lineHeight: 25,
    textShadowColor: '#ffffff',
    color: '#ffffff',
  },
  TextInputStyle: {
    height: 40,
    width: 250,
    backgroundColor: '#0077ff',
    color: '#99ffd6',
    borderStyle: 'solid',
    borderColor: '#ffffff',
    borderWidth: 2,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },

  inputRight: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  inputErr: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 15,
  },
  containerOpacity: {
    padding: 1
  },
}
);
