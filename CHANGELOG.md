# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.0.1"></a>
## [1.0.1](https://github.com/nodecg/nodecg-replicant/compare/v1.0.0...v1.0.1) (2017-08-10)


### Bug Fixes

* don't bubble `change` events ([3e95ec8](https://github.com/nodecg/nodecg-replicant/commit/3e95ec8))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/nodecg/nodecg-replicant/compare/v0.5.9...v1.0.0) (2017-06-01)


### Code Refactoring

* port to Polymer 2 ([#4](https://github.com/nodecg/nodecg-replicant/issues/4)) ([c922226](https://github.com/nodecg/nodecg-replicant/commit/c922226))


### BREAKING CHANGES

* Now requires Polymer 2, will not work on Polymer 1.x
* _replicantChanged has been renamed to _replicantValueChanged. Any instances of _replicantChanged in your code must be changed to _replicantValueChanged.
* Support has been dropped for defining a default value for a Replicant declared via nodecg-replicant. Suggest using a schema instead to enforce a default value.
* The timing of when the initial change event happens may not be exactly the same.



<a name="0.5.9"></a>
## [0.5.9](https://github.com/nodecg/nodecg-replicant/compare/v0.5.8...v0.5.9) (2017-04-28)


### Bug Fixes

* dramatically reduce bundled filesize ([c038588](https://github.com/nodecg/nodecg-replicant/commit/c038588))
* support replicant schemas ([c43e7e4](https://github.com/nodecg/nodecg-replicant/commit/c43e7e4))



<a name="0.5.8"></a>
## [0.5.8](https://github.com/nodecg/nodecg-replicant/compare/v0.5.7...v0.5.8) (2016-06-10)


### Bug Fixes

* now works properly with polmer's data binding ([8047063](https://github.com/nodecg/nodecg-replicant/commit/8047063))



<a name="0.5.7"></a>
## [0.5.7](https://github.com/nodecg/nodecg-replicant/compare/v0.5.6...v0.5.7) (2016-06-04)


### Bug Fixes

* remove debug print ([214ace3](https://github.com/nodecg/nodecg-replicant/commit/214ace3))
* setting a new value wasn't working ([3e65cfd](https://github.com/nodecg/nodecg-replicant/commit/3e65cfd))



<a name="0.5.6"></a>
## [0.5.6](https://github.com/nodecg/nodecg-replicant/compare/v0.5.5...v0.5.6) (2016-05-19)


### Bug Fixes

* fix changes not always being propagated ([5c76f40](https://github.com/nodecg/nodecg-replicant/commit/5c76f40))


### Styles

* **all:** adopt XO style ([890d84e](https://github.com/nodecg/nodecg-replicant/commit/890d84e))


### BREAKING CHANGES

* all: Removed undocumented `_oldValue` property.



<a name="0.5.5"></a>
## [0.5.5](https://github.com/nodecg/nodecg-replicant/compare/v0.5.4...v0.5.5) (2016-03-31)


### Bug Fixes

* **binding:** fix error thrown when splicing an array replicant on Polymer@^1.2.0 ([fb862ed](https://github.com/nodecg/nodecg-replicant/commit/fb862ed))



<a name="0.5.4"></a>
## [0.5.4](https://github.com/nodecg/nodecg-replicant/compare/v0.5.3...v0.5.4) (2016-01-20)



<a name="0.5.3"></a>
## [0.5.3](https://github.com/nodecg/nodecg-replicant/compare/v0.5.2...v0.5.3) (2015-12-09)



<a name="0.5.2"></a>
## [0.5.2](https://github.com/nodecg/nodecg-replicant/compare/v0.5.1...v0.5.2) (2015-11-08)



<a name="0.5.1"></a>
## [0.5.1](https://github.com/nodecg/nodecg-replicant/compare/v0.5.0...v0.5.1) (2015-10-29)



<a name="0.5.0"></a>
# [0.5.0](https://github.com/nodecg/nodecg-replicant/compare/v0.4.0...v0.5.0) (2015-10-27)



<a name="0.4.0"></a>
# [0.4.0](https://github.com/nodecg/nodecg-replicant/compare/v0.3.0...v0.4.0) (2015-10-25)



<a name="0.3.0"></a>
# [0.3.0](https://github.com/nodecg/nodecg-replicant/compare/v0.2.1...v0.3.0) (2015-10-24)



<a name="0.2.1"></a>
## [0.2.1](https://github.com/nodecg/nodecg-replicant/compare/v0.2.0...v0.2.1) (2015-10-24)



<a name="0.2.0"></a>
# [0.2.0](https://github.com/nodecg/nodecg-replicant/compare/v0.1.0...v0.2.0) (2015-10-24)



<a name="0.1.0"></a>
# 0.1.0 (2015-10-23)
