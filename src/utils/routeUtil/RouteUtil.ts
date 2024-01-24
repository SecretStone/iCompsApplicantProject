import { RouteUtilsConstant } from './RouteUtilsConstant';

const getTitleForRoute = (route: string) =>
  RouteUtilsConstant.routeTabNames.find((x) => route?.includes(x?.route))?.name ?? null;

export const RouteUtil = {
  getTitleForRoute,
};
