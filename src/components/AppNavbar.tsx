import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export function AppNavbar() {
  return (
    <Navbar className="tab-bar">
      <Nav className="tab-nav">
        <Nav.Link as={NavLink} to="/feed" className="tab-item">Лента</Nav.Link>
        <Nav.Link disabled className="tab-item">Добавление</Nav.Link>
        <Nav.Link as={NavLink} to="/tiles" className="tab-item">Плитка</Nav.Link>
        <Nav.Link disabled className="tab-item">Вход</Nav.Link>
      </Nav>
    </Navbar>
  )
}
