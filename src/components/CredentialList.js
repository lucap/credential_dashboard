import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class CredentialList extends Component {

    onClick = (e) => {
        this.props.onSelectedCredential(
            e.currentTarget.dataset.id
        );
    }

    render () {
        const {credentials} = this.props;

        if (_.isEmpty(credentials)) {
            return (
                <div className={'CredentialList'}>
                    This list is empty
                </div>
            );
        }

        return (
            <div className={'CredentialList'}>
                {credentials.map((credentials, index) => {
                    return (
                        <div
                            key={index}
                            data-id={index}
                            onClick={this.onClick}
                            className={'CredentialList__item'}
                        >
                            <div className={'website_title'}>{credentials.website}</div>
                            <div>{credentials.username}</div>
                            {
                                credentials.borrower_user_id
                                ? <div className={'CredentialList__shared'}>Shared</div>
                                : null
                            }
                        </div>
                    );}
                )}
            </div>
        );
    }
}
