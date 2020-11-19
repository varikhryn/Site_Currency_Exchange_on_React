import "./Rate.css";

import React from "react";

import Calc from "../Calc/Calc";

import GChart from "../GChart/GChart"

class Rate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "date": '',
            "currencyRate": {},
            currentDate: '',
            ourCurMonths: [],
        };

        this.currency = ["USD", "BGN", "PLN", "CHF"];

        this.getRate();

        this.getData();
    }

    getRate = () => {
        fetch('https://api.exchangeratesapi.io/latest')
            .then(data => {
                return data.json();
            })
            .then(data => {
                this.setState({
                    "date": data.date,
                });

                let result = {};

                for (let i = 0; i < this.currency.length; i++) {
                    result[this.currency[i]] = data.rates[this.currency[i]];
                }

                this.setState({
                    "currencyRate": result
                })
            })
    }

    // for Google Chart
    getData = () => {
        // fetch('https://api.exchangeratesapi.io/history?start_at=2020-11-15&end_at=2020-11-19')
        fetch(`${this.getOnetMonth()}`)
            .then(dataM => {
                return dataM.json();
            })
            .then(dataM => {
                this.getOurCur();

                this.addOurValue(dataM);

                this.setDataForChart();
            }
            )
    }

    addOurValue = (data) => {
        let rez = [];
        Object.keys(data.rates).map((elem) => {
            let obj = { 'date': elem, 'curVal': data.rates[elem], }
            return rez.push(obj);
        });

        rez.sort(function (a, b) {
            var nameA = a.date, nameB = b.date;
            if (nameA < nameB)
                return -1;
            if (nameA > nameB) return 1;
            return 0;
        })

        this.setState({
            ourCurMonths: rez,
        });
    }

    getOnetMonth = () => {
        let dt = new Date();
        let m = dt.getMonth() + 1;
        let mBefore = dt.getMonth();
        let y = dt.getFullYear();
        let d = dt.getDate();

        return `https://api.exchangeratesapi.io/history?start_at=${y}-${mBefore}-${d}&end_at=${y}-${m}-${d}&symbols=${this.getOurCur()}`
    }

    getOurCur = () => {
        let ours = this.currency;
        let rez = '';
        ours.map((item, index) => {
            if (index !== ours.length - 1) {
                return rez += item + ',';
            } else {
                return rez += item;
            }
        })

        return rez;
    }

    componentDidMount() {

    }

    setDataForChart = () => {
        let arr = [];
        let arrFirst = [];
        arrFirst.push('Дни');


        this.currency.map(item => {
            return arrFirst.push(item);
        });
        arr.push(arrFirst);

        this.state.ourCurMonths.map((el) => {
            let mas = [];
            mas.push(el.date);
            this.currency.map(k => {
                return mas.push(el.curVal[k]);
            })

            return arr.push(mas);
        })

        this.setState({
            ourData: arr,
        })
    }


    render() {
        return (
            <div className="rate">
                <h3> Курс валют на {this.state.date}</h3>
                <div className="flex-container">

                    {Object.keys(this.state.currencyRate).map((keyName, i) =>
                        (
                            <div className="block flex-item" key={keyName}>
                                <div className="currency-name">{keyName}</div>
                                <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)} *</div>
                                <p>* Можно купить за 1 EUR</p>
                            </div>
                        )
                    )}
                </div>

                <Calc rate={this.state.currencyRate} cur={this.currency} />

                <GChart symb={this.currency} allData={this.state.ourData} />
            </div>
        );
    }
}

export default Rate;