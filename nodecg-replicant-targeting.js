/**
 * Element class mixin to add the `replicantName` and `replicantBundle` properties
 * to your element. `replicantBundle` is optional and defaults to the current bundle. Once both properties are
 * defined, the target replicant will become available as the `replicant` property.
 *
 * To listen to `change` events emitted by this replicant, add a method called `_replicantValueChanged` to your bundle.
 *
 *     _replicantValueChanged: (newVal, oldVal, operations) => {
 *          // do work...
 *     }
 *
 * The target replicant can be freely changed at any time.
 *
 * It is important to note that the replicant will not be declared until the element has been attached and the current
 * task has finished. This is to avoid two-way binding conflicts. For example, when binding to an `iron-input`
 * element, the `iron-input` will default to a `bind-value` of `""`, which will then be assigned to the Replicant.
 *
 * @polymerMixin
 * @memberof Polymer
 * @summary Element class mixin to add `replicantName` and `replicantBundle` properties.
 */
Polymer.NodeCGReplicantTargeting = Polymer.dedupingMixin(superClass => {
	/**
	 * @polymerMixinClass
	 * @implements {Polymer_NodecgReplicantTargeting}
	 */
	class NodecgReplicantTargeting extends superClass {
		/**
		 * Fired when a new replicant is targeted.
		 *
		 * @event retarget
		 */

		static get properties() {
			return {
				/**
				 * The name of the target replicant.
				 */
				replicantName: {
					type: String
				},

				/**
				 * The bundle namespace of the target replicant. If a NodeCG API context is available (`window.nodecg`),
				 * this defaults to the current bundle (`window.nodecg.bundleName`).
				 */
				replicantBundle: {
					type: String,
					value() {
						if (typeof window.nodecg === 'object') {
							return window.nodecg.bundleName;
						}
					}
				}
			};
		}

		static get observers() {
			return [
				'_retargetReplicant(replicantName, replicantBundle)'
			];
		}

		ready() {
			super.ready();

			// Ensures that the value of "this" is what the user expects in their
			// _replicantValueChanged handler.
			this.__replicantChangeHandler = this.__replicantChangeHandler.bind(this);
		}

		connectedCallback() {
			super.connectedCallback();
			Polymer.RenderStatus.afterNextRender(this, () => {
				this._readyToDeclareReplicant = true;
				if (!this.replicant && this.replicantName && this.replicantBundle) {
					this._declareReplicant(this.replicantName, this.replicantBundle);
				}
			});
		}

		_retargetReplicant(name, bundle) {
			if (!name || !bundle) {
				return;
			}

			// If there is an existing replicant, remove the event listener
			if (this.replicant) {
				this.replicant.removeListener('change', this.__replicantChangeHandler);
			}

			this._declareReplicant(name, bundle);
		}

		_declareReplicant(name, bundle) {
			if (!this._readyToDeclareReplicant) {
				return;
			}

			const opts = {
				schemaPath: `bundles/${encodeURIComponent(bundle)}/schemas/${encodeURIComponent(name)}.json`
			};

			this.replicant = NodeCG.Replicant(name, bundle, opts);
			this.replicant.on('change', this.__replicantChangeHandler);

			this.dispatchEvent(new CustomEvent('retarget', {
				detail: {name, bundle},
				bubbles: false,
				composed: true
			}));
		}

		/**
		 * Used to ensure that the value of "this" is what the user expects in their
		 * _replicantValueChanged handler.
		 * @param args
		 * @private
		 */
		__replicantChangeHandler(...args) {
			if (typeof this._replicantValueChanged === 'function') {
				this._replicantValueChanged(...args);
			}
		}
	}

	return NodecgReplicantTargeting;
});
