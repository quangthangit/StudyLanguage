import FacebookIcon from "../assets/facebook.svg";
import GoogleIcon from "../assets/google.svg";
export default function SignIn() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <section className="w-full max-w-md text-gray-800 text-center mb-8">
                <h2 className="text-4xl font-bold mb-4 text-blue-800">Sign in to TeaKorea</h2>
                <p className="text-sm text-gray-600">
                    If you are not already a member, by signing in you will be automatically registered.
                </p>
            </section>

            <div className="w-full max-w-md space-y-4">
                <button
                    className="w-full flex items-center justify-center py-3 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:shadow-md transition-all"
                    type="button"
                >
                    <img src={GoogleIcon} alt="Facebook" className="w-5 h-5 mr-2" />
                    Sign in with Facebook
                </button>
                <button
                    className="w-full flex items-center justify-center py-3 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:shadow-md transition-all"
                    type="button"
                >
                    <img src={FacebookIcon} alt="Facebook" className="w-5 h-5 mr-2" />
                    Sign in with Facebook
                </button>
            </div>
        </div>
    );
}