import { clp } from '../utils/format'

const Navbar = ({ setView }) => {
  const total = 25000
  const token = false // true = logueado, false = no logueado (simulación)

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-3">
      <a className="navbar-brand d-flex align-items-center gap-2" href="#" onClick={() => setView('home')}>
        <span role="img" aria-label="pizza">🍕</span>
        <strong>Pizzería Mamma Mía</strong>
      </a>

      <div className="ms-auto d-flex gap-2">
        <button className="btn btn-outline-light" onClick={() => setView('home')}>🍕 Home</button>

        {token ? (
          <>
            <button className="btn btn-outline-light">🔓 Profile</button>
            <button className="btn btn-outline-light">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light" onClick={() => setView('login')}>🔐 Login</button>
            <button className="btn btn-outline-light" onClick={() => setView('register')}>🔐 Register</button>
          </>
        )}

        <button className="btn btn-success">
          🛒 Total: ${clp(total)}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
