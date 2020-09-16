import React from "react";

function Footer(){

    let currentYear = new Date().getFullYear();

    return (
    <footer>
        <p>Copyright © Kabelo Mashao {currentYear}</p>
    </footer>
    );
}

export default Footer;