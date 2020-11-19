import React from "react";
import './App.css';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Rate from "./Rate/Rate";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="site">

        {/* Добавлен свайп слайдер на стрн. контакты */}
        {/* Добавлен Google Char на стрн. На главную стрн. для демонстрации валют за месяц*/}

        <Header menu={this.props.menu} />

        <div className="container">
          <main>
            <Router>
              <Switch>
                <Route exact path="/" component={Rate} />
                <Route path="/about"><About compayImg={this.props.compayImg} /></Route>
                <Route path="/contacts"><Contacts info={this.props.info} /></Route>
              </Switch>
            </Router>
          </main>
        </div>

        <div className="container" id="cookie_info">
          <div className="site-content">
            <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера.<br />В
            частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
            местоположения.&nbsp;<button className="btn btn-primary btn-sm">OK</button></div>
          </div>
        </div>

        <Footer />

      </div>
    );
  }
}

export default App;