export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <div className="remix-app__main">
      <div className="container remix-app__main-content">{children}</div>
    </div>
  );
}
