import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap';
import './MiniCard.scss';
// import { FaBeer } from 'react-icons/fa';

export default class MiniCard extends Component {
    render() {
        return (
            <>
                {
                    this.props.cardObj.map((value, index) => {
                        return (
                            <Col xl="3" md="6" key={index}>
                                <Card key={index} className="mini-card bg-white mb-4 border-0">
                                    <div className="card-body d-flex justify-content-between align-items-center">
                                        <div className="mini-stat-icon">
                                            <p>{value.MiniCard_Name}</p>
                                            <h3>{value.MiniCard_Count}</h3>
                                        </div>
                                        <div className="card-icon text-white">
                                            <img src={value.imgSrc} alt="card-img" className="img-fluid" />
                                            {/* <FaBeer /> */}
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        )
                    })
                }
            </>
        )
    }
}
