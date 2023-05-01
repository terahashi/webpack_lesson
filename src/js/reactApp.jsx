// ⬇︎react-domをimportしていく
import ReactDom from 'react-dom';
// ⬇︎reactの本体をimportしていく
import * as React from 'react';


// ⬇︎アプリケーションを定義していく
const App = (props) => {
  return(
    <div>
      hello, React!
    </div>
  );
};


// ⬇︎上で定義したものをDOMにマウント（使える状態にするよ）する
// ⬇︎react-rootというIDを持つエレメントを、const reactRootで捕まえます
const reactRoot = document.getElementById('react-root');
//⬇︎もし、そのエレメントがあれば、ReactDOM.renderとして、Appというコンポーネントをrenderする
//無ければelseでコンソールに'No root element found'と表示される
if(reactRoot){
  ReactDom.render(<App />, reactRoot);
}else{
  console.log('No root element found');
}

