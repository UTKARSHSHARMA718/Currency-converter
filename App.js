import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from 'react-native';

//NOTE importing Snackbar.
import Snackbar from 'react-native-snackbar';
//const Snackbar = require('react-native-snackbar');


 //! creating an object of all currency values in term of 1 ruppee.
 const currencyValues={
  DOLLAR:'0.014',
  EURO:'0.012',
  POUND:'0.011',
  RUBEL:'0.93',
  AUSDOLLAR:'0.2',
  CANDOLLAR:'0.019',
  YEN:'1.54',
  DINAR:'0.0043',
  BITCOIN:'0.000004',
}

const App = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState(0.0);

  const CurrencyConversion=(currency)=>{
//! error handling.
if(!input)//? if input is not provided.
{
//NOTE:- using a special way via using "Snackbar" provided by the react native.
return Snackbar.show({
  text:"Please enter a valid value.",
  backgroundColor:'purple',
  textColor:'yellow',
});
}

let conversionResult =parseFloat(input) * currencyValues[currency];
setResult(conversionResult.toFixed(3));
//! .toFixed()  is used to show value till a given digit after decimal.
  }
  
 
  return (
    <>
    {/* keyboardShouldPersistTaps="handled" :- used to make sure after whenever user tap outside the input area
    keyborad will get closed. */}
    {/* contentInsetAdjustmentBehavior='automatic' :- do same thing for IOS devices.  */}
      <ScrollView
       backgroundColor="black"
       keyboardShouldPersistTaps="handled"
       contentInsetAdjustmentBehavior='automatic'
       >
        <SafeAreaView>
          <View style={styles.resultContainer}>
            <Text style={styles.result}>{result}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              keyboardType="numeric"
              placeholder="Enter Amount"
              placeholderTextColor={'green'}
              color="green"
              fontSize={25}
              justifyContent='center'
              onChangeText={(input)=>setInput(input)}
              >

              </TextInput>
          </View>

          <View style={styles.ButonView}>
            {/* //!Special logic for looping through the object.  */}
            {/* //NOTE //? inside  map() , if we want to return a value then we use {} and if do not want to return any value then we use (). */}
            {Object.keys(currencyValues).map((currency)=>(
              <TouchableOpacity key={currency} style={styles.ConvertButtonContainer} onPress={()=>CurrencyConversion(currency)}>
                <Text style={styles.convertButtonTextColor}>
                  {currency}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  input: {
    fontSize: 30,
    alignItems: 'center',
    color: 'white',
  },
  result: {
    fontSize: 30,
    alignItems: 'center',
    color: 'white',
  },
  inputContainer: {
    height: 70,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'orange',
    borderRadius:14
  },
  resultContainer: {
    height: 70,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'orange',
    borderRadius:14
  },
  ContainerButton:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:10,
  },
  convertButtonTextColor:{
    color:'white',
    
   
  },
  ConvertButtonContainer:{
    
   
    marginTop:15,
    marginRight:12,
    alignItems:'center',
    height:100,
    width:'30%',
    borderWidth:2,
    borderColor:'red',
    borderRadius:14,
    justifyContent:'center'
  
  },
  ButonView:{
    alignItems:'center',
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    
    margin:10
  }
});
