import './Footer.css'

function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center px-5 py-4 text-white" style={{
            backgroundColor: '#12492f'
        }}>
            <p className="col-md-4 mb-0 ">The Alliance of Bioversity International and CIAT All Rights reserved</p>

            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a href="mailto: J.R.Villegas@cgiar.org" className="px-2 text-decoration-none text-white">Email: J.R.Villegas@cgiar.org </a></li>
            </ul>
        </footer>
    )
}

export default Footer;