import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import template from './header-login.stache';

export const ViewModel = Map.extend({
	define: {}
});

export default Component.extend({
	tag: 'x-header-login',
	template: template,
	viewModel: ViewModel
});