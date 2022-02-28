
// /config/firebaseAuthUI.config.js
export const uiConfig = firebaseApp => {
    return {
        signInFlow: 'redirect',
        signInSuccessUrl: '/',
        tosUrl: '/terms-of-service',
        privacyPolicyUrl: '/privacy-policy',
        signInOptions: [
            firebaseApp.auth.GoogleAuthProvider.PROVIDER_ID,
            firebaseApp.auth.FacebookAuthProvider.PROVIDER_ID,
            firebaseApp.auth.TwitterAuthProvider.PROVIDER_ID
        ]
    }
}