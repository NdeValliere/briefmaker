//BASIC
//-
import React from 'react';
import ReactDOM from 'react-dom';

//CUSTOM
//-
import PDFContainer from './PDF';

//BASIC
//-
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PDFContainer />, document.getElementById('root'));
registerServiceWorker();
