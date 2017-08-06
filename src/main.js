const MenuItems = [
    {id: 'my_credentials', display: 'My Credentials'},
    {id: 'shared_with_me', display: 'Shared with Me'}
]


class Dashboard extends React.Component {

    componentWillMount() {
        this.setState({
            data: this.props.data, // initialize the state with mock data
            selectedMenu: 'my_credentials',
            selectedCredential: null,
        });
    }

    onSelectedMenu = (selectedMenu) => {
        this.setState({
            selectedMenu
        });
    }

    render () {
        return (
            <div className={'Dashboard'}>
                <MainMenu
                    onSelectedMenu={this.onSelectedMenu}
                    selectedMenu={this.state.selectedMenu}
                />
                <CredentialList/>
                <CredentialDetails/>
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

    render () {
        return (
            <div className={'CredentialList'}>
                <div>amanzon.com</div>
                <div>netflix</div>
            </div>
        );
    }

}

class CredentialDetails extends React.Component {

    render () {
        return (
            <div className={'CredentialDetails'}>
                <div>amazon.com</div>
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
