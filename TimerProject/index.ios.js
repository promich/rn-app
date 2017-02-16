'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { CountdownTimer } from 'react-native-countdown-timer';
import Style from "./Style";



class Card extends Component {
  render() {
    return (
      
        <Text style={styles.textnew}>
          Testy text here. 
        </Text>
     
    );
  }
}


class BackgroundImage extends Component {
    render() {
        return (
            <Image source={require('./resources/background.png')}
                  style={styles.backgroundImage}>
                  {this.props.children}
            </Image>
        )
    }
}


class YourComponent extends Component {
  constructor(props) {
    super(props)
  }
  _onFinish() {
    console.log(`_onFinish`)
  }

  render() {
    let till = new Date('05/09/2017 09:00:00')
    return (
      <View>
        <CountdownTimer
          till={till}
          renderTick={(data) => <TimeLabel {...data} />}
          onFinish={this._onFinish.bind(this)}
        />
      </View>    
    )
  }
}
class YourDay extends Component {
  constructor(props) {
    super(props)
  }
  _onFinish() {
    console.log(`_onFinish`)
  }

  render() {
    let till = new Date('05/09/2017 09:00:00')
    return (
      <View>
        <CountdownTimer
          till={till}
          renderTick={(data) => <TimeDay {...data} />}
          onFinish={this._onFinish.bind(this)}
        />
      </View>    
    )
  }
}

class YourHour extends Component {
  constructor(props) {
    super(props)
  }
  _onFinish() {
    console.log(`_onFinish`)
  }

  render() {
    let till = new Date('05/09/2017 09:00:00')
    return (
      <View>
        <CountdownTimer
          till={till}
          renderTick={(data) => <TimeHour {...data} />}
          onFinish={this._onFinish.bind(this)}
        />
      </View>    
    )
  }
}

class YourMin extends Component {
  constructor(props) {
    super(props)
  }
  _onFinish() {
    console.log(`_onFinish`)
  }

  render() {
    let till = new Date('05/09/2017 09:00:00')
    return (
      <View>
        <CountdownTimer
          till={till}
          renderTick={(data) => <TimeMin {...data} />}
          onFinish={this._onFinish.bind(this)}
        />
      </View>    
    )
  }
}

class YourSec extends Component {
  constructor(props) {
    super(props)
  }
  _onFinish() {
    console.log(`_onFinish`)
  }

  render() {
    let till = new Date('05/09/2017 09:00:00')
    return (
      <View>
        <CountdownTimer
          till={till}
          renderTick={(data) => <TimeSec {...data} />}
          onFinish={this._onFinish.bind(this)}
        />
      </View>    
    )
  }
}


class TimeLabel extends Component {
  render() {
    return (

        <Text style={styles.counternumbers}>
          {this.props.days} : {this.props.hoursleft} : {this.props.minutes} : {this.props.seconds}
        </Text>


    )
  }
}

class TimeDay extends Component {
  render() {
    return (

        <Text style={styles.counternumbers}>
          {this.props.days}
        </Text>


    )
  }
}

class TimeHour extends Component {
  render() {
    return (

        <Text style={styles.counternumbers}>
          {this.props.hoursleft}
        </Text>


    )
  }
}

class TimeMin extends Component {
  render() {
    return (

        <Text style={styles.counternumbers}>
          {this.props.minutes}
        </Text>


    )
  }
}

class TimeSec extends Component {
  render() {
    return (

        <Text style={styles.counternumbers}>
		{this.props.seconds}
        </Text>


    )
  }
}


class TimerProject extends Component {

  render() {
    return (
	    
	    
	    
	    
	    
<BackgroundImage>
	    
<View style={styles.mainContainer}>



<View style={{
    justifyContent: 'center',
    alignItems: 'center',
  }}>	    

	    
        <View style={styles.logobox}>
        <SvgUri width="270" height="70" source={require('./bcndp.svg')} />
        </View>
</View>

              <Text style={styles.build}>
                <Text style={styles.build1}>


              It’s&nbsp;time&nbsp;to </Text>
                <Text style={styles.build2}>build&nbsp;a&nbsp;better </Text>
                British&nbsp;Columbia
              </Text>

	    
 <View style={styles.counterbox}>

<View style={{flexDirection: 'row', padding:0}}>
  <View style={{flex: 0.175}}>
    <YourDay/>
  </View>
  <View style={{flex: 0.16}}>
    <View style={styles.counterwordbox}>
      <View style={{backgroundColor: '#d8f1fa', flex: 0.1}} />
      <View style={{flex: 0.8}}> 
        <Text style={styles.counterwords}>DAYS</Text>
      </View>
    <View style={{backgroundColor: '#d8f1fa', flex: 0.1}} />
    </View>
  </View>

  <View style={{backgroundColor: 'white', flex: 0.025}}>
  </View>

  <View style={{flex: 0.175}}>
    <YourHour/>
  </View>
  <View style={{flex: 0.20}}>
    <View style={styles.counterwordbox}>
      <View style={{backgroundColor: '#d8f1fa', flex: 0.1}} />
      <View style={{flex: 0.8}}> 
        <Text style={styles.counterwords}>HOURS</Text>
      </View>
    <View style={{backgroundColor: '#d8f1fa', flex: 0.1}} />
    </View>
  </View>
</View>

<View style={{flexDirection: 'row', padding:0, paddingTop:15, paddingHorizontal:12}}>
  <View style={{flex: 0.175}}>
    <YourMin/>
  </View>
  <View style={{flex: 0.16}}>
    <View style={styles.counterwordbox}>
      <View style={{backgroundColor: '#d8f1fa', flex: 0.1}} />
      <View style={{flex: 0.8}}> 
        <Text style={styles.counterwords}>MINS</Text>
      </View>
    <View style={{backgroundColor: '#d8f1fa', flex: 0.1}} />
    </View>
  </View>

  <View style={{flex: 0.025}}>
  </View>

  <View style={{flex: 0.175}}>
  <YourSec/>

  </View>
  <View style={{flex: 0.125}}>
    <View style={styles.counterwordbox}>
      <View style={{backgroundColor: '#d8f1fa', flex: 0.1}} />
      <View style={{flex: 0.8}}> 
        <Text style={styles.counterwords}>SECS</Text>
      </View>
    <View style={{backgroundColor: '#d8f1fa', flex: 0.1}} />
    </View>
  </View>
</View>


</View>     

              <Text style={styles.until}>
              until BC votes on
              </Text>

              <Text style={styles.may}>
              MAY 9
              </Text>
</View>
            </BackgroundImage>
    );
  }
}

const handleTimerComplete = () => alert("custom completion function");

const options = {

};



const styles = StyleSheet.create({
  container: {
    width: Style.CARD_WIDTH,
    height: Style.CARD_HEIGHT, 
    padding: Style.CARD_PADDING_X,
    paddingTop: Style.CARD_PADDING_Y,
    paddingBottom: Style.CARD_PADDING_Y,
  },


    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
	mainContainer: {
		flex:1,
        flexDirection:'column',
        justifyContent:'center'
  	},


    logobox: {
      width: 270, 
      height: 70, 
    //  margin: 52, 
    //  marginTop: 45,
      marginBottom: 15,
      backgroundColor: 'rgba(255,255,255,0)',
    },

    build: {
    fontFamily: 'Open Sans',
    fontWeight: "600",
    letterSpacing: -1.5,
    fontSize: Style.FONT_SIZE,
    lineHeight: Style.FONT_SIZE * 1.286,
    color: '#00295a',
    textAlign: 'center',
    margin: 10,
    marginTop: 5,
    backgroundColor: 'rgba(0,0,0,0)',
    },
    build1: {
    letterSpacing: -0.25,
    },
    build2: {
    letterSpacing: -0.5,
    },

    counterbox: {
    //height: 150,  
    height: Style.FONT_SIZE * 4.286,
    //padding: 15,
    //paddingTop: 15,
    padding: Style.FONT_SIZE * 0.429,
    //margin: 22,
    margin: Style.FONT_SIZE * 0.629, 
    marginHorizontal: 30,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,1.0)',
    },

    counternumbers: {
    fontFamily: 'Open Sans Condensed',
    color: '#00a2e1',  
    //height: 50,
    //fontSize: 65,
    //lineHeight: 67,  
    height: Style.FONT_SIZE * 1.429,  
    fontSize: Style.FONT_SIZE * 1.857,
    lineHeight: Style.FONT_SIZE * 1.914,
    padding: 0,
    margin: 0,
    },

counterwordbox:{
	flexDirection: 'column', 
	//height: 50,
	height: Style.FONT_SIZE * 1.429,  
	padding:0
	},

    counterwords: {
    //height: 25,
    //fontSize: 30,  
    //lineHeight: 32,
    height: Style.FONT_SIZE * 0.714,  
    fontSize: Style.FONT_SIZE * 0.857,
    lineHeight: Style.FONT_SIZE * 0.914,

    fontFamily: 'Open Sans Condensed',
    letterSpacing: -0.5,
    color: '#00a2e1',
    margin: 0,
    //marginTop: 7,
    marginTop: Style.FONT_SIZE * 0.2,
    paddingTop: 0, 
    padding: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    },


    until: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    //fontSize: 28,
    //lineHeight: 35,
    fontSize: Style.FONT_SIZE * 0.8,
    lineHeight: Style.FONT_SIZE,   
    letterSpacing: -1.125,
    color: '#00a2e1',
    textAlign: 'center',
    margin: 10,
    marginTop: 10,
    marginBottom: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    },

    may: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    //height: 80,  
    //fontSize: 65,
    //lineHeight: 80,
    height: Style.FONT_SIZE * 2.286,  
    fontSize: Style.FONT_SIZE * 1.857,
    lineHeight: Style.FONT_SIZE * 2.286,
    letterSpacing: -2.5,
    color: '#ffffff',
    textAlign: 'center',
    padding: 0,
    paddingHorizontal: -5,
    margin: 7,
    marginHorizontal: 80,
    backgroundColor: '#ef7918',
    },

});



AppRegistry.registerComponent('TimerProject', () => TimerProject);