import { useState } from 'react';
import { Alert, Button, ScrollView, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Radiobutton from './components/Radiobutton'
import StyleSheet from './Styles'

export default function App() {
  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState(1);
  const [hours, setHours] = useState(1);
  const [gender, setGender] = useState(1);
  const [alcoholLevel, setAlcoholLevel] = useState(0);

  const bottleArray = Array();
  const hourArray = Array();

  for(let i=1; i<25; i++){
    if (i === 1){ 
      bottleArray.push({label: i + ' bottle', value: i});
      hourArray.push({label: i + ' hour', value: i});
    }else{
      bottleArray.push({label: i + ' bottles', value: i});
      hourArray.push({label: i + ' hours', value: i});
    }
  }

  const genderArray = Array(); 
  genderArray.push({label: 'Male', value: 1});
  genderArray.push({label: 'Female', value: 2});

  const calculate = () => {
    if(weight === ''){
      Alert.alert("Insert weight")
    }else{
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight.replace(',','.') / 10;
    grams = grams - (burning * hours);
    let result = 0;
    if (gender === 1) {
      result = grams / (weight.replace(',','.') * 0.7);
    } else {
      result = grams / (weight.replace(',','.') * 0.6);
    }
    if (result < 0){
      setAlcoholLevel(0);
    } else{
    setAlcoholLevel(result);
  }}
  }

  return (
    <View style={StyleSheet.container}>
      <ScrollView>
        <View style={StyleSheet.center}>
          <Text style={StyleSheet.header}>Alcometer</Text>
        </View>
        <Text style={StyleSheet.field}>Weight</Text>
        <TextInput style={StyleSheet.field} placeholder='in kilograms' value={weight} onChangeText={text => setWeight(text)}
        keyboardType='decimal-pad'/>
        <Text style={StyleSheet.field}>Bottles</Text>
        <Picker style={StyleSheet.picker}
          selectedValue={bottles}
          onValueChange={itemValue =>
            setBottles(itemValue)}
          >
          {bottleArray.map((bottles, index) => (
            <Picker.Item key={index} label={bottles.label} value={bottles.value} />
          ))} 
        </Picker>
        <Text style={StyleSheet.field}>Time</Text>
        <Picker style={StyleSheet.picker}
          selectedValue={hours}
          onValueChange={itemValue =>
            setHours(itemValue)}
          >
          {hourArray.map((hour, index) => (
            <Picker.Item key={index} label={hour.label} value={hour.value} />
          ))} 
        </Picker>
        <Text style={StyleSheet.field}>Gender</Text>
        <Radiobutton options={genderArray} onPress={(value) => setGender(value)} />
        <View style={StyleSheet.center}>
          {alcoholLevel === 0 && <Text style={StyleSheet.green}>{alcoholLevel.toFixed(2)}</Text>}
          {alcoholLevel > 0 && alcoholLevel < 0.5 && <Text style={StyleSheet.yellow}>{alcoholLevel.toFixed(2)}</Text>}
          {alcoholLevel >= 0.5 && <Text style={StyleSheet.red}>{alcoholLevel.toFixed(2)}</Text>}
        </View>
        <Button title='Calculate' onPress={calculate}/>
      </ScrollView>
    </View>
  );
}

