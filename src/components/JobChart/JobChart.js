import React, { Component } from 'react'
import { CardGroup, Card } from "react-bootstrap";
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import './JobChart.scss';


export default class JobChart extends Component {
    render() {

        const ChartData = {
            columns: [
                ["Job Post", 12],
                ["Total Application", 30],
                ["Selected Application", 20],
                ["Rejected Application", 10],
                ["Short Listed", 10]
            ],
            type: "donut",
            donut: {
                label: {
                    show: false
                },
                width: 40
            },
            color: {
                pattern: ["#55A747", "#FFDA83", "#55D8FE", "#A3A0FB", "#FF8B8B"]
            },
            size: {
                height: 240,
            },
            legend: {
                show: true,
                position: 'right'
            }
        };

        return (
            <>
                <CardGroup className={'JobChart'}>
                    <Card className={'border-0 px-3 py-4 custom-boxShadow'}>
                        <Card.Title className="card-title mb-4 ml-4 pt-2">Job Statistics</Card.Title>
                        <Card.Body className={'py-0 px-0'}>
                            <C3Chart data={ChartData} legend={ChartData.legend} color={ChartData.color} size={ChartData.size}/>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </>
        )
    }
}
