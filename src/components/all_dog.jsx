import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


import 'decorations/page_frame.css';
import 'decorations/dog.css';

export default class All extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func,
        handleIdchange: PropTypes.func,
        id: PropTypes.string
    };

    constructor(props) {
        super(props);

    }

    handleID(ID){
        this.props.handleIdchange(ID);
    }

    render() {
      return (
        <div>
          <h1 id = "normal-area">校園常見狗狗介紹</h1>
          <div className = "dog-demo">
            <Link to="/eachDog" onClick = {() => this.handleID("Hau-mei")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>畫眉♂</h4>
                  <h4>Hau-mei</h4>
                </div>
                <img src = "images/畫眉.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("A-gun")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>阿幹♀</h4>
                  <h4>A-gun</h4>
                </div>
                <img src = "images/阿幹.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Lally")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>小豬♀</h4>
                  <h4>Lally</h4>
                </div>
                <img src = "images/小豬.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("A-Vai")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>阿醜♀</h4>
                  <h4>A-Vai</h4>
                </div>
                <img src = "images/阿醜.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("O-tun")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>黑糖♀</h4>
                  <h4>O-tun</h4>
                </div>
                <img src = "images/黑糖.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Jimmy")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>布丁♂</h4>
                  <h4>Jimmy</h4>
                </div>
                <img src = "images/布丁.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Good-dog")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>乖狗♂</h4>
                  <h4>Good-dog</h4>
                </div>
                <img src = "images/乖狗.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Superman")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>超人♂</h4>
                  <h4>Superman</h4>
                </div>
                <img src = "images/超人.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Meatball")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>小丸子♀</h4>
                  <h4>Meatball</h4>
                </div>
                <img src = "images/小丸子.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Sam")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>傷傷♂</h4>
                  <h4>Sam</h4>
                </div>
                <img src = "images/傷傷.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Golden")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>金毛♀</h4>
                  <h4>Golden</h4>
                </div>
                <img src = "images/金毛.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Pi-dan")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>皮蛋♂</h4>
                  <h4>Pi-dan</h4>
                </div>
                <img src = "images/皮蛋.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Hanamaki")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>花捲♀</h4>
                  <h4>Hanamaki</h4>
                </div>
                <img src = "images/花捲.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Harry")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>囧媽♀</h4>
                  <h4>Harry</h4>
                </div>
                <img src = "images/囧媽.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Towel")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>抹布♀</h4>
                  <h4>Towel</h4>
                </div>
                <img src = "images/抹布.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Eric")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>巧虎♂</h4>
                  <h4>Eric</h4>
                </div>
                <img src = "images/巧虎.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Black")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>黑胖♂</h4>
                  <h4>Black</h4>
                </div>
                <img src = "images/黑胖.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("White")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>小白♀</h4>
                  <h4>White</h4>
                </div>
                <img src = "images/小白.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Orange")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>橘子♂</h4>
                  <h4>Orange</h4>
                </div>
                <img src = "images/橘子.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Sheriff")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>警長♂</h4>
                  <h4>Sheriff</h4>
                </div>
                <img src = "images/警長.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Little-Black")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>小黑♀</h4>
                  <h4>Little-Black</h4>
                </div>
                <img src = "images/小黑.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Gouda")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>技安♂</h4>
                  <h4>Gouda</h4>
                </div>
                <img src = "images/技安.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Jackal")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>胡狼♂</h4>
                  <h4>Jackal</h4>
                </div>
                <img src = "images/胡狼.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Flower")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>小小花♂</h4>
                  <h4>Flower</h4>
                </div>
                <img src = "images/小小花.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Hang-Hang")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>吊吊♂</h4>
                  <h4>Hang-Hang</h4>
                </div>
                <img src = "images/吊吊.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Malt")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>麥芽♀</h4>
                  <h4>Malt</h4>
                </div>
                <img src = "images/麥芽.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Hei-lu-lu")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>黑嚕嚕♂</h4>
                  <h4>Hei-lu-lu</h4>
                </div>
                <img src = "images/黑嚕嚕.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Tea-Tea")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>茶茶♀</h4>
                  <h4>Tea-Tea</h4>
                </div>
                <img src = "images/茶茶.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Caramel")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>焦糖♂</h4>
                  <h4>Caramel</h4>
                </div>
                <img src = "images/焦糖.jpg"/>
              </div>
            </Link>
            <Link to="/eachDog" onClick = {() => this.handleID("Ding-Ding")}>
              <div className = "gallery overlay black">
                <div className = "text-box">
                  <h4>丁丁♀</h4>
                  <h4>Ding-Ding</h4>
                </div>
                <img src = "images/丁丁.jpg"/>
              </div>
            </Link>
          </div>
        </div>
      );
    }
}
