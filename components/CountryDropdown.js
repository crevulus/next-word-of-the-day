import React from "react";

import styles from "../pages/styles/dropdown.module.scss";

import { connect } from "react-redux";
import { selectCountry } from "../redux/actions/choicesActions";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

function CountryDropdown(props) {
  const [country, setCountry] = React.useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
    props.selectCountry(event.target.value);
  };

  const goClick = (event) => {
    event.preventDefault();
    props.handleChildGo();
  };

  return (
    <div>
      <FormControl
        variant="outlined"
        className={styles.selectContainer}
        color="secondary"
      >
        <InputLabel id="demo-simple-select-helper-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={country}
          onChange={handleChange}
        >
          <MenuItem value="AF" style={{ textShadow: "none" }}>
            Afghanistan
          </MenuItem>
          <MenuItem value="AX" style={{ textShadow: "none" }}>
            Åland Islands
          </MenuItem>
          <MenuItem value="AL" style={{ textShadow: "none" }}>
            Albania
          </MenuItem>
          <MenuItem value="DZ" style={{ textShadow: "none" }}>
            Algeria
          </MenuItem>
          <MenuItem value="AS" style={{ textShadow: "none" }}>
            American Samoa
          </MenuItem>
          <MenuItem value="AD" style={{ textShadow: "none" }}>
            Andorra
          </MenuItem>
          <MenuItem value="AO" style={{ textShadow: "none" }}>
            Angola
          </MenuItem>
          <MenuItem value="AI" style={{ textShadow: "none" }}>
            Anguilla
          </MenuItem>
          <MenuItem value="AQ" style={{ textShadow: "none" }}>
            Antarctica
          </MenuItem>
          <MenuItem value="AG" style={{ textShadow: "none" }}>
            Antigua and Barbuda
          </MenuItem>
          <MenuItem value="AR" style={{ textShadow: "none" }}>
            Argentina
          </MenuItem>
          <MenuItem value="AM" style={{ textShadow: "none" }}>
            Armenia
          </MenuItem>
          <MenuItem value="AW" style={{ textShadow: "none" }}>
            Aruba
          </MenuItem>
          <MenuItem value="AU" style={{ textShadow: "none" }}>
            Australia
          </MenuItem>
          <MenuItem value="AT" style={{ textShadow: "none" }}>
            Austria
          </MenuItem>
          <MenuItem value="AZ" style={{ textShadow: "none" }}>
            Azerbaijan
          </MenuItem>
          <MenuItem value="BS" style={{ textShadow: "none" }}>
            Bahamas
          </MenuItem>
          <MenuItem value="BH" style={{ textShadow: "none" }}>
            Bahrain
          </MenuItem>
          <MenuItem value="BD" style={{ textShadow: "none" }}>
            Bangladesh
          </MenuItem>
          <MenuItem value="BB" style={{ textShadow: "none" }}>
            Barbados
          </MenuItem>
          <MenuItem value="BY" style={{ textShadow: "none" }}>
            Belarus
          </MenuItem>
          <MenuItem value="BE" style={{ textShadow: "none" }}>
            Belgium
          </MenuItem>
          <MenuItem value="BZ" style={{ textShadow: "none" }}>
            Belize
          </MenuItem>
          <MenuItem value="BJ" style={{ textShadow: "none" }}>
            Benin
          </MenuItem>
          <MenuItem value="BM" style={{ textShadow: "none" }}>
            Bermuda
          </MenuItem>
          <MenuItem value="BT" style={{ textShadow: "none" }}>
            Bhutan
          </MenuItem>
          <MenuItem value="BO" style={{ textShadow: "none" }}>
            Bolivia, Plurinational State of
          </MenuItem>
          <MenuItem value="BQ" style={{ textShadow: "none" }}>
            Bonaire, Sint Eustatius and Saba
          </MenuItem>
          <MenuItem value="BA" style={{ textShadow: "none" }}>
            Bosnia and Herzegovina
          </MenuItem>
          <MenuItem value="BW" style={{ textShadow: "none" }}>
            Botswana
          </MenuItem>
          <MenuItem value="BV" style={{ textShadow: "none" }}>
            Bouvet Island
          </MenuItem>
          <MenuItem value="BR" style={{ textShadow: "none" }}>
            Brazil
          </MenuItem>
          <MenuItem value="IO" style={{ textShadow: "none" }}>
            British Indian Ocean Territory
          </MenuItem>
          <MenuItem value="BN" style={{ textShadow: "none" }}>
            Brunei Darussalam
          </MenuItem>
          <MenuItem value="BG" style={{ textShadow: "none" }}>
            Bulgaria
          </MenuItem>
          <MenuItem value="BF" style={{ textShadow: "none" }}>
            Burkina Faso
          </MenuItem>
          <MenuItem value="BI" style={{ textShadow: "none" }}>
            Burundi
          </MenuItem>
          <MenuItem value="KH" style={{ textShadow: "none" }}>
            Cambodia
          </MenuItem>
          <MenuItem value="CM" style={{ textShadow: "none" }}>
            Cameroon
          </MenuItem>
          <MenuItem value="CA" style={{ textShadow: "none" }}>
            Canada
          </MenuItem>
          <MenuItem value="CV" style={{ textShadow: "none" }}>
            Cape Verde
          </MenuItem>
          <MenuItem value="KY" style={{ textShadow: "none" }}>
            Cayman Islands
          </MenuItem>
          <MenuItem value="CF" style={{ textShadow: "none" }}>
            Central African Republic
          </MenuItem>
          <MenuItem value="TD" style={{ textShadow: "none" }}>
            Chad
          </MenuItem>
          <MenuItem value="CL" style={{ textShadow: "none" }}>
            Chile
          </MenuItem>
          <MenuItem value="CN" style={{ textShadow: "none" }}>
            China
          </MenuItem>
          <MenuItem value="CX" style={{ textShadow: "none" }}>
            Christmas Island
          </MenuItem>
          <MenuItem value="CC" style={{ textShadow: "none" }}>
            Cocos (Keeling) Islands
          </MenuItem>
          <MenuItem value="CO" style={{ textShadow: "none" }}>
            Colombia
          </MenuItem>
          <MenuItem value="KM" style={{ textShadow: "none" }}>
            Comoros
          </MenuItem>
          <MenuItem value="CG" style={{ textShadow: "none" }}>
            Congo
          </MenuItem>
          <MenuItem value="CD" style={{ textShadow: "none" }}>
            Congo, the Democratic Republic of the
          </MenuItem>
          <MenuItem value="CK" style={{ textShadow: "none" }}>
            Cook Islands
          </MenuItem>
          <MenuItem value="CR" style={{ textShadow: "none" }}>
            Costa Rica
          </MenuItem>
          <MenuItem value="CI" style={{ textShadow: "none" }}>
            Côte d'Ivoire
          </MenuItem>
          <MenuItem value="HR" style={{ textShadow: "none" }}>
            Croatia
          </MenuItem>
          <MenuItem value="CU" style={{ textShadow: "none" }}>
            Cuba
          </MenuItem>
          <MenuItem value="CW" style={{ textShadow: "none" }}>
            Curaçao
          </MenuItem>
          <MenuItem value="CY" style={{ textShadow: "none" }}>
            Cyprus
          </MenuItem>
          <MenuItem value="CZ" style={{ textShadow: "none" }}>
            Czech Republic
          </MenuItem>
          <MenuItem value="DK" style={{ textShadow: "none" }}>
            Denmark
          </MenuItem>
          <MenuItem value="DJ" style={{ textShadow: "none" }}>
            Djibouti
          </MenuItem>
          <MenuItem value="DM" style={{ textShadow: "none" }}>
            Dominica
          </MenuItem>
          <MenuItem value="DO" style={{ textShadow: "none" }}>
            Dominican Republic
          </MenuItem>
          <MenuItem value="EC" style={{ textShadow: "none" }}>
            Ecuador
          </MenuItem>
          <MenuItem value="EG" style={{ textShadow: "none" }}>
            Egypt
          </MenuItem>
          <MenuItem value="SV" style={{ textShadow: "none" }}>
            El Salvador
          </MenuItem>
          <MenuItem value="GQ" style={{ textShadow: "none" }}>
            Equatorial Guinea
          </MenuItem>
          <MenuItem value="ER" style={{ textShadow: "none" }}>
            Eritrea
          </MenuItem>
          <MenuItem value="EE" style={{ textShadow: "none" }}>
            Estonia
          </MenuItem>
          <MenuItem value="ET" style={{ textShadow: "none" }}>
            Ethiopia
          </MenuItem>
          <MenuItem value="FK" style={{ textShadow: "none" }}>
            Falkland Islands (Malvinas)
          </MenuItem>
          <MenuItem value="FO" style={{ textShadow: "none" }}>
            Faroe Islands
          </MenuItem>
          <MenuItem value="FJ" style={{ textShadow: "none" }}>
            Fiji
          </MenuItem>
          <MenuItem value="FI" style={{ textShadow: "none" }}>
            Finland
          </MenuItem>
          <MenuItem value="FR" style={{ textShadow: "none" }}>
            France
          </MenuItem>
          <MenuItem value="GF" style={{ textShadow: "none" }}>
            French Guiana
          </MenuItem>
          <MenuItem value="PF" style={{ textShadow: "none" }}>
            French Polynesia
          </MenuItem>
          <MenuItem value="TF" style={{ textShadow: "none" }}>
            French Southern Territories
          </MenuItem>
          <MenuItem value="GA" style={{ textShadow: "none" }}>
            Gabon
          </MenuItem>
          <MenuItem value="GM" style={{ textShadow: "none" }}>
            Gambia
          </MenuItem>
          <MenuItem value="GE" style={{ textShadow: "none" }}>
            Georgia
          </MenuItem>
          <MenuItem value="DE" style={{ textShadow: "none" }}>
            Germany
          </MenuItem>
          <MenuItem value="GH" style={{ textShadow: "none" }}>
            Ghana
          </MenuItem>
          <MenuItem value="GI" style={{ textShadow: "none" }}>
            Gibraltar
          </MenuItem>
          <MenuItem value="GR" style={{ textShadow: "none" }}>
            Greece
          </MenuItem>
          <MenuItem value="GL" style={{ textShadow: "none" }}>
            Greenland
          </MenuItem>
          <MenuItem value="GD" style={{ textShadow: "none" }}>
            Grenada
          </MenuItem>
          <MenuItem value="GP" style={{ textShadow: "none" }}>
            Guadeloupe
          </MenuItem>
          <MenuItem value="GU" style={{ textShadow: "none" }}>
            Guam
          </MenuItem>
          <MenuItem value="GT" style={{ textShadow: "none" }}>
            Guatemala
          </MenuItem>
          <MenuItem value="GG" style={{ textShadow: "none" }}>
            Guernsey
          </MenuItem>
          <MenuItem value="GN" style={{ textShadow: "none" }}>
            Guinea
          </MenuItem>
          <MenuItem value="GW" style={{ textShadow: "none" }}>
            Guinea-Bissau
          </MenuItem>
          <MenuItem value="GY" style={{ textShadow: "none" }}>
            Guyana
          </MenuItem>
          <MenuItem value="HT" style={{ textShadow: "none" }}>
            Haiti
          </MenuItem>
          <MenuItem value="HM" style={{ textShadow: "none" }}>
            Heard Island and McDonald Islands
          </MenuItem>
          <MenuItem value="VA" style={{ textShadow: "none" }}>
            Holy See (Vatican City State)
          </MenuItem>
          <MenuItem value="HN" style={{ textShadow: "none" }}>
            Honduras
          </MenuItem>
          <MenuItem value="HK" style={{ textShadow: "none" }}>
            Hong Kong
          </MenuItem>
          <MenuItem value="HU" style={{ textShadow: "none" }}>
            Hungary
          </MenuItem>
          <MenuItem value="IS" style={{ textShadow: "none" }}>
            Iceland
          </MenuItem>
          <MenuItem value="IN" style={{ textShadow: "none" }}>
            India
          </MenuItem>
          <MenuItem value="ID" style={{ textShadow: "none" }}>
            Indonesia
          </MenuItem>
          <MenuItem value="IR" style={{ textShadow: "none" }}>
            Iran, Islamic Republic of
          </MenuItem>
          <MenuItem value="IQ" style={{ textShadow: "none" }}>
            Iraq
          </MenuItem>
          <MenuItem value="IE" style={{ textShadow: "none" }}>
            Ireland
          </MenuItem>
          <MenuItem value="IM" style={{ textShadow: "none" }}>
            Isle of Man
          </MenuItem>
          <MenuItem value="IL" style={{ textShadow: "none" }}>
            Israel
          </MenuItem>
          <MenuItem value="IT" style={{ textShadow: "none" }}>
            Italy
          </MenuItem>
          <MenuItem value="JM" style={{ textShadow: "none" }}>
            Jamaica
          </MenuItem>
          <MenuItem value="JP" style={{ textShadow: "none" }}>
            Japan
          </MenuItem>
          <MenuItem value="JE" style={{ textShadow: "none" }}>
            Jersey
          </MenuItem>
          <MenuItem value="JO" style={{ textShadow: "none" }}>
            Jordan
          </MenuItem>
          <MenuItem value="KZ" style={{ textShadow: "none" }}>
            Kazakhstan
          </MenuItem>
          <MenuItem value="KE" style={{ textShadow: "none" }}>
            Kenya
          </MenuItem>
          <MenuItem value="KI" style={{ textShadow: "none" }}>
            Kiribati
          </MenuItem>
          <MenuItem value="KP" style={{ textShadow: "none" }}>
            Korea, Democratic People's Republic of
          </MenuItem>
          <MenuItem value="KR" style={{ textShadow: "none" }}>
            Korea, Republic of
          </MenuItem>
          <MenuItem value="KW" style={{ textShadow: "none" }}>
            Kuwait
          </MenuItem>
          <MenuItem value="KG" style={{ textShadow: "none" }}>
            Kyrgyzstan
          </MenuItem>
          <MenuItem value="LA" style={{ textShadow: "none" }}>
            Lao People's Democratic Republic
          </MenuItem>
          <MenuItem value="LV" style={{ textShadow: "none" }}>
            Latvia
          </MenuItem>
          <MenuItem value="LB" style={{ textShadow: "none" }}>
            Lebanon
          </MenuItem>
          <MenuItem value="LS" style={{ textShadow: "none" }}>
            Lesotho
          </MenuItem>
          <MenuItem value="LR" style={{ textShadow: "none" }}>
            Liberia
          </MenuItem>
          <MenuItem value="LY" style={{ textShadow: "none" }}>
            Libya
          </MenuItem>
          <MenuItem value="LI" style={{ textShadow: "none" }}>
            Liechtenstein
          </MenuItem>
          <MenuItem value="LT" style={{ textShadow: "none" }}>
            Lithuania
          </MenuItem>
          <MenuItem value="LU" style={{ textShadow: "none" }}>
            Luxembourg
          </MenuItem>
          <MenuItem value="MO" style={{ textShadow: "none" }}>
            Macao
          </MenuItem>
          <MenuItem value="MK" style={{ textShadow: "none" }}>
            Macedonia, the former Yugoslav Republic of
          </MenuItem>
          <MenuItem value="MG" style={{ textShadow: "none" }}>
            Madagascar
          </MenuItem>
          <MenuItem value="MW" style={{ textShadow: "none" }}>
            Malawi
          </MenuItem>
          <MenuItem value="MY" style={{ textShadow: "none" }}>
            Malaysia
          </MenuItem>
          <MenuItem value="MV" style={{ textShadow: "none" }}>
            Maldives
          </MenuItem>
          <MenuItem value="ML" style={{ textShadow: "none" }}>
            Mali
          </MenuItem>
          <MenuItem value="MT" style={{ textShadow: "none" }}>
            Malta
          </MenuItem>
          <MenuItem value="MH" style={{ textShadow: "none" }}>
            Marshall Islands
          </MenuItem>
          <MenuItem value="MQ" style={{ textShadow: "none" }}>
            Martinique
          </MenuItem>
          <MenuItem value="MR" style={{ textShadow: "none" }}>
            Mauritania
          </MenuItem>
          <MenuItem value="MU" style={{ textShadow: "none" }}>
            Mauritius
          </MenuItem>
          <MenuItem value="YT" style={{ textShadow: "none" }}>
            Mayotte
          </MenuItem>
          <MenuItem value="MX" style={{ textShadow: "none" }}>
            Mexico
          </MenuItem>
          <MenuItem value="FM" style={{ textShadow: "none" }}>
            Micronesia, Federated States of
          </MenuItem>
          <MenuItem value="MD" style={{ textShadow: "none" }}>
            Moldova, Republic of
          </MenuItem>
          <MenuItem value="MC" style={{ textShadow: "none" }}>
            Monaco
          </MenuItem>
          <MenuItem value="MN" style={{ textShadow: "none" }}>
            Mongolia
          </MenuItem>
          <MenuItem value="ME" style={{ textShadow: "none" }}>
            Montenegro
          </MenuItem>
          <MenuItem value="MS" style={{ textShadow: "none" }}>
            Montserrat
          </MenuItem>
          <MenuItem value="MA" style={{ textShadow: "none" }}>
            Morocco
          </MenuItem>
          <MenuItem value="MZ" style={{ textShadow: "none" }}>
            Mozambique
          </MenuItem>
          <MenuItem value="MM" style={{ textShadow: "none" }}>
            Myanmar
          </MenuItem>
          <MenuItem value="NA" style={{ textShadow: "none" }}>
            Namibia
          </MenuItem>
          <MenuItem value="NR" style={{ textShadow: "none" }}>
            Nauru
          </MenuItem>
          <MenuItem value="NP" style={{ textShadow: "none" }}>
            Nepal
          </MenuItem>
          <MenuItem value="NL" style={{ textShadow: "none" }}>
            Netherlands
          </MenuItem>
          <MenuItem value="NC" style={{ textShadow: "none" }}>
            New Caledonia
          </MenuItem>
          <MenuItem value="NZ" style={{ textShadow: "none" }}>
            New Zealand
          </MenuItem>
          <MenuItem value="NI" style={{ textShadow: "none" }}>
            Nicaragua
          </MenuItem>
          <MenuItem value="NE" style={{ textShadow: "none" }}>
            Niger
          </MenuItem>
          <MenuItem value="NG" style={{ textShadow: "none" }}>
            Nigeria
          </MenuItem>
          <MenuItem value="NU" style={{ textShadow: "none" }}>
            Niue
          </MenuItem>
          <MenuItem value="NF" style={{ textShadow: "none" }}>
            Norfolk Island
          </MenuItem>
          <MenuItem value="MP" style={{ textShadow: "none" }}>
            Northern Mariana Islands
          </MenuItem>
          <MenuItem value="NO" style={{ textShadow: "none" }}>
            Norway
          </MenuItem>
          <MenuItem value="OM" style={{ textShadow: "none" }}>
            Oman
          </MenuItem>
          <MenuItem value="PK" style={{ textShadow: "none" }}>
            Pakistan
          </MenuItem>
          <MenuItem value="PW" style={{ textShadow: "none" }}>
            Palau
          </MenuItem>
          <MenuItem value="PS" style={{ textShadow: "none" }}>
            Palestinian Territory, Occupied
          </MenuItem>
          <MenuItem value="PA" style={{ textShadow: "none" }}>
            Panama
          </MenuItem>
          <MenuItem value="PG" style={{ textShadow: "none" }}>
            Papua New Guinea
          </MenuItem>
          <MenuItem value="PY" style={{ textShadow: "none" }}>
            Paraguay
          </MenuItem>
          <MenuItem value="PE" style={{ textShadow: "none" }}>
            Peru
          </MenuItem>
          <MenuItem value="PH" style={{ textShadow: "none" }}>
            Philippines
          </MenuItem>
          <MenuItem value="PN" style={{ textShadow: "none" }}>
            Pitcairn
          </MenuItem>
          <MenuItem value="PL" style={{ textShadow: "none" }}>
            Poland
          </MenuItem>
          <MenuItem value="PT" style={{ textShadow: "none" }}>
            Portugal
          </MenuItem>
          <MenuItem value="PR" style={{ textShadow: "none" }}>
            Puerto Rico
          </MenuItem>
          <MenuItem value="QA" style={{ textShadow: "none" }}>
            Qatar
          </MenuItem>
          <MenuItem value="RE" style={{ textShadow: "none" }}>
            Réunion
          </MenuItem>
          <MenuItem value="RO" style={{ textShadow: "none" }}>
            Romania
          </MenuItem>
          <MenuItem value="RU" style={{ textShadow: "none" }}>
            Russian Federation
          </MenuItem>
          <MenuItem value="RW" style={{ textShadow: "none" }}>
            Rwanda
          </MenuItem>
          <MenuItem value="BL" style={{ textShadow: "none" }}>
            Saint Barthélemy
          </MenuItem>
          <MenuItem value="SH" style={{ textShadow: "none" }}>
            Saint Helena, Ascension and Tristan da Cunha
          </MenuItem>
          <MenuItem value="KN" style={{ textShadow: "none" }}>
            Saint Kitts and Nevis
          </MenuItem>
          <MenuItem value="LC" style={{ textShadow: "none" }}>
            Saint Lucia
          </MenuItem>
          <MenuItem value="MF" style={{ textShadow: "none" }}>
            Saint Martin (French part)
          </MenuItem>
          <MenuItem value="PM" style={{ textShadow: "none" }}>
            Saint Pierre and Miquelon
          </MenuItem>
          <MenuItem value="VC" style={{ textShadow: "none" }}>
            Saint Vincent and the Grenadines
          </MenuItem>
          <MenuItem value="WS" style={{ textShadow: "none" }}>
            Samoa
          </MenuItem>
          <MenuItem value="SM" style={{ textShadow: "none" }}>
            San Marino
          </MenuItem>
          <MenuItem value="ST" style={{ textShadow: "none" }}>
            Sao Tome and Principe
          </MenuItem>
          <MenuItem value="SA" style={{ textShadow: "none" }}>
            Saudi Arabia
          </MenuItem>
          <MenuItem value="SN" style={{ textShadow: "none" }}>
            Senegal
          </MenuItem>
          <MenuItem value="RS" style={{ textShadow: "none" }}>
            Serbia
          </MenuItem>
          <MenuItem value="SC" style={{ textShadow: "none" }}>
            Seychelles
          </MenuItem>
          <MenuItem value="SL" style={{ textShadow: "none" }}>
            Sierra Leone
          </MenuItem>
          <MenuItem value="SG" style={{ textShadow: "none" }}>
            Singapore
          </MenuItem>
          <MenuItem value="SX" style={{ textShadow: "none" }}>
            Sint Maarten (Dutch part)
          </MenuItem>
          <MenuItem value="SK" style={{ textShadow: "none" }}>
            Slovakia
          </MenuItem>
          <MenuItem value="SI" style={{ textShadow: "none" }}>
            Slovenia
          </MenuItem>
          <MenuItem value="SB" style={{ textShadow: "none" }}>
            Solomon Islands
          </MenuItem>
          <MenuItem value="SO" style={{ textShadow: "none" }}>
            Somalia
          </MenuItem>
          <MenuItem value="ZA" style={{ textShadow: "none" }}>
            South Africa
          </MenuItem>
          <MenuItem value="GS" style={{ textShadow: "none" }}>
            South Georgia and the South Sandwich Islands
          </MenuItem>
          <MenuItem value="SS" style={{ textShadow: "none" }}>
            South Sudan
          </MenuItem>
          <MenuItem value="ES" style={{ textShadow: "none" }}>
            Spain
          </MenuItem>
          <MenuItem value="LK" style={{ textShadow: "none" }}>
            Sri Lanka
          </MenuItem>
          <MenuItem value="SD" style={{ textShadow: "none" }}>
            Sudan
          </MenuItem>
          <MenuItem value="SR" style={{ textShadow: "none" }}>
            Suriname
          </MenuItem>
          <MenuItem value="SJ" style={{ textShadow: "none" }}>
            Svalbard and Jan Mayen
          </MenuItem>
          <MenuItem value="SZ" style={{ textShadow: "none" }}>
            Swaziland
          </MenuItem>
          <MenuItem value="SE" style={{ textShadow: "none" }}>
            Sweden
          </MenuItem>
          <MenuItem value="CH" style={{ textShadow: "none" }}>
            Switzerland
          </MenuItem>
          <MenuItem value="SY" style={{ textShadow: "none" }}>
            Syrian Arab Republic
          </MenuItem>
          <MenuItem value="TW" style={{ textShadow: "none" }}>
            Taiwan, Province of China
          </MenuItem>
          <MenuItem value="TJ" style={{ textShadow: "none" }}>
            Tajikistan
          </MenuItem>
          <MenuItem value="TZ" style={{ textShadow: "none" }}>
            Tanzania, United Republic of
          </MenuItem>
          <MenuItem value="TH" style={{ textShadow: "none" }}>
            Thailand
          </MenuItem>
          <MenuItem value="TL" style={{ textShadow: "none" }}>
            Timor-Leste
          </MenuItem>
          <MenuItem value="TG" style={{ textShadow: "none" }}>
            Togo
          </MenuItem>
          <MenuItem value="TK" style={{ textShadow: "none" }}>
            Tokelau
          </MenuItem>
          <MenuItem value="TO" style={{ textShadow: "none" }}>
            Tonga
          </MenuItem>
          <MenuItem value="TT" style={{ textShadow: "none" }}>
            Trinidad and Tobago
          </MenuItem>
          <MenuItem value="TN" style={{ textShadow: "none" }}>
            Tunisia
          </MenuItem>
          <MenuItem value="TR" style={{ textShadow: "none" }}>
            Turkey
          </MenuItem>
          <MenuItem value="TM" style={{ textShadow: "none" }}>
            Turkmenistan
          </MenuItem>
          <MenuItem value="TC" style={{ textShadow: "none" }}>
            Turks and Caicos Islands
          </MenuItem>
          <MenuItem value="TV" style={{ textShadow: "none" }}>
            Tuvalu
          </MenuItem>
          <MenuItem value="UG" style={{ textShadow: "none" }}>
            Uganda
          </MenuItem>
          <MenuItem value="UA" style={{ textShadow: "none" }}>
            Ukraine
          </MenuItem>
          <MenuItem value="AE" style={{ textShadow: "none" }}>
            United Arab Emirates
          </MenuItem>
          <MenuItem value="GB" style={{ textShadow: "none" }}>
            United Kingdom
          </MenuItem>
          <MenuItem value="US" style={{ textShadow: "none" }}>
            United States
          </MenuItem>
          <MenuItem value="UM" style={{ textShadow: "none" }}>
            United States Minor Outlying Islands
          </MenuItem>
          <MenuItem value="UY" style={{ textShadow: "none" }}>
            Uruguay
          </MenuItem>
          <MenuItem value="UZ" style={{ textShadow: "none" }}>
            Uzbekistan
          </MenuItem>
          <MenuItem value="VU" style={{ textShadow: "none" }}>
            Vanuatu
          </MenuItem>
          <MenuItem value="VE" style={{ textShadow: "none" }}>
            Venezuela, Bolivarian Republic of
          </MenuItem>
          <MenuItem value="VN" style={{ textShadow: "none" }}>
            Viet Nam
          </MenuItem>
          <MenuItem value="VG" style={{ textShadow: "none" }}>
            Virgin Islands, British
          </MenuItem>
          <MenuItem value="VI" style={{ textShadow: "none" }}>
            Virgin Islands, U.S.
          </MenuItem>
          <MenuItem value="WF" style={{ textShadow: "none" }}>
            Wallis and Futuna
          </MenuItem>
          <MenuItem value="EH" style={{ textShadow: "none" }}>
            Western Sahara
          </MenuItem>
          <MenuItem value="YE" style={{ textShadow: "none" }}>
            Yemen
          </MenuItem>
          <MenuItem value="ZM" style={{ textShadow: "none" }}>
            Zambia
          </MenuItem>
          <MenuItem value="ZW" style={{ textShadow: "none" }}>
            Zimbabwe
          </MenuItem>
        </Select>
        <FormHelperText>
          Song won't play? Select your country from the list to get a new
          suggestion.
        </FormHelperText>
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        onClick={goClick}
      >
        Go
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  choices: state.choices,
});

const mapActionsToProps = { selectCountry };

export default connect(mapStateToProps, mapActionsToProps)(CountryDropdown);
