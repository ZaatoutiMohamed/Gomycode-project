const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return <div>{token ? children : <navigate to="/" />}</div>;
};
export default PrivateRoute;
