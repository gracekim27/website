export default function Navbar() {
    return (
        <nav className = "nav">
            <a href="/" classname = "site-title">
                Site Name
            </a>
            <ul>
                <li>
                    <a href="/pricing">Pricing</a>
                </li>
                <li>
                    <a href="/About">About</a>
                </li>
            </ul>
        </nav>
    )
}