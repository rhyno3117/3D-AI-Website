import React from 'react';

import CustomButton from './CustomButton';

const FilePicker = ({ file, setFile, readFile, toggleTabContentVisibility }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input 
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label ">
          <span className="text-black">Upload File</span>
        </label>

        <p className="mt-2 text-black text-opacity-75 text-xs truncate">
          {file === '' ? "No file selected" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton 
          type="outline"
          title="Logo"
          handleClick={() => {
            // Pass false to indicate that the tab content should not be hidden
            toggleTabContentVisibility(false);
            readFile('logo');
          }}
          customStyles="text-xs"
        />
        <CustomButton 
          type="filled"
          title="Full"
          handleClick={() => {
            // Pass false to indicate that the tab content should not be hidden
            toggleTabContentVisibility(false);
            readFile('full');
          }}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
}

export default FilePicker;
