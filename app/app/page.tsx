import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg"></div>
            <h1 className="text-2xl font-bold text-white">Tunesboxd</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton>
                <button className="bg-white text-purple-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10"
                  }
                }}
              />
            </SignedIn>
          </div>
        </header>

        {/* Main Content */}
        <main className="text-center">
          <SignedOut>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-6xl font-bold text-white mb-6">
                Track your music.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
                  Share your taste.
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Keep track of every song you listen to. Rate and review music. 
                Create lists and share your musical journey with friends.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SignInButton>
                  <button className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all">
                    Get Started
                  </button>
                </SignInButton>
                
                <button className="border border-white/20 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg mb-4 mx-auto"></div>
                  <h3 className="text-xl font-semibold text-white mb-2">Track & Rate</h3>
                  <p className="text-gray-300">Rate every song and album you listen to on a scale of 1-5 stars.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4 mx-auto"></div>
                  <h3 className="text-xl font-semibold text-white mb-2">Review & Share</h3>
                  <p className="text-gray-300">Write detailed reviews and share your thoughts with the community.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mb-4 mx-auto"></div>
                  <h3 className="text-xl font-semibold text-white mb-2">Discover</h3>
                  <p className="text-gray-300">Find new music through friends' recommendations and curated lists.</p>
                </div>
              </div>
            </div>
          </SignedOut>

          <SignedIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-8">
                Welcome to Tunesboxd! 🎵
              </h2>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">Your Music Journey Starts Here</h3>
                <p className="text-gray-300 mb-6">
                  Start by searching for music, rating your favorite tracks, or creating your first list.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                    Search Music
                  </button>
                  <button className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Create a List
                  </button>
                </div>
              </div>
            </div>
          </SignedIn>
        </main>
      </div>
    </div>
  );
}