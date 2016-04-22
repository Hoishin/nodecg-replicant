'use strict';

const objectPath = require('object-path');

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
	_replicantChanged(oldVal, newVal, changes) {
		this.fire('value-changed', {value: newVal}, {bubbles: false});

		if (changes) {
			changes.forEach(change => {
				const pathParts = change.path.slice(0);
				pathParts.unshift('value');
				const path = pathParts.join('.');

				// squelch splice notifications to avoid issues
				const prop = change.path.slice(-1)[0];
				const parent = objectPath.get(newVal, change.path.slice(0, -1));
				if (prop === 'splices' && Array.isArray(parent)) {
					return;
				}

				switch (change.type) {
					case 'add':
					case 'update':
					case 'delete':
						this.notifyPath(path, change.newValue);
						break;
					case 'splice': {
						/* Because Polymer is keeping its own internal copy of the Replicant's value in
						 a WeakMap, we have to alter the `removed` items of our splice record to point
						 to the items already in Polymer's store, otherwise it will fail to remove them. */

						// Lange 2016-03-31: this might not be necessary anymore. `coll` seems to be undefined
						// and this block throws an error, but things seem to still work?
						// I've wrapped it in an if statement for now.
						const coll = Polymer._collections.get(this.value);
						if (coll) {
							const storeKeys = Object.keys(coll.store);
							for (let i = 0; i < change.removedCount; i++) {
								const removedItemIndexInStore = storeKeys[change.index];
								change.removed[i] = objectPath.get(coll.store, change.path)[removedItemIndexInStore];
							}
						}

						this.notifySplices(path, [change]);
						break;
					}
					default:
						throw new Error('Unexpected change type "${change.type}"');
				}
			});
		}

		this.fire('change', {oldVal, newVal, changes}, {bubbles: false});
	}
});
