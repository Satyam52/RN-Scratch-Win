import React from "react";
import { Button } from "native-base";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
//get array for 25 block
var itemArray = new Array(25).fill("empty");

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      randomNumber: ""
    };
  }
  //when app loadup
  componentDidMount() {
    this.setState({ randomNumber: this.generateRandomNumber() });
  }
  generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 25);
    this.setState({ randomNumber: randomNumber, isScratched: true });
    return randomNumber;
  };
  scratchitem = itemNumber => {
    if (this.state.randomNumber === itemNumber) {
      itemArray[itemNumber] = "lucky";
    } else {
      itemArray[itemNumber] = "unlucky";
    }
    this.forceUpdate();
  };
  scratchitemIcon = itemNumber => {
    if (itemArray[itemNumber] === "lucky") {
      return "dollar";
    } else if (itemArray[itemNumber] === "unlucky") {
      return "frown-o";
    }
    return "circle";
  };
  scratchItemColor = itemNumber => {
    if (itemArray[itemNumber] === "lucky") {
      return "green";
    } else if (itemArray[itemNumber] === "unlucky") {
      return "red";
    }
    return "#4c3c4c";
  };
  showAllItem = () => {
    itemArray.fill("unlucky");
    itemArray[this.state.randomNumber] = "lucky";
    this.forceUpdate();
  };
  resetB = () => {
    this.setState({ randomNumber: this.generateRandomNumber() }, () => {
      itemArray.fill("empty");
      this.forceUpdate();
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.title}>Scratch and Win Game</Text>
        </View>
        <View style={styles.grid}>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => this.scratchitem(0)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(0)}
                size={50}
                color={this.scratchItemColor(0)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.scratchitem(1)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(1)}
                size={50}
                color={this.scratchItemColor(1)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.scratchitem(2)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(2)}
                size={50}
                color={this.scratchItemColor(2)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.scratchitem(3)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(3)}
                size={50}
                color={this.scratchItemColor(3)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.scratchitem(4)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(4)}
                size={50}
                color={this.scratchItemColor(4)}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => this.scratchitem(5)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(5)}
                size={50}
                color={this.scratchItemColor(5)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.scratchitem(6)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(6)}
                size={50}
                color={this.scratchItemColor(6)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.scratchitem(7)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(7)}
                size={50}
                color={this.scratchItemColor(7)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.scratchitem(8)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(8)}
                size={50}
                color={this.scratchItemColor(8)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.scratchitem(9)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(9)}
                size={50}
                color={this.scratchItemColor(9)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => this.scratchitem(10)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(10)}
                size={50}
                color={this.scratchItemColor(10)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.scratchitem(11)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(11)}
                size={50}
                color={this.scratchItemColor(11)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.scratchitem(12)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(12)}
                size={50}
                color={this.scratchItemColor(12)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.scratchitem(13)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(13)}
                size={50}
                color={this.scratchItemColor(13)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.scratchitem(14)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(14)}
                size={50}
                color={this.scratchItemColor(14)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => this.scratchitem(15)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(15)}
                size={50}
                color={this.scratchItemColor(15)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.scratchitem(16)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(16)}
                size={50}
                color={this.scratchItemColor(16)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.scratchitem(17)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(17)}
                size={50}
                color={this.scratchItemColor(17)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.scratchitem(18)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(18)}
                size={50}
                color={this.scratchItemColor(18)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.scratchitem(19)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(19)}
                size={50}
                color={this.scratchItemColor(19)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => this.scratchitem(20)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(20)}
                size={50}
                color={this.scratchItemColor(20)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.scratchitem(21)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(21)}
                size={50}
                color={this.scratchItemColor(21)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.scratchitem(22)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(22)}
                size={50}
                color={this.scratchItemColor(22)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.scratchitem(23)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(23)}
                size={50}
                color={this.scratchItemColor(23)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.scratchitem(24)}
              style={styles.fntawsm}
            >
              <FontAwesome
                name={this.scratchitemIcon(24)}
                size={50}
                color={this.scratchItemColor(24)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Button
          onPress={() => this.showAllItem()}
          style={[styles.btn, { marginTop: 40 }]}
          full
          success
          rounded
        >
          <Text style={styles.btntext}>Show All Coupons</Text>
        </Button>
        <Button
          onPress={() => this.resetB()}
          style={styles.btn}
          full
          primary
          rounded
        >
          <Text style={styles.btntext}>Reset</Text>
        </Button>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  grid: {},
  row: { flexDirection: "row" },
  fntawsm: {
    alignItems: "center",
    padding: 10,
    borderWidth: 2,
    borderColor: "#4c3c4c",
    minWidth: 70
  },
  btn: {
    marginVertical: 10,
    marginHorizontal: 50
  },
  btntext: {
    color: "white",
    fontSize: 18
  },
  topBar: {
    backgroundColor: "#BB2CD9",
    // height: auto,
    justifyContent: "center",
    padding: 5,
    width: Dimensions.get("window").width,
    marginVertical: 2
  },
  title: {
    color: "white",
    textAlign: "center"
  }
});
