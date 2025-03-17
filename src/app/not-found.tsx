const NotFoundPage: React.FC = () => {
    return (
        <div className="flex min-h-[80vh] items-center justify-center p-6">
            <div className="flex flex-col items-center space-y-6 text-center">
                <h1 className="glitter-text text-8xl font-bold">404</h1>
                <div className="pixel-border rounded-lg bg-pink-500/10 p-6">
                    <h2 className="text-xl">
                        oops! this page couldn&apos;t be found
                    </h2>
                    <p className="animate-rainbow-text mt-2">
                        maybe try going back to the home page?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
