import React from 'react'
import { Picker, List } from 'antd-mobile'
import 'antd-mobile/lib/picker/style/css';
import city from './city'


export default class MyPicker extends React.Component {
  render() {
    return (
      <List>
        <Picker extra="省、市、区" data={city} cols={2} onOk={this.Adresszc}>
          <List.Item arrow="horizontal">现住址</List.Item>
        </Picker>
      </List>
    )
  }
}
