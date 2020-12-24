
import React, { Component } from 'react'
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';
import  './PricingSlotColumn.scss';

export default class PricingSlotColumn extends Component {
    submit() {
        console.log('PricingSlot submit')
    }
    render() {
        return (
            <>
                <PricingTable highlightColor='#1976D2' ClassName="stprice-wrap">
                    <PricingSlot onClick={this.submit.bind(this)} buttonText='Current Package' title='FREE' priceText='$0.00'>
                        <PricingDetail><p>Can post jobs<span>15</span></p></PricingDetail>
                        <PricingDetail><p>Package Duration<span>15 Days</span></p></PricingDetail>
                        <PricingDetail><p>Availed Quota<span>30</span></p></PricingDetail>
                        <PricingDetail><p>Total Member<span>60</span></p></PricingDetail>
                        <PricingDetail><p className="border-none">Total Application<span>940</span></p></PricingDetail>
                    </PricingSlot>
                    
                    <PricingSlot highlighted onClick={this.submit.bind(this)} buttonText='Buy Now' title='Basic' priceText='$69'>
                        <PricingDetail><p>Can post jobs<span>648</span></p></PricingDetail>
                        <PricingDetail><p>Package Duration<span>120 Days</span></p></PricingDetail>
                        <PricingDetail><p>Availed Quota<span>50+</span></p></PricingDetail>
                        <PricingDetail><p>Total Member<span>598</span></p></PricingDetail>
                        <PricingDetail><p className="border-none">Total Application<span>98540</span></p></PricingDetail>
                    </PricingSlot>

                    <PricingSlot onClick={this.submit.bind(this)} buttonText='Buy Now' title='Premium' priceText='$286'>
                        <PricingDetail><p>Can post jobs<span>648</span></p></PricingDetail>
                        <PricingDetail><p>Package Duration<span>120 Days</span></p></PricingDetail>
                        <PricingDetail><p>Availed Quota<span>50+</span></p></PricingDetail>
                        <PricingDetail><p>Total Member<span>598</span></p></PricingDetail>
                        <PricingDetail><p className="border-none">Total Application<span>654790+</span></p></PricingDetail>
                    </PricingSlot>
                </PricingTable>
            </>
        )
    }
}


