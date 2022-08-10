import React from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons'

export default class Like extends React.Component {
  state = {
    clicked:false
  }  

  toggleBtnHandler = () => {
    return this.setState({
      clicked:!this.state.clicked
    })
    
  }
  render() {
    const styles = ['button'];
    let text = <HeartOutlined />;
    let bodyEl = document.body;
    
    if (this.state.clicked) {
      styles.push('clicked');
      text = <HeartFilled style={{color: '#DB3406' }} />;
    } 
    return (
    <div>
      <button className={styles.join(' ')} onClick={this.toggleBtnHandler}>{text}</button>
    </div>
    )
  }
}

