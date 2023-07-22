function Card({ children, title }) {
  console.log(children)
  console.log(title)
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card title="first-card">
      <div>
      <p>Title</p>
      <p>Description</p>
      </div>
    </Card>
  );
}


