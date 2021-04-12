import React, { Fragment, useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Searchbar from './components/layout/Searchbar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import AddTechModal from './components/techs/AddTechModal';
import EditLogModal from './components/logs/EditLogModal';
import TechListModal from './components/techs/TechListModal';

const App = () => {
  useEffect(() => {
    // Init MaterializeCSS
    M.AutoInit();
  });
  return (
    <Fragment>
      <Searchbar />
      <div className="container">
        <AddBtn />
        <TechListModal />
        <EditLogModal />
        <AddLogModal />
        <AddTechModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
