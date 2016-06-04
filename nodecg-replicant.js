/* eslint-env node */
/* eslint-disable accessor-pairs */
'use strict';

const clone = require('clone');

Polymer({
	is: 'nodecg-replicant',

	/**
	 * Fired when the value of the target replicant changes.
	 *
	 * @event change
	 */

	hostAttributes: {
		hidden: true
	},

	behaviors: [
		Polymer.NodeCGReplicantTargetingBehavior
	],

	get value() {
		if (this.replicant) {
			return this.replicant.value;
		}
	},

	set value(newVal) {
		if (this.replicant) {
			this.replicant.value = newVal;
			return this.replicant.value;
		}
	},

	_replicantChanged: function (newVal, oldVal, operations) {
		const clonedNewVal = clone(newVal);
		this.fire('value-changed', {value: clonedNewVal}, {bubbles: false});
		this.fire('change', {
			newVal: clonedNewVal,
			oldVal: oldVal,
			operations: operations
		}, {bubbles: false});
	}
});
