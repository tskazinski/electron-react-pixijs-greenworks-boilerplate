// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

import { Stage , Text } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';
import { testSteamAPI } from '../../steam/steam-tests';

type Props = {};

const style = new PIXI.TextStyle({
  fontFamily: 'Arial',
  fontSize: 20,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fill: ['#fff'],
  stroke: '#000',
  strokeThickness: 1,
  dropShadow: true,
  dropShadowColor: '#669900',
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 5,
  dropShadowDistance: 2,
  wordWrap: true,
  wordWrapWidth: 640
})

export default class Home extends Component<Props> {
  constructor(props) {
    super(props)
    this.process = process
    this.state = {
      steamStatusOutput: ''
   }
  }

  async componentDidMount() {
    try {
      this.setState({
        steamStatusOutput: "waiting..."
      });
      let response = await testSteamAPI();
      this.setState({
        steamStatusOutput: response
      });
    } catch (err) {
      console.error(err)
    }
  }

  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <Stage options={{ backgroundColor: 0x1099bb }} width={800} height={600}> 
          <Text style={style} x={10} y={10} text="Electron version:"/>
          <Text style={style} x={10} y={40} text={process.versions['electron']}/>
          <Text style={style} x={10} y={70} text="Electron architecture:"/>
          <Text style={style} x={10} y={100} text={process.arch}/>
          <Text style={style} x={10} y={130} text="Node.js version:"/>
          <Text style={style} x={10} y={160} text={process.version}/>
          <Text style={style} x={10} y={190} text={this.state.steamStatusOutput}/>
        </Stage>
        <div style={{marginTop:20}}>
          <Link to={routes.COUNTER}>to Counter</Link>
        </div>
      </div>
    );
  }
}
