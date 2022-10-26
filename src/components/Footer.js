import React from "react";
export default function Footer() {
    return (
        <footer>
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <h4>&copy; {new Date().getFullYear()} - Tammi L. Coles</h4>
            <p>GitHub <a href="https://github.com/tlcoles">@tlcoles</a> | LinkedIn <a href="https://www.linkedin.com/in/tammilcoles/">tammilcoles</a>/</p>
          </div>
        </footer>
      );
}
