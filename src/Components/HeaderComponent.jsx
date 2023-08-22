
const HeaderComponent = () => {
  return (
    <div className="header">
        <a href="/">
      <img
        className="logo"
        src="https://images.unsplash.com/photo-1674316206902-db2ac83c7b73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        alt="FoodFox"
      />
      </a>
      <div className="nav-items">
        <ul>
          <li><a href="/">Home</a></li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
