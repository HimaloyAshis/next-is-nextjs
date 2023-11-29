import React from 'react';

const SinglePage = ({params}) => {
    console.log('singlePage' ,params.id);

    const [years, date]  = params;

    return (
        <div>
            <p>SinglePage {years} {date}</p>
        </div>
    );
};

export default SinglePage;