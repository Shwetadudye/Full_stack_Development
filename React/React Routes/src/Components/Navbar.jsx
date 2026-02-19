import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const data = [
        { to: '/', name: 'Home' },
        { to: '/about', name: 'About' },
        { to: '/counter', name: 'Counter' },
        { to: '/todo', name: 'Todo' },
    ];
    return (
        <div style={{
            listStyle: 'none', display: 'flex', justifyContent: 'center', gap: '20px', textTransform: 'capitalize',
            fontSize: '1.1rem', fontWeight: 'normal', cursor: 'pointer'
        }}>
            {data?.map((el, i) => {
                return (
                    <NavLink style={{ textDecoration: 'none', color: 'black', }}
                        to={el.to}
                        key={i}>
                        {el.name}
                    </NavLink>
                )
            })}
        </div>
    )
}