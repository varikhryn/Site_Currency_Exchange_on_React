import './GChart.css';
import React from "react";
import Chart from "react-google-charts";

class GChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentDate: '',
            ourCurMonths: [],
        }
    }

    static getDerivedStateFromProps(props, state) {
        return { symbols: props.symb };
    }

    render() {
        return (
            <section>
                <Chart
                    width={'100%'}
                    height={'70vh'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={this.props.allData}
                    options={{
                        hAxis: {
                            title: 'Дни',
                        },
                        vAxis: {
                            title: 'Курс',
                        },
                        series: {
                            1: { curveType: 'function' },
                        },
                    }}
                    rootProps={{ 'data-testid': '4' }}
                />


            </section >
        );
    }
}

export default GChart;