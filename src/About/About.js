import "./About.css";

import React from "react";
import SwiperT from "../SwiperT/SwiperT";


class About extends React.Component {
    render() {
        return (
            <section className="section-about">
                <div className="title_h1">
                    <h1>О нас</h1>
                </div>
                <div className="blc-itm">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit recusandae quia ipsa dicta accusamus animi culpa et sed quibusdam eveniet rerum maxime pariatur, mollitia atque exercitationem nostrum fugit? Possimus, accusantium.</p>
                </div>
                <div className="block_img blc-itm" >
                    <img src='https://ktonanovenkogo.ru/image/bank-chto-takoe.jpg' alt="bank" />
                </div>
                <div className="blc-itm">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit recusandae quia ipsa dicta accusamus animi culpa et sed quibusdam eveniet rerum maxime pariatur, mollitia atque exercitationem nostrum fugit? Possimus, accusantium.</p>
                </div>
                <div className="title_h2">
                    <h2>Компании которые доверяют нам</h2>
                </div>
                <SwiperT compayImg={this.props.compayImg} />
            </section>
        )
    }
}

export default About;