import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import domtoimage from 'dom-to-image';
import { Portal } from 'react-portal';


function capture() {
    debugger;
    domtoimage.toPng(document.getElementById('badge'), {style: {visibility: 'visible'}})
        .then(function (dataUrl) {
            var img = new Image();
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            img.src =  dataUrl;
            debugger;

            img.onload = function () {
                ctx.drawImage(img, 0, 0);


                window.print()
            }
            // document.body.appendChild(img);
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        })
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {path: logo}

    }
componentDidMount(){
        capture()
}
    render() {
        return (
            <div className="App" >
                <div> This text is portaled into San Francisco!</div>
                <Portal node={document && document.getElementById('badge')}>
                    <img className='bg' style={{flex:1,height:'30vh',width:'30vw'}} src={'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'} />

                    <div> This text is portaled into San Francisco!</div>
                </Portal>
                <div> This text is portaled into San Francisco!</div>
                <div> This text is portaled into San Francisco!</div>

            </div>
        );
    }
}

export default App;
