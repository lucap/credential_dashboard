const MenuItems = [
    {id: 'own_credentials', display: 'My Credentials'},
    {id: 'shared_with_me', display: 'Shared with Me'}
]


class Dashboard extends React.Component {

    componentWillMount() {
        this.setState({
            data: this.props.data, // initialize the state with mock data
            selectedMenu: MenuItems[0].id,
            selectedCredentialIndex: null,
        });
    }

    onSelectedMenu = (selectedMenu) => {
        this.setState({
            selectedMenu
        });
    }

    onSelectedCredential = (index) => {
        this.setState({
            selectedCredentialIndex: index
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
                    onSelectedCredential={this.onSelectedCredential}
                />
                {
                    selectedCredential
                    ? <CredentialDetails
                        selectedCredential={selectedCredential}
                    />
                    : null
                }

            </div>
        );
    }

}

class MainMenu extends React.Component {

    onClick = (e) => {
        this.props.onSelectedMenu(
            e.currentTarget.dataset.id
        );
    }

    render () {
        return (
            <div className={'MainMenu'}>
                {MenuItems.map((item) => {
                    const classname = this.props.selectedMenu === item.id
                        ? 'selected'
                        : null;
                    return (
                        <div
                            key={item.id}
                            data-id={item.id}
                            onClick={this.onClick}
                            className={classname}
                        >
                            {item.display}
                        </div>
                    );}
                )}
            </div>
        );
    }
}

class CredentialList extends React.Component {

    onClick = (e) => {
        this.props.onSelectedCredential(
            e.currentTarget.dataset.id
        );
    }

    render () {
        return (
            <div className={'CredentialList'}>
                {this.props.credentials.map((credentials, index) => {
                    return (
                        <div
                            key={index}
                            data-id={index}
                            onClick={this.onClick}
                            className={'CredentialList__item'}
                        >
                            <div className={'CredentialList__website'}>{credentials.website}</div>
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

class CredentialDetails extends React.Component {

    render () {
        return (
            <div className={'CredentialDetails'}>
                <div>Mock Data</div>
                <div>username</div>
                <div>password</div>
            </div>
        );
    }

}

const mungeData = (data) => {
    // merge shared_with_others into own_credentials
    const _data = _.cloneDeep(data);
    _data.shared_with_others.map( (shared_credential) => {
        _data.own_credentials.map( (own_credential, index) => {
            if (own_credential.website === shared_credential.website &&
                own_credential.username === shared_credential.username
            ) {
                own_credential.borrower_user_id = shared_credential.borrower_user_id;
            }
        })
    })

    delete _data.shared_with_others;
    return _data;
}

// load the initial data
axios.get('/data/initial_data.json')
  .then(function (response) {
    ReactDOM.render(
        <Dashboard
            data={mungeData(response.data)}
        />,
        document.getElementById('root')
    );
  })
  .catch(function (error) {
    console.log(error);
  });
