import routes from '../../routes';

const routeTabNames = [
  { route: routes.Tasks.ceasarChiffre, name: 'Ceasar Chiffrierung' },
  { route: routes.Tasks.stringInverter, name: 'String Inverter' },
  { route: routes.Tasks.numberToInvertedArray, name: 'Number To Inverted Array' },
  { route: routes.Tasks.daysToAge, name: 'Days to Age' },
  { route: routes.Tasks.numberBases, name: 'Number Bases' },
  { route: routes.Tasks.arrayInverter, name: 'Array Inverter' },
];

export const RouteUtilsConstant = {
  routeTabNames,
};
