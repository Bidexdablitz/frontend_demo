import { GoogleOAuthProvider } from "@react-oauth/google";

export default function googleWrapper(Wrapped: JSX.Element) {
    return (
        <GoogleOAuthProvider clientId="298326792258-75mcv6s7slcnpoj2925epgq2q1f9jqmq.apps.googleusercontent.com">
            {Wrapped}
        </GoogleOAuthProvider>
    );
}
