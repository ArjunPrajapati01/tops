export default function ErrorBanner({ message }) {
  return (
    <div
      style={{
        background: "#ffdddd",
        color: "red",
        padding: "15px",
        margin: "20px",
        borderRadius: "8px",
      }}
    >
      {message}
    </div>
  );
}