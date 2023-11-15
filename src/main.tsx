import './main.css';

import ReactDOM from 'react-dom/client';

import App from './App';
import { DataProvider } from './shared/hooks/useDataContext';
import { GlobalProvider } from './shared/hooks/useGlobalContext';
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <GlobalProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </GlobalProvider>,
  </Provider>
);
