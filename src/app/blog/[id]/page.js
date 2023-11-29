import React from 'react';

const SinglePage = ({params}) => {
    console.log('singlePage' ,params.id);
    return (
        <div>
            <p>SinglePage</p>
        </div>
    );
};

export default SinglePage;