class Dashboard extends React.Component {



    render () {
        return (
            <div className={'Dashboard'}>
                <MainMenu/>
                <CredentialList/>
                <CredentialDetails/>
            </div>
        );
    }

}

class MainMenu extends React.Component {

    render () {
        return (
            <div className={'MainMenu'}>
                <div>My Credentials</div>
                <div>Shared with Me</div>
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
            data={response}
        />,
        document.getElementById('root')
    );
  })
  .catch(function (error) {
    console.log(error);
  });
