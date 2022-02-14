import { Container, Alert } from "@skipper/my-lib";

export default function App() {
  return (
    <Container className="pt-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
        <Alert
          type="error"
          heading="There were 2 errors with your submission"
          headingLevel={1}
        >
          <ul className="list-disc space-y-1 pl-5">
            <li>Your password must be 8 characters long</li>
            <li>
              Your password must contain at least one pro wresting finishing
              move
            </li>
          </ul>
        </Alert>
        <Alert
          type="info"
          heading="Your password must contain at least one pro wresting finishing move and stuff and junk and more stuff"
          headingLevel={1}
        >
          A bad thing happened and we are sorry
        </Alert>
        <Alert
          type="warning"
          heading="Your password must contain at least one pro wresting finishing move and stuff and junk and more stuff"
          headingLevel={1}
        >
          A bad thing happened and we are sorry
        </Alert>
        <Alert
          type="success"
          heading="Your password must contain at least one pro wresting finishing move and stuff and junk and more stuff"
          headingLevel={1}
        >
          A bad thing happened and we are sorry
        </Alert>
      </div>
      <p>This is the way we talk to adults</p>
    </Container>
  );
}
