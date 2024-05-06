import React, { Component } from 'react'
import Operan from './Operan';

export default class StateProps extends Component {
    constructor(props) { // constructor adalah codingan yang pertama kali dijalankan 
        super(props);
        this.state = {
            makanan : 'Bakso'
        }
    }

    gantiMakanan(makanan_baru) {
        this.setState({
            makanan: makanan_baru
        })
    }

  render() {
    return ( // isi dari return adalah jsx, atau html nya
      <div>
        <h2>{this.state.makanan}</h2>
        <button onClick={() => this.gantiMakanan("Ceker Babat")}>Ganti Makanan</button>
        <Operan makanan = {this.state.makanan}/>
      </div>
    )
  }
}
