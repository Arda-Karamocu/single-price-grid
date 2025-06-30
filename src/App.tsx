function App() {
  return (
    <>
      <div className="flex flex-row min-h-screen justify-center items-center bg-[hsl(204,43%,93%)] p-8 font-Karla">
        <div className="lg:w-1/2 flex flex-col rounded-2xl overflow-hidden">
          <div className="flex flex-col p-7 bg-white">
            <h1 className="text-[hsl(179,62%,43%)] text-xl font-[500] mb-4">
              Join our community
            </h1>
            <h2 className="text-[hsl(71,73%,54%)] mb-2">
              30-day,hassle-free money back guarantee
            </h2>
            <p className="text-[hsl(218,22%,67%)]">
              Gain access to our full library of tutorials along with expert
              code reviews. Perfect for any developers who are serious about
              honing their skills.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="bg-[hsl(185,62%,43%)] text-white p-7 lg:w-1/2 w-full">
              <h2 className="mb-3">Monthly Subscription</h2>
              <h2 className="text-2xl font-[500] flex items-center gap-3 mb-2">
                $29 <span className="text-sm text-white/50">per month</span>
              </h2>
              <p className="font-[400] mb-6 text-sm">
                Full access for less than $1 a day
              </p>
              <button className="bg-[hsl(71,73%,54%)] rounded-md w-full h-10 font-bold text-white shadow-md hover:opacity-90 transition">
                Sign Up
              </button>
            </div>
            <div className="bg-[hsl(179,62%,43%)] text-white p-7 lg:w-1/2 w-full">
              <h2 className="text-lg mb-3 font-[500]">Why Us</h2>
              <p className="text-sm text-white/70 leading-relaxed">
                Tutorials by industry experts Peer & expert code review Coding
                exercises Access to our GitHub repos Community forum Flashcard
                decks New videos every week
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
