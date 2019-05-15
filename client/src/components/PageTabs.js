//import dependencies
import React from 'react';

//import stylesheet
import '../css/App.css';

class PageTabs extends React.Component { //page tabs -> navigation bar
    isActiveTab(tabName) {
        return (tabName === this.props.currentView) ? 'nav-link active' : 'nav-link';
    }

    onTabClick(event, tabName) {
        event.preventDefault();
        this.props.onViewChange(tabName);
    }

    render () {
        return (
            <ul className='nav page-tabs'>
                <li className='nav-item'>
                    <a className={this.isActiveTab('page1')}
                       onClick={(e) => this.onTabClick(e, 'page1')}>
                        Now Playing
                    </a>
                </li>
            </ul>
        )
    }

};

export default PageTabs;