import React from 'react'

import alanBtn from '@alan-ai/alan-sdk-web';
import CustomButton from './CustomButton';
import { useEffect } from 'react';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {

  useEffect(() => {
    alanBtn({
        key: '1843efe130e7216a50d256309aebd0de2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: ({ command, data }) => {
          if (command === 'generate') {
            // Call the client code that will react to the received command
            console.log(data);
            setPrompt(data);
          }
        }
    });
  }, []);

  useEffect(() => console.log(prompt),[prompt]);

  return (
    <div className="aipicker-container">
      <textarea 
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton 
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton 
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs"
            />

            <CustomButton 
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit('full')}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker