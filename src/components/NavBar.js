import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <Link to="/home" className="site-title">FarmShop</Link>
      <ul>
        <CustomLink to='/home'>Home</CustomLink>
        <CustomLink to='/products'>Products</CustomLink>
        <CustomLink to='/about'>About</CustomLink>
        <CustomLink to='/contact'>Contact</CustomLink>
      </ul>
    </div>
  )
}

export default NavBar

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}
