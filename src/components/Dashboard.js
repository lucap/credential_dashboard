import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import MainMenu from './MainMenu';
import CredentialDetails from './CredentialDetails';
import CredentialList from './CredentialList';


export default class Dashboard extends Component {

    componentWillMount() {
        this.setState({
            data: this.props.data, // initialize the state with mock data
            selectedMenu: 'own_credentials',
            selectedCredentialIndex: null,
        });
    }

    onSelectedMenu = (selectedMenu) => {
        this.setState({
            selectedMenu,
            selectedCredentialIndex: null,
        });
    }

    onSelectedCredential = (index) => {
        this.setState({
            selectedCredentialIndex: index
        });
    }

    onShareInput = (value) => {
        const {
            data,
            selectedMenu,
            selectedCredentialIndex,
        } = this.state;

        const _data = _.cloneDeep(data);
        _data[selectedMenu][selectedCredentialIndex].borrower_user_id = value;

        this.setState({
            data: _data,
        })
    }

    onDelete = () => {
        const {
            data,
            selectedMenu,
            selectedCredentialIndex,
        } = this.state;

        const _data = _.cloneDeep(data);
        _data[selectedMenu].splice(selectedCredentialIndex ,1)

        this.setState({
            data: _data,
            selectedCredentialIndex: null,
        });
    }

    render () {
        const {
            data,
            selectedMenu,
            selectedCredentialIndex,
        } = this.state;

        const selectedCredential = selectedCredentialIndex
            ? data[selectedMenu][selectedCredentialIndex]
            : null;

        return (
            <div className={'Dashboard'}>
                <MainMenu
                    onSelectedMenu={this.onSelectedMenu}
                    selectedMenu={selectedMenu}
                />
                <CredentialList
                    credentials={data[selectedMenu]}
                    selectedCredentialIndex={selectedCredentialIndex}
                    onSelectedCredential={this.onSelectedCredential}
                />
                <CredentialDetails
                    selectedCredential={selectedCredential}
                    isDeletable={selectedMenu === 'own_credentials'}
                    onDelete={this.onDelete}
                    isSharable={selectedMenu === 'own_credentials'}
                    onShareInput={this.onShareInput}
                />
            </div>
        );
    }

}
