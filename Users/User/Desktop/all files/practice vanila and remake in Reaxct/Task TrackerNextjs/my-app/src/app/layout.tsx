import Link from "next/link";
import Counter from "../../components/Counter";
import "./global.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <h3>Our Header</h3>
        </header>
        {children}
        <footer className="site-footer">
          <h3>Our Footer</h3>
          <nav>
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                {" "}
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </nav>
          <Counter />
        </footer>
      </body>
    </html>
  );
}
