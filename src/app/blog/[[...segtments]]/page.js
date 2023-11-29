import React from 'react';

const SinglePage = ({params}) => {
    console.log('singlePage' ,params.id);

    const [years, date]  = params.segtments || [];

    return (
        <div>
            <p>SinglePage {years || new Date().getFullYear() } for {date}</p>
        </div>
    );
};

export default SinglePage;