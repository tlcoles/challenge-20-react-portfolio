export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center"> 
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Welcome, visitor!
                        <br className="hidden lg:inline-block">I'm Tammi. Below is a bit about me.</br>
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    <strong>Tammi L. Coles</strong>is a professional writer and editor in corporate and nonprofit communications. Her work has appeared in diverse publications – including press releases, annual reports, news articles, corporate marketing, tech blogs, and grant proposals – as well as in business media like Forbes, Harvard Business Review, MIT/Sloan, and European Business Review, for which she was either the editor or the ghost writer. She is currently learning full-stack web development to extend her technical writing skills and to program apps for web and mobile. See her in action on GitHub via @tlcoles.
                    </p>
                    <div className="flex justify-center">
                        <a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work with me
                        </a>
                        <a href="#project" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            View my portfolio
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
