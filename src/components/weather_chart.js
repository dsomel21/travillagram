import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

// export default class Chart extends Component {
export default (props) => {
	return (
		<div>
			<Sparklines height={360} width={480} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg"/>
			</Sparklines>
			<div>{average(props.data)}</div>
		</div>
	)
}