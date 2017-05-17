import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';
import {connect} from 'react-redux';

import 'decorations/page_frame.css';
import 'decorations/carelife_style.css';
import 'decorations/question.css';

export default class CarelifeQuestion extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let h2 = document.getElementsByClassName('q-title');

        for(let i=0;i<h2.length; i++) {
            h2[i].addEventListener("click", function(){
                if(this.nextSibling.className === "answer") {
                    this.nextSibling.className = "answer open";
                }
                else {
                    this.nextSibling.className = "answer";
                }
            });
        }
    }





    render() {
        return (
          <div id = "introduction" className = "wow animated fadeInLeft">
    				<div className = "content">
    					<h1>常見Ｑ＆Ａ</h1>

    					<div className = "question">
    						<h2 className = "q-title">
    						Ｑ1：我很喜歡學校的狗，我可以帶他們回家嗎？
    						</h2>
    						<div className = "answer">
    							<p>Ａ：學校裡的每一隻狗都可以認養。清大也有同學因為跟狗狗感情很好，而將校園裡面的狗狗認養回家。只要經過懷生社評估，確定居家環境及家庭都適合養狗，同時你也有一顆對狗狗不離不棄的心，就可以簽署認養同意書喔！我們也鼓勵同學們把狗狗認養回家，給他們一個溫暖的家。
    							</p>
    						</div>
    					</div>

    				</div>
    				<div className = "other-infor wow animated fadeInLeft">
    					<div id = "logo">
    						<img src = "" alt = "LOGO"/>
    					</div>
    					<div id = "link">
    						<h1>粉專連結</h1>
    					</div>
    					<div id = "donate">
    						<h1>捐款資訊</h1>
    						<p>◆若你想幫助狗狗們，可以捐款 / 捐物資 ( 飼料、罐頭等 )給我們，資金和物資將全數用在校浪身上
    						</p>

    						<h2>關懷生命社郵局戶口：</h2>
    						<p>帳號 / 0061021 0605612</p>
    						<p>戶名 / 國立清華大學關懷生命社</p>
    						<p>( 可以 ATM 轉帳 )</p>

    						<h2>台灣銀行新竹分行：</h2>
    						<p>帳號 / 015036070041</p>
    						<p>戶名 / 國立清華大學 401 專戶</p>
    						<p>(須臨櫃匯款，並指名捐給清大關懷生命社 )</p>
    					</div>
    				</div>
    			</div>
        );
    }
}
