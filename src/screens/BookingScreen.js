import React, { Component } from "react";
import { Card, View } from "native-base";
import { Text, StyleSheet, Button } from "react-native";
import HeaderIcon from "../components/HeaderIcon";
import { TextInput } from "react-native-paper";
import DatePicker from "react-native-datepicker";

export default class ListKostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "2020-04-27" };
  }
  render() {
    return (
      <>
        <HeaderIcon
          title="Booking"
          icon="arrow-back"
          onPress={() =>
            this.props.navigation.navigate("DetailKost", this.state)
          }
        />
        <Text style={styles.text}>Silahkan isi data dibawah ini</Text>
        <Card>
          <Text style={styles.input}>Pilih Tanggal Masuk</Text>

          <DatePicker
            style={{ width: 200 }}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2020-04-26"
            maxDate="2025-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={(date) => {
              this.setState({ date: date });
            }}
          />
        </Card>
        <Card>
          <Text style={styles.input}>Durasi Sewa (/Bulan)</Text>
          <TextInput></TextInput>
        </Card>

        <Card>
          <View>
            <Button
              title="Submit"
              onPress={() =>
                this.props.navigation.navigate("BookKost", this.state)
              }
            ></Button>
          </View>
        </Card>
      </>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
  },
  input: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
  },
});
