import React, { useState } from 'react';

const Image = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleClick = () => {
    // Open the file dialog
    const input = document.createElement('input');
    input.type = 'file';
    input.style.display = 'none';
    input.onchange = handleFileChange;
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  };

  return (
    <div>
      <svg
       onClick={handleClick}
       className="h-6 absolute top-185 left-333 cursor-pointer"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 512 512"
     >
       <path d="M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L362.9 64.8C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
     </svg>
      {file && (
        <div className="image">
          <input
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
         <img className="h-10 w-10" src={URL.createObjectURL(file)} alt="Selected File" />
         {/* <span>{file.name}</span> */}
        </div>
      )}
    </div>
  );
};

export default Image;



