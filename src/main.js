class Dashboard extends React.Component {

    render () {
        return (
            <MainMenu/>
            <CredentialList/>
            <CredentialDetails/>
        );
    }

}

class MainMenu extends React.Component {

    render () {
        return null
    }

}

class CredentialList extends React.Component {

    render () {
        return null
    }

}

class CredentialDetails extends React.Component {

    render () {
        return null
    }

}

axios.get('/data/initial_data.json')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

ReactDOM.render(
    <Dashboard/>,
    document.getElementById('root')
);
