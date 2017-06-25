import React, { Component } from 'react';
import { connect } from 'react-redux';

class Intro_2 extends Component {
    render() {
        return (
            <div>
                <div className="cont1">
                    <img src="http://i.imgur.com/1TMa7D9.jpg" height="250" width="250" />
                    <div className="text">
                        <font>主題 :羊毛氈</font>
                        <p>內容:羊毛氈是目前人類歷史記載中最古老的織品形式，可追溯至西元前六千五百年，距今至少八千多年的</p>
                        <p>歷史，屬於非編織而成的織品形式，比紡織、針織等技術更早被人類所使用。羊毛兼具柔軟與強韌的特質，</p>
                        <p>纖維彈性佳，觸感舒服，又具良好的還原性。因此羊毛氈製品摺疊後，都能很快回復原狀，不易變形。加上</p>
                        <p>其纖維結構可緊密糾結，其強韌的特性不需透過針織 、縫製等加工，可完全一體成形。</p>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="cont1">
                    <img src="http://i.imgur.com/AB21YGB.jpg" height="250" width="250" />
                    <div className="text">
                        <font>主題 :娃娃屋</font>
                        <p>內容:袖珍藝術不再只存在於博物館，也能自己動手做。想要一探各國的風情，卻苦無機會嗎？沒關係，就讓</p>
                        <p>娃娃屋來實現這個願望。造訪不一樣的空間，從亞洲來到美洲、歐洲；抑或是探索不一樣時空，從華麗宮廷</p>
                        <p>到中古世紀莊園。如果你只是喜歡可愛的小東西，那娃娃屋絕對是你的好選擇，各種迷你的家具、衣服...還</p>
                        <p>能不心動嗎？</p>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="cont3">
                    <img src="http://i.imgur.com/t04HedR.jpg" height="250" width="250" />
                    <div className="text">
                        <font>主題 :糖霜餅乾</font>
                        <p>內容:『糖霜＋餅乾！』就像畫筆與畫紙，能創作出讓人驚喜的各種造型。很夢幻、很甜美，也能很有個性、帶著</p>
                        <p>時髦的大人童話感。『蛋白＋糖粉＋加點調色』，打出的糖霜，就像色筆一般，能畫出無限的創意可能，將餅乾</p>
                        <p>變成捨不得吃的漂亮禮物。糖霜簡單地可分三種：較硬的、適中的、以及較軟的；或者說硬性的、濃性的、跟濕性</p>
                        <p>的。硬性糖霜即一開始打好的狀態，用在拉出餅乾外框線當作界線，讓填入的濕性糖霜可以在此範圍內流動，就</p>
                        <p>像堤防那樣，讓流動的糖霜可以待在裡面。這種糖霜也會用來寫字、做裝飾線條、擠出各種立體形象。</p>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="cont4">
                    <img src="http://i.imgur.com/r2hKCU5.jpg" height="250" width="250" />
                    <div className="text">
                        <font>主題 :手工裁縫</font>
                        <p>想要跟別人有不一樣的包包嗎？可以試試自己拼布裁縫喔，選擇自己要的花色、大小、樣式，全部都能依自己的喜</p>
                        <p>好來製作。零錢包、手機包、側背的小包包、手提包每種都擁有獨一無二的風格，讓你每天都擁有不同的好心情。</p>
                    </div>
                    <div className="line"></div>
                </div>
            </div>
        );
    }
}



export default Intro_2;