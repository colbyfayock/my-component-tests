import AppLogo from './AppLogo';
import AppLink from './AppLink';

import './AppHeader.css';

const AppHeader = () => {
  return (
    <header className="App-header">
      <AppLogo />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <AppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </AppLink>
    </header>
  )
}

export default AppHeader;