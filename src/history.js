import { createBrowserHistory } from 'history';
import { DocumentUtil } from './utils/documentUtil/documentUtil';

const history = createBrowserHistory();

history.listen((location) => {
  DocumentUtil.setTitleByRoute(location.pathname);
});

DocumentUtil.setTitleByRoute(history?.location?.pathname);

export default history;
