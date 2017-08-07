import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const MenuItems = [
    {id: 'own_credentials', display: 'My Credentials'},
    {id: 'shared_with_me', display: 'Shared with Me'}
]


export default class MainMenu extends Component {

    onClick = (e) => {
        this.props.onSelectedMenu(
            e.currentTarget.dataset.id
        );
    }

    render () {
        const {selectedMenu} = this.props;

        return (
            <div className={'MainMenu'}>
                {MenuItems.map((item) => {
                    const classname = selectedMenu === item.id
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
