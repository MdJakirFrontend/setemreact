import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import MiniCard from '../components/MiniCard/MiniCard'
import StatisticsPlot from '../components/StatisticsPlot/StatisticsPlot'
import JobChart from '../components/JobChart/JobChart'
import DayPick from '../components/DayPick/DayPick'
import PricingSlotColumn from '../components/PricingSlot/PricingSlotColumn'

export default class Dashboard extends Component {
    state = {
        miniCardData: [
            {
                MiniCard_Name: 'Total Views',
                MiniCard_Count: '986B',
                imgSrc: 'assets/img/card-1.png'
            },
            {
                MiniCard_Name: 'Job Post',
                MiniCard_Count: '958',
                imgSrc: 'assets/img/card-2.png'
            },

            {
                MiniCard_Name: 'Total Application',
                MiniCard_Count: '65k',
                imgSrc: 'assets/img/card-3.png'
            },
            {
                MiniCard_Name: 'Selected Application',
                MiniCard_Count: '540',
                imgSrc: 'assets/img/card-4.png'
            },

            {
                MiniCard_Name: 'Rejected Application',
                MiniCard_Count: '62.5k',
                imgSrc: 'assets/img/card-5.png'
            },

            {
                MiniCard_Name: 'Short Listed',
                MiniCard_Count: '7469',
                imgSrc: 'assets/img/card-6.png'
            },
            {
                MiniCard_Name: 'Total Question',
                MiniCard_Count: '7469',
                imgSrc: 'assets/img/card-7.png'
            },
            {
                MiniCard_Name: 'Total Review',
                MiniCard_Count: '7469',
                imgSrc: 'assets/img/card-7.png'
            },
        ]
    }

    render() {
        return (
            <>
                <main id="main-content">
                    <Row>
                        <MiniCard cardObj={this.state.miniCardData} />
                    </Row>
                    <Row>
                        <Col xl={8} className={'mb-4'}>
                            <StatisticsPlot />
                        </Col>
                        <Col xl={4} className={'mb-4'}>
                            <JobChart />
                        </Col>
                    </Row>
                    <div className={'customRowGird'}>
                        <PricingSlotColumn />
                        <DayPick />
                    </div>
                </main>
            </>
        )
    }
}
