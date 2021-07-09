import './AppLink.css';

const AppLink = ({ children, ...rest }) => {
  return (
    <a
      className="App-link"
      {...rest}
    >
      { children }
    </a>
  )
}

export default AppLink;