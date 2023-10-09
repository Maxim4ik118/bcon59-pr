import Home from 'pages/Home';
import Posts from 'pages/Posts';
import Search from 'pages/Search';

import { NavLink, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <>
      <header>
        <nav>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/posts">
            Posts
          </NavLink>
          <NavLink className="nav-link" to="/search">
            Search
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
    </>
  );
}
