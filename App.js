import React from 'react'
import { StyleSheet, Text, View, Button, Divider } from 'react-native'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }
  }

  getLoc = () => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const crd = pos.coords

        // console.log('Your current position is:')
        // console.log(`Latitude : ${crd.latitude}`)
        // console.log(`Longitude: ${crd.longitude}`)
        // console.log(`More or less ${crd.accuracy} meters.`)
        this.setState({
          message: `la: ${crd.latitude}, ln: ${crd.longitude}, acc: ${crd.accuracy}m`
        })
      },
      () => {
        this.setState({ message: 'error' })
      },
      {}
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>loc</Text>
        <Text>Welcome to loc.</Text>
        <Text />
        <Text>Your current position is...</Text>
        <View>
          <Text />
          <Text>
            {!!this.state.message &&
              <Text>
                {this.state.message}
              </Text>}
          </Text>
          <Button title="Locate me" onPress={this.getLoc} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold'
  }
})
