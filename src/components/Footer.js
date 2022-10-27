import React from "react";
export default function Footer() {
    return (
        <footer>
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <p>&copy; {new Date().getFullYear()} - Tammi L. Coles&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</p><br />
            <p><a href="https://github.com/tlcoles">GitHub @tlcoles</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/tammilcoles/">LinkedIn/in/tammilcoles</a></p>
          </div>
        </footer>
      );
}
