/*
Footer.jsx: Reusable portfolio footer
*/
import './Footer.css'

export function Footer() {
    return (
        <footer className="footer">
            <p>
                © {new Date().getFullYear()} | <i>Non est ad astra mollis e terris via</i>
            </p>
        </footer>
    )
}
