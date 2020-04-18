import React from 'react';

const Result = (quote) => {
    return(
        <div className="flex-col size2">
        <span className="txt1 p-b-20">El total es</span>

        <span className="txt3">$ {quote}</span>
      </div>
 

    );
}

export default Result;