import React, {useEffect, useState} from 'react';
import './Popup.css';

const Popup = () => {
  const [apiKey, setApiKey] = useState('');
  const [r,setR] = useState(0)
  console.log(apiKey)
  useEffect(() => {
    chrome.storage.local.get(['apiKey']).then(({apiKey}) => {
      setApiKey(apiKey)
    });
  },[])
  return (
    <div>
       extension popup {apiKey}
       <button onClick={() => {
        chrome.storage.local.set({apiKey: 'aman'})
        setR('d');
       }}>Reload</button>
    </div>
  );
};

export default Popup;
