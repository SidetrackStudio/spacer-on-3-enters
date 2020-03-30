/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import {
	registerPlugin
} from '@wordpress/plugins';


/**
 * Internal dependencies
 */
import ThreeEntersToSpacer from './transform.js'

registerPlugin( 'three-enters-to-spacer', {
	icon: false,
	render: ThreeEntersToSpacer,
} );
