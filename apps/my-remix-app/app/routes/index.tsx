import { sharedUtilsFunction } from "@poc/shared-utils";
import { Button } from "@poc/shared-ui";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to My-Remix-App</h1>

      <Button onClick={() => sharedUtilsFunction()}>Click me</Button>
    </div>
  );
}
