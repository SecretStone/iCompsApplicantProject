import React, {Component} from 'react';
import CaesarChiffre from "./CaesarChiffre";

const SECRET = 'Glhv lvw hlq Ehlvslhowhaw ghu plw hlqhp Nolfn yhuvfkoüvvhow zhughq ndqq. Klhu ndqq dxfk hlq hljhqhq Whaw khuhlq jhvfkulhehq, rghu hlq Jhkhlpfrgh cxp Hqwvfkoüvvhoq khuhlq nrslhuw zhughq.';
// Lösung 3.
const KEY = 3;

class CaesarChiffreContainer extends Component {

  /**
   * Methode, welche den verschlüsselten Text unter Verwendung es gegebene Schlüssels entschlüsselt
   * @param secret {string} Der verschlüsselte Text.
   * @param key {number} - Der Schlüssel zum Entschlüsseln.
   * @return {string} - Gibt den entschlüsselten Txt zurück.
   */
  decrypt = (secret, key) => {
    /**
     * Hier muss der Algorithmus zum entschlüssel hin
     */

    return secret;
  }


  render() {
    return (
      <CaesarChiffre
        encrypted={SECRET}
        decrypted={this.decrypt(SECRET, KEY)}
        secretKey={KEY}
      />
    );
  }
}

CaesarChiffreContainer.defaultProps = {};

CaesarChiffreContainer.propTypes = {};

export default CaesarChiffreContainer;
