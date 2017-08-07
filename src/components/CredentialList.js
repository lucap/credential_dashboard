import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import classNames from "classnames";

export default class CredentialList extends Component {

    onClick = (e) => {
        this.props.onSelectedCredential(
            e.currentTarget.dataset.id
        );
    }

    render () {
        const {
            credentials,
            selectedCredentialIndex,
        } = this.props;

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

                    const itemClasses = classNames({
                        'CredentialList__item': true,
                        'CredentialList__item-selected':
                            selectedCredentialIndex == index,
                    })

                    return (
                        <div
                            key={index}
                            data-id={index}
                            onClick={this.onClick}
                            className={itemClasses}
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
