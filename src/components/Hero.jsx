//Hero is the interface of the app, it is the first thing the user sees when they open the app, it should have a welcome message and a call to action buttun to sign up or login.
 const Hero = () => {
    return (
        <div classname = 'hero'>
            <h1>Welcome to My App</h1>
            <p>Get started with our amazing app today!</p>
        </div>
    );
};

export default Hero;