/**
 * External dependencies
 */
import { isEmpty } from 'lodash';

import {
	DOWN,
	ENTER
} from '@wordpress/keycodes';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import {
	Component,
	Fragment,
	createRef,
} from '@wordpress/element';

import {
	focus
} from '@wordpress/compose';

import {
	createBlock
} from '@wordpress/blocks';

import {
	compose,
	ifCondition,
} from '@wordpress/compose';

import {
	select,
	withSelect,
	withDispatch,
	dispatch,
} from '@wordpress/data';

import {
	withSpokenMessages,
	Modal,
	Button,
} from '@wordpress/components';


class ThreeEntersToSpacer extends Component {
	constructor() {
		super( ...arguments );

		this.nameInput = createRef();
		this.focus = this.focus.bind( this );
	}
	componentDidMount() {
		this.focus();
	}
 
	onKeyDown( event ) {
		const { keyCode } = event;
		
		if ( keyCode === DOWN ) {
			alert( 'You pressed the down arrow!' );
		} else if ( keyCode === ENTER ) {
			alert( 'You pressed the enter key!' );
		} else {
			alert( 'You pressed another key.' );
		}
	}
	
	focus() {
		if ( null == this.nameInput.current ) {
			// const tabbables = focus.tabbables.find( document.querySelector( '.components-modal--sidetrack-studio-transform-empty' ) );
			return;
		}
	}

	componentDidUpdate() {
		this.focus();
	}

	render() {
		const { getBlocks, getBlockIndex, createSpacer, onToggle, isPrompted } = this.props;
		const isValid = getBlockIndex - 2;

		const closeModal = () => {
			onToggle( 1 );
		};

		if ( isValid < 0 ) {
			return null;
		}
		const getFirst = getBlocks[ isValid ];
		const getSecond = getBlocks[ isValid + 1 ];
		const getThird = getBlocks[ isValid + 2 ];

		if ( getFirst.name !== 'core/paragraph' || getSecond.name !== 'core/paragraph' || getThird.name !== 'core/paragraph' ) {
			return null;
		}

		if ( ! isEmpty( getFirst.attributes.content ) || ! isEmpty( getSecond.attributes.content ) || ! isEmpty( getThird.attributes.content ) ) {
			return null;
		}

		if ( ! isPrompted ) {
			return (
				<Fragment>
					<Modal
						title={ __( 'Enable Shortcut', 'sidetrack-studio' ) }
						onRequestClose={ () => closeModal() }
						shouldCloseOnClickOutside={ false }
						closeLabel={ __( 'Close', 'sidetrack-studio' ) }
						icon={ null }
						className="sidetrack-studio-modal-component components-modal--sidetrack-studio-transform-empty"
					>
						<p>{ __( 'Do you want to automatically transform three(3) consecutive empty paragraphs into Spacer Block?', 'sidetrack-studio' ) }</p>
						<Button isPrimary isLarge onClick={
							() => {
								onToggle( 0 );
								createSpacer( getFirst.clientId, getSecond.clientId, getThird.clientId );
							}
						} ref={ this.nameInput } >
							{ __( 'Yes Enable', 'sidetrack-studio' ) }
						</Button>
						&nbsp;
						<Button isDefault isLarge onClick={ () => closeModal() } >
							{ __( 'No, Thanks', 'sidetrack-studio' ) }
						</Button>
						<p><small>{ __( 'This prompt will only be shown once and will remember your preference. Thanks!', 'sidetrack-studio' ) }</small></p>
					</Modal>
				</Fragment>
			);
		}
		createSpacer( getFirst.clientId, getSecond.clientId, getThird.clientId );

		return null;
	}
}

export default compose(
	withSelect( () => {
		const { getSelectedBlockClientId, getBlockRootClientId, getBlocks, getBlockIndex, getBlocksByClientId } = select( 'core/block-editor' );
		const selectedId = getSelectedBlockClientId();
		const selectedParent = getBlockRootClientId( selectedId );
		let getAllBlocks = getBlocks();
		let getSelectedBlockIndex = getBlockIndex( selectedId );

		if ( ! isEmpty( selectedParent ) ) {
			getAllBlocks = getBlocksByClientId( selectedParent )[ 0 ].innerBlocks;
			getSelectedBlockIndex = getBlockIndex( selectedId, selectedParent );
		}

		return {
			getBlocks: getAllBlocks,
			getBlockIndex: getSelectedBlockIndex,
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitTransformEmptyWriting' ),
			isPrompted: select( 'core/edit-post' ).isFeatureActive( 'editorsKitTransformEmptyWriting' ),
		};
	} ),
	withDispatch( () => ( {
		createSpacer( getFirst, getSecond, getThird ) {
			const { selectBlock, replaceBlock, removeBlocks } = dispatch( 'core/block-editor' );
			const createSpacer = createBlock( 'core/spacer', {} );
			removeBlocks( [ getFirst, getSecond ] );
			replaceBlock( getThird, createSpacer );
			selectBlock( createSpacer.clientId );
		},
		onToggle( disabled ) {
			dispatch( 'core/edit-post' ).toggleFeature( 'editorsKitTransformEmptyWriting' );
			if ( disabled ) {
				dispatch( 'core/edit-post' ).toggleFeature( 'disableEditorsKitTransformEmptyWriting' );
			}
		},
	} ) ),
	ifCondition( ( props ) => {
		return ! props.isDisabled;
	} ),
	withSpokenMessages,
)( ThreeEntersToSpacer );
