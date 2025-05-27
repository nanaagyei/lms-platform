import { Logo } from "../(dashboard)/_components/logo";

const currentYear = new Date().getFullYear();

const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left side - Image section */}
            <div className="hidden md:block md:w-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-700/90 to-sky-900/90 z-10" />
                <img 
                    src="https://images.unsplash.com/photo-1621947081720-86970823b77a?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Education" 
                    className="absolute inset-0 w-full h-full object-cover hover-scale transition-transform duration-700"
                />
                <div className="relative z-20 h-full flex flex-col justify-center items-center text-white p-8">
                    <div className="max-w-md text-center animate-slide-in">
                        <div className="relative mb-8">
                            <h2 className="text-4xl font-bold mb-4 hover-lift inline-block">Welcome to Stay-afloat</h2>
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-sky-400 rounded-full hover-scale"></div>
                        </div>
                        <p className="text-lg opacity-90 mb-8">
                            Your journey to academic excellence starts here. Join our community of learners and educators.
                        </p>
                        
                        {/* Feature Cards Grid */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover-lift group">
                                <div className="flex items-center mb-2">
                                    <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center mr-2 group-hover:bg-sky-500/40 transition-colors">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold">Learn Anywhere</h3>
                                </div>
                                <p className="text-sm opacity-80">Access courses from any device, anytime</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover-lift group">
                                <div className="flex items-center mb-2">
                                    <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center mr-2 group-hover:bg-sky-500/40 transition-colors">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold">Expert Teachers</h3>
                                </div>
                                <p className="text-sm opacity-80">Learn from industry professionals</p>
                            </div>
                        </div>

                        {/* Interactive Stats */}
                        <div className="mt-8 grid grid-cols-3 gap-4">
                            <div className="text-center hover-lift">
                                <div className="text-2xl font-bold mb-1">24/7</div>
                                <div className="text-sm opacity-80">Support</div>
                            </div>
                            <div className="text-center hover-lift">
                                <div className="text-2xl font-bold mb-1">100+</div>
                                <div className="text-sm opacity-80">Countries</div>
                            </div>
                            <div className="text-center hover-lift">
                                <div className="text-2xl font-bold mb-1">50k+</div>
                                <div className="text-sm opacity-80">Students</div>
                            </div>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-8 flex items-center justify-center space-x-4">
                            <div className="flex items-center space-x-2 hover-lift">
                                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="text-sm">4.9/5 Rating</span>
                            </div>
                            <div className="flex items-center space-x-2 hover-lift">
                                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm">Verified Platform</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side - Auth form section */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-12 bg-white">
                <div className="w-full max-w-md">
                    {/* Logo and Brand */}
                    <div className="flex flex-col items-center mb-8 animate-scale-in">
                        <div className="flex items-center space-x-4 mb-4">
                            <img 
                                src="stay-float.jpg" 
                                alt="Stay-afloat Logo" 
                                className="w-16 h-16 object-contain hover-rotate"
                            />
                            <div className="text-center">
                                <h1 className="text-3xl font-bold text-sky-700">Stay-afloat</h1>
                                <p className="text-sm text-gray-600">Your best study platform</p>
                            </div>
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <div className="w-2 h-2 rounded-full bg-sky-500 hover-scale" />
                            <div className="w-2 h-2 rounded-full bg-sky-400 hover-scale" />
                            <div className="w-2 h-2 rounded-full bg-sky-300 hover-scale" />
                        </div>
                    </div>

                    {/* Auth Form */}
                    <div className="bg-white rounded-lg shadow-sm p-6 hover-lift animate-fade-in">
                        {children}
                    </div>

                    {/* Social Proof */}
                    <div className="mt-8 text-center animate-fade-in">
                        <div className="flex justify-center space-x-8 mb-4">
                            <div className="text-center hover-lift">
                                <p className="text-2xl font-bold text-sky-700">10k+</p>
                                <p className="text-sm text-gray-600">Active Students</p>
                            </div>
                            <div className="text-center hover-lift">
                                <p className="text-2xl font-bold text-sky-700">500+</p>
                                <p className="text-sm text-gray-600">Courses</p>
                            </div>
                            <div className="text-center hover-lift">
                                <p className="text-2xl font-bold text-sky-700">95%</p>
                                <p className="text-sm text-gray-600">Satisfaction</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 text-center text-sm text-gray-600 animate-fade-in">
                        <p>© {currentYear} Stay-afloat. All rights reserved.</p>
                        <div className="flex justify-center space-x-4 mt-2">
                            <a href="#" className="hover:text-sky-700 transition-colors duration-300 hover-lift">Privacy Policy</a>
                            <a href="#" className="hover:text-sky-700 transition-colors duration-300 hover-lift">Terms of Service</a>
                            <a href="#" className="hover:text-sky-700 transition-colors duration-300 hover-lift">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AuthLayout;