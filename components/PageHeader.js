export default function PageHeader({ text, subtext }) {
  return (
    <header className="py-4">
      <h1 className="display-5 fw-semibold">{text}</h1>
      {subtext ? <p className="text-muted fs-5 mt-2">{subtext}</p> : null}
    </header>
  );
}
