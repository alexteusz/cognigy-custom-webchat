import React from 'react';
import './assets/css/App.css';
import { connect } from 'react-redux';
import Welcome from './components/Welcome';

const App = (props) => {

  // put redux store into component's state
  const { showWelcomeComponent, currentMessage } = props;

  const renderCustomComponents = () => {
    if (showWelcomeComponent) {
      return <Welcome currentMessage={currentMessage} />
    }
  }

  return (
    <div className="App">
      {renderCustomComponents()}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    showWelcomeComponent: state.showWelcomeComponent,
    currentMessage: state.currentMessage
  };
};


export default connect(mapStateToProps)(App);
