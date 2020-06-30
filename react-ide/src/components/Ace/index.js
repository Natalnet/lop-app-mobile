import React, { useState, useCallback, useRef } from 'react';

import AceEditor from 'react-ace';

import './styles.css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/theme-monokai';

const Ace = () => {
  const AceRef = useRef();
  const [program, setProgram] = useState('');

  const onSubmit = useCallback(() => {
    alert(program);
    window.ReactNativeWebView.postMessage(program);
  }, [program]);

  const changeCursor = useCallback((command) => {
    AceRef.current.editor.focus();
    AceRef.current.editor.execCommand(command);
  }, []);
  const addChar = useCallback((char) => {
    AceRef.current.editor.focus();
    AceRef.current.editor.session.insert(
      AceRef.current.editor.getCursorPosition(),
      char,
    );
  }, []);

  const changeLanguage = useCallback(() => {
    const language = document.getElementById('changeLanguage').textContent;
    if (language === 'cpp') {
      AceRef.current.editor.session.setMode('ace/mode/c_cpp');
    } else if (language === 'js') {
      AceRef.current.editor.session.setMode('ace/mode/javascript');
    }
  }, []);

  return (
    <div className="container">
      <div className="ide-container">
        <AceEditor
          ref={AceRef}
          mode="javascript"
          placeholder="Digite seu código"
          theme="monokai"
          focus={false}
          fontSize={12}
          name="ide-ace"
          onChange={setProgram}
          editorProps={{ $blockScrolling: true }}
          wrapEnabled={true}
          value={program}
          highlightActiveLine={true}
          tabSize={2}
          style={{ maxWidth: '92vw', height: '92vh', userSelect: 'none' }}
          setOptions={{
            useWorker: false,
          }}
        />
        <div className="buttons-container">
          <button onClick={() => changeCursor('gotoleft')}>&larr;</button>
          <button onClick={() => changeCursor('gotoright')}>&rarr;</button>
          <button onClick={() => changeCursor('golineup')}>&uarr;</button>
          <button onClick={() => changeCursor('golinedown')}>&darr;</button>
          <button onClick={() => changeCursor('indent')}>tab</button>
          <div className="separator"></div>
          <button onClick={() => addChar(';')}>;</button>
          <button onClick={() => addChar('(')}>(</button>
          <button onClick={() => addChar(')')}>)</button>
          <button onClick={() => addChar(',')}>,</button>
          <button onClick={() => addChar(':')}>:</button>
          <button onClick={() => addChar('{')}>{'{'}</button>
          <button onClick={() => addChar('}')}>{'}'}</button>
          <button onClick={() => addChar('[')}>{'['}</button>
          <button onClick={() => addChar(']')}>{']'}</button>
          <button onClick={() => addChar("'")}>'</button>
          <button onClick={() => addChar('"')}>"</button>
          <button onClick={() => addChar('`')}>`</button>
          <div className="separator"></div>
          <button onClick={() => addChar('+')}>+</button>
          <button onClick={() => addChar('-')}>-</button>
          <button onClick={() => addChar('*')}>*</button>
          <button onClick={() => addChar('/')}>/</button>
          <button onClick={() => addChar('%')}>%</button>
          <button onClick={() => addChar('.')}>.</button>
          <div className="separator"></div>
          <button onClick={() => addChar('!')}>!</button>
          <button onClick={() => addChar('<')}>{'<'}</button>
          <button onClick={() => addChar('>')}>{'>'}</button>
          <button onClick={() => addChar('&')}>{'&'}</button>
          <button onClick={() => addChar('|')}>|</button>
          <div className="separator"></div>
          <button onClick={() => addChar('?')}>?</button>
          <button onClick={() => addChar('@')}>@</button>
          <button onClick={() => addChar('#')}>#</button>
          <button onClick={() => addChar('~')}>~</button>
          <button onClick={() => addChar('^')}>^</button>
        </div>
      </div>
      <button type="submit" onClick={onSubmit}>
        {' '}
        Submeter
      </button>
      <button id="changeLanguage" onClick={changeLanguage}>
        js
      </button>
    </div>
  );
};

export default Ace;
