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

	properties: {
		value: {
			notify: true
		}
	},

	hostAttributes: {
		hidden: true
	},

	behaviors: [
		Polymer.NodeCGReplicantTargetingBehavior
	],

	set value(newVal) {
		if (this.replicant) {
			this.replicant.value = newVal;
			return this.replicant.value;
		}
	},

	_replicantChanged: function (newVal, oldVal, operations) {
		this.value = clone(newVal);
		this.fire('change', {
			newVal: newVal,
			oldVal: oldVal,
			operations: operations
		}, {bubbles: false});
	}
});
