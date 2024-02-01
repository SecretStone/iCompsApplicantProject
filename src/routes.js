const TASKS = 'tasks';
const SOLUTIONS = 'solutions'

const routes = {
  Home: `/`,
  Tasks: {
    arrayInverter: `/${TASKS}/arrayInverter`,
    numberBases: `/${TASKS}/numberBases`,
    stringInverter: `/${TASKS}/stringInverter`,
    daysToAge: `/${TASKS}/daysToAge`,
    ceasarChiffre: `/${TASKS}/ceasarChiffre`,
    numberToInvertedArray: `/${TASKS}/numberToInvertedArray`,
    assetDetails: `/${TASKS}/assetDetails`,
  },
  Solutions: {
    arrayInverter: `/${SOLUTIONS}/arrayInverter`,
    numberBases: `/${SOLUTIONS}/numberBases`,
    stringInverter: `/${SOLUTIONS}/stringInverter`,
    daysToAge: `/${SOLUTIONS}/daysToAge`,
    ceasarChiffre: `/${SOLUTIONS}/ceasarChiffre`,
    numberToInvertedArray: `/${SOLUTIONS}/numberToInvertedArray`,
    homepage: `/${SOLUTIONS}/homepage`,
    noPage: `/${SOLUTIONS}/noPage`,
  },
};

export default routes;
