import { RouteUtil } from '../routeUtil/RouteUtil';

const setTitle = (title) => {
  document.title = `${title ? `${title} - ` : ''} iComps Bewerbertest`;
};

// Sets title for each main route (every item in header navigation bar)
const setTitleByRoute = (route = '') => setTitle(RouteUtil.getTitleForRoute(route));

export const DocumentUtil = {
  setTitle,
  setTitleByRoute,
};
