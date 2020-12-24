import React, { Component } from 'react'
import { CardGroup, Card } from 'react-bootstrap';
import DayPicker from 'react-daypicker';
import 'react-daypicker/lib/DayPicker.css';
import './DayPick.scss';


export default class DayPick extends Component {
    render() {
        return (
            <>
                <CardGroup className={'dashboardCalendar'}>
                    <Card className="bg-white border-0 border-radius custom-boxShadow px-4 py-4">
                        <DayPicker active={new Date()} />
                    </Card>
                </CardGroup>
            </>
        )
    }
}
