import { NavLink, Outlet } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux"
// import { useEffect } from "react";
// import axios from "axios"

function RootLayout() {
    // const adminId = useSelector((state) => state.adminId)

return (
<>
    <div className="root-layout">
      <header>
        <nav>
          <h1 className="notable-regular">CAT MONTOYA</h1>
          <NavLink to="/">home</NavLink>
          <NavLink to="/blog">blog</NavLink>
          <NavLink to="/podcast">podcast</NavLink>
          <NavLink to="/about">about</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
    </>
);
}

export default RootLayout;