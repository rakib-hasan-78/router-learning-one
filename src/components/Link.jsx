import PropTypes from 'prop-types';
import React from 'react';

const Link = ({route}) => {
    return (
        <li className='px-4 py-3 bg-green-400 rounded-md flex items-center justify-center text-sm delay-150 ease-in-out hover:bg-green-500'><a href={route.path}>{route.name}</a></li>
    );
};
Link.propTypes={
    route: PropTypes.object.isRequired,
}

export default Link;