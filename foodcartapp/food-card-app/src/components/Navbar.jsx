import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#222",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Link href="/" style={{ color: "#fff" }}>
        Home
      </Link>

      <Link href="/menu" style={{ color: "#fff" }}>
        Restaurant Menu
      </Link>

      <Link href="/order-history" style={{ color: "#fff" }}>
        Order History
      </Link>

      <Link href="/login" style={{ color: "#fff" }}>
        Login
      </Link>
    </nav>
  );
}