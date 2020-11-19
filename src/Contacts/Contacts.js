import './Contacts.css';
import React from "react";

class Contacts extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {

        return (
            <section>
                <div className="title_h1">
                    <h1>Контакты</h1>
                </div>
                <div className="blc-itm blc-info">
                    {this.props.info.map((itm, index) => {
                        return (
                            <div className="blc-info_itm" key={index}>
                                <h3>{itm.name}</h3>
                                <p>{itm.data}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="blc-itm">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit recusandae quia ipsa dicta accusamus animi culpa et sed quibusdam eveniet rerum maxime pariatur, mollitia atque exercitationem nostrum fugit? Possimus, accusantium.</p>
                </div>
                <div className="title_h2">
                    <h2>Наше местоположение</h2>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.522654507985!2d30.43174741573138!3d50.44999137947533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc3c6153322f%3A0xa64808701ca980d1!2z0YPQuy4g0JPQsNGA0LzQsNGC0L3QsNGPLCAxNCwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1605786434947!5m2!1sru!2sua" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" title="Maps"></iframe>
            </section>
        )
    }
}

export default Contacts;