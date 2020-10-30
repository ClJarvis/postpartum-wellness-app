import React, { useState, Component } from "react";
import { StyleSheet, Text, View, ScrollView, Switch } from "react-native";
import { Button, TextInput } from "react-native-paper";
import SignInScreen from "./SignInScreen";


export default function PositivityToolBoxScreen() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [previousMentalHealth, setPreviousMentalHealth] = useState("");
  const [babyDob, setBabyDOB] = useState("");
  const [birthExperience, setBirthExperience] = useState("");
  const [partner, setPartner] = useState(false);
  const [supportNetwork, setSupportNetwork] = useState(false);
  const [immediateSupport, setImmediateSupport] = useState({
    supportName: "",
    supportEmail: "",
    supportPhone: "",
  });
  const [destressors, setDestressors] = useState([]);
  const [socioeconomicStatus, setSocioeconomicStatus] = useState("");
  const [breastfeeding, setBreastfeeding] = useState(false);
  const [race, setRace] = useState("");

  function toggleSwitch(input: {
    (value: React.SetStateAction<boolean>): void;
    (arg0: (previousState: any) => boolean): void;
  }) {
    input((previousState) => !previousState);
  }
 
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >



        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>Choose your positivity exercise</Text>

                <View style={styles.container}>
        <View style={styles.CircleShapeView}>
         <Button
            style={styles.button}
            mode="contained"
            onPress={() =>
              console.log("I pressed the affrimation button.")
            }
          >
            Affirmation
          </Button>
         <Button
            style={styles.button}
            mode="contained"
            onPress={() =>
              console.log("I pressed the Mindfulness button.")
            }
          >
            Mindfulness
          </Button>
         <Button
            style={styles.button}
            mode="contained"
            onPress={() =>
              console.log("I pressed the Breathing button.")
            }
          >
            Breathing
          </Button>


        </View>
      </View>
 
         
        </View>
      </ScrollView>
    </View>
  );
}


SignInScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff",
        justifyContent: "center",
    alignItems: "center",
  },
  getStartedContainer: {
    justifyContent: "center",
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 24,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 16,
  },
  textInput: {
    minWidth: 200,
    height: 64,
    justifyContent: "center",
    marginBottom: 8,
  },
  button: {
    minWidth: 200,
    height: 64,
    justifyContent: "center",
    marginBottom: 16,
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
  },
  describe: {
    fontSize: 16,
    color: "rgba(96,100,109, 1)",
    marginBottom: 5,
    marginTop: 5,
  },
 
  CircleShapeView: {
    width: 650,
    height: 650,
    borderRadius: 650/2,
    backgroundColor: '#a0d6ec',
    justifyContent: "center",
  },
});
