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

setInterval(function(){
  var index, len,
  textarea = document.getElementsByTagName('textarea'),
  section5 = document.getElementById('section5');

  for (index = 0, len = textarea.length; index < len; ++index) {
    textarea[index].addEventListener('keydown', autosize);
  }
  
  if (section5==null) {
    document.getElementById('removeSection5').classList.add('hiddenPrint');
  }
  else {
    document.getElementById('removeSection5').classList.remove('hiddenPrint');
  }
},1000);

function autosize(){
  var el = this;
  setTimeout(function(){
  el.style.cssText = 'height:35px; padding:0';
  // for box-sizing other than "content-box" use:
  // el.style.cssText = '-moz-box-sizing:content-box';
  // console.log('active textarea');
  el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}
