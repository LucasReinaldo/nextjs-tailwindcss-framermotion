import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div className="flex-1 max-w-5xl h-full mx-auto content-center items-center px-4 sm:px-6 md:px-8">
      <Header />
      <div className="flex flex-1 flex-col h-5/6">
        {children}
      </div>
      <footer className="absolute bottom-4 right-0 left-0 w-full">
        <div className="flex flex-col text-center mx-auto justify-center text-sm md:text-base">
          <p>
            made with <span className="text-red-700">♥️</span> | github.com/
            <strong>LucasReinaldo</strong>
          </p>
          <p className="text-xs md:text-sm">DoWhile2020 | #NeverStopLearning</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
