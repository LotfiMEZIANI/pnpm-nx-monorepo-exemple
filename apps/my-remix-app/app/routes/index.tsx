import { Button } from "shared-ui";

export default function Index() {
    return (
        <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.4"}}>
            <h1>Welcome to My-Remix-App</h1>

            <Button onClick={()=>console.log('clicked !')}>Click me</Button>
        </div>
    );
}
