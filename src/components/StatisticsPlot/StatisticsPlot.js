import React, { PureComponent } from 'react'
import './StatisticsPlot.scss'
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jun 2020', curveLineByView: 2220, view: 2210,
    },
    {
        name: 'Feb 2020', curveLineByView: 1498, view: 1398,
    },
    {
        name: 'March 2020', curveLineByView: 9300, view: 9200,
    },
    {
        name: 'April 2020', curveLineByView: 4008, view: 3908,
    },
    {
        name: 'May 2020', curveLineByView: 2220, view: 2210,
    },
    {
        name: 'Jun 2020', curveLineByView: 1498, view: 1398,
    },
    {
        name: 'July 2020', curveLineByView: 9300, view: 9200,
    },
    {
        name: 'Aug 2020', curveLineByView: 4008, view: 3908,
    },
    {
        name: 'Aug 2020', curveLineByView: 4008, view: 3908,
    },
    {
        name: 'Oct 2020', curveLineByView: 4008, view: 3908,
    },
    {
        name: 'Sept 2020', curveLineByView: 4008, view: 3908,
    },
    {
        name: 'Nov 2020', curveLineByView: 4008, view: 3908,
    },
    {
        name: 'Dec 2020', curveLineByView: 4008, view: 3908,
    },
    {
        name: 'Jun 2021', curveLineByView: 2220, view: 2210,
    },
    {
        name: 'Feb 2021', curveLineByView: 1498, view: 1398,
    },
    {
        name: 'March 2021', curveLineByView: 9300, view: 9200,
    },
    {
        name: 'April 2021', curveLineByView: 4008, view: 3908,
    },
    {
        name: 'May 2021', curveLineByView: 2220, view: 2210,
    },
    {
        name: 'Jun 2021', curveLineByView: 1498, view: 1398,
    },
    {
        name: 'July 2021', curveLineByView: 9300, view: 9200,
    },
    {
        name: 'Aug 2021', curveLineByView: 4008, view: 3908,
    },
];


export default class StatisticsPlot extends PureComponent {

    render() {
        return (
            <>
                <div className="StatisticsPlot bg-white py-4 px-2 custom-boxShadow">
                    <ResponsiveContainer width='100%' height={300}>
                        <ComposedChart data={data}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Bar dataKey="view" barSize={20} fill="#F5F6F8" />
                            <Line type="monotone" dataKey="view" stroke="#55A747" strokeWidth="2" />
                        </ComposedChart>
                    </ResponsiveContainer>

                </div>
            </>
        )
    }
}

