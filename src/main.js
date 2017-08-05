const MenuItems = [
    {id: 'my_credentials', display: 'My Credentials'},
    {id: 'shared_with_me', display: 'Shared with Me'}
]

class Dashboard extends React.Component {

    componentWillMount() {
        // initialize the state with mock data
        this.setState({
            data: this.props.data,
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
        console.log(this.state);

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

// load the initial data
axios.get('/data/initial_data.json')
  .then(function (response) {
    ReactDOM.render(
        <Dashboard
            data={response.data}
        />,
        document.getElementById('root')
    );
  })
  .catch(function (error) {
    console.log(error);
  });
