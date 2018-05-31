/**
 * @customElement
 * @polymer
 * @appliesMixin Polymer.MutableData
 * @appliesMixin Polymer.NodeCGReplicantTargeting
 */
class NodecgReplicant extends Polymer.NodeCGReplicantTargeting(Polymer.MutableData(Polymer.Element)) {
	/**
	 * Fired when the value of the target replicant changes.
	 * @event change
	 */

	static get is() {
		return 'nodecg-replicant';
	}

	static get properties() {
		return {
			value: {
				type: Object,
				observer: '_exposedValueChanged',
				notify: true
			}
		};
	}

	_exposedValueChanged(newVal) {
		if (!this._ignoreExposedValueObserver && this.replicant) {
			this.replicant.value = newVal;
			return this.replicant.value;
		}
	}

	_replicantValueChanged(newVal, oldVal, operations) {
		this._ignoreExposedValueObserver = true;
		this.set('value', newVal);
		this._ignoreExposedValueObserver = false;
		this.dispatchEvent(new CustomEvent('change', {
			detail: {newVal, oldVal, operations},
			bubbles: false,
			composed: false
		}));
	}
}

customElements.define('nodecg-replicant', NodecgReplicant);
