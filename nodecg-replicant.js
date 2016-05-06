'use strict';

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

	/**
	 * The current value of the target replicant.
	 *
	 * @return {*}
	 */
	_replicantChanged(newVal, oldVal, operations) {
		this.fire('value-changed', {value: newVal}, {bubbles: false});
		this.notifyPath('value', newVal);
		this.fire('change', {oldVal, newVal, operations}, {bubbles: false});
	}
});
