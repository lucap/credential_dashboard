import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash';

import Dashboard from './components/Dashboard';


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
axios.get('data/initial_data.json')
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
