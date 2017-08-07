import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class CredentialDetails extends Component {

    onShareInput = (e) => {
        this.props.onShareInput(e.target.value);
    }

    render () {
        const {
            selectedCredential,
            isDeletable,
            onDelete,
            isSharable,
        } = this.props;

        if (!selectedCredential) {
            return null;
        }

        const {
            website,
            username,
            lender_user_id,
            borrower_user_id,
        } = selectedCredential;

        return (
            <div className={'CredentialDetails'}>
                <div className={'website_title'}>{website}</div>
                <div>{username}</div>
                {
                    isSharable
                    ? <div className={'CredentialDetails_sharing'}>
                        <label>Share with:</label>
                        <input
                            type="text"
                            value={borrower_user_id || ''}
                            onChange={this.onShareInput}>
                        </input>
                        <div>(Leave blank to stop sharing)</div>
                    </div>
                    : null
                }
                {
                    isDeletable
                    ? <button
                        className={'CredentialDetails__delete-button'}
                        onClick={onDelete}
                    >
                        Delete
                    </button>
                    : null
                }

            </div>
        );
    }
}
