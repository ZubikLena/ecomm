import React from "react";
import "./FooterStyles.css";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsPinterest
} from "react-icons/bs";

function Footer() {
  return (
    <table>
      <thead>
        <tr>
          <td>Info</td>
          <td rowspan="6"></td>
          <td>BKleider Kleidung</td>
          <td rowspan="6"></td>
          <td>Kundendienst</td>
        </tr>
        <tr className="underline">
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>Hilfe &amp; Kontakt</td>
          <td>Uber uns</td>
          <td rowspan="4">
            Bei Fragen steht Dir unser engagiertes Team jederzeit gerne zur
            erfUgung. FUlle einfach das Formular Uber den nachstehenden Link aus
            und wir melden uns schnellstmOglich bei Dir!
            <br />
            <br />
            <a href="">Kontakte uns hier</a>
          </td>
        </tr>
        <tr>
          <td>RUcksendungen</td>
          <td>Karriere</td>
        </tr>
        <tr>
          <td>Handler</td>
          <td>Presse</td>
        </tr>
        <tr>
          <td>Markenschutz</td>
          <td>Impressum</td>
        </tr>
      </thead>
    </table>
  );
}

export default Footer;
