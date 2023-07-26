import "../../css/tailwind.css";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}