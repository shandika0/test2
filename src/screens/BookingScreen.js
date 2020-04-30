import React, { Component } from "react";
import { Card, View } from "native-base";
import { Text, StyleSheet, Button, Picker } from "react-native";
import HeaderIcon from "../components/HeaderIcon";
import { TextInput } from "react-native-paper";
import DatePicker from "react-native-datepicker";
import { _booking } from "../reduxs/action/Booking";
import { connect } from "react-redux";
import axios from "../axios";

class BookingScreen extends Component {
  state = {
    tanggalMasuk: "",
    durasi: "",
    kamarId: "",
    pemilikName: "",
    pencariName: "",
    dataKamar: [],
  };
  componentDidMount() {
    const { kostId } = this.props.route.params;
    axios
      .get(`api/kamar/kost/${kostId}`)
      .then((result) => {
        // console.log(result.data);
        console.log(kostId);

        const dataKamar = result.data.filter((item) => item.status == 0);
        this.setState({ dataKamar: dataKamar });
        console.log(result.data);
      })
      .catch((e) => {
        alert(e);
      });
  }
  booking = () => {
    const { pemilikName } = this.props.route.params;
    const { tanggalMasuk, durasi, kamarId } = this.state;
    const post = {
      kamarId: kamarId,
      pemilikName: pemilikName,
      tanggalMasuk: tanggalMasuk,
      durasi: durasi,
      pencariName: this.props.user.username,
    };
    const navigate = this.props.navigation;
    this.props._booking(post, navigate);
    // console.log(this.state);
    // console.log(post);
    // console.log(this.props.user);
  };

  render() {
    const dataKamar = this.state.dataKamar.map((item) => (
      <Picker.Item label={item.name} value={item.id} />
    ));
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
            date={this.state.tanggalMasuk}
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
              this.setState({ tanggalMasuk: date });
            }}
          />
        </Card>
        <Card>
          <Text style={styles.input}>Durasi Sewa (/Bulan)</Text>
          <TextInput onChangeText={(durasi) => this.setState({ durasi })} />
          <Text>Daftar Kamar</Text>
          <Picker
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ kamarId: itemValue })
            }
          >
            {dataKamar}
          </Picker>
        </Card>

        <Button title="Submit" onPress={this.booking} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    booking: state.booking,
    user: state.user.user,
  };
};

export default connect(mapStateToProps, { _booking })(BookingScreen);

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
