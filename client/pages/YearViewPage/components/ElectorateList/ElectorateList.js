import React    from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ElectorateItem from '../ElectorateItem';

export default function ElectorateList(props) {
    const { electorate } = props;

    return (
        <div>
            <h1 className="title is-3">{electorate.name}</h1>
            <div>
                {
                    electorate.totals.map(item => <ElectorateItem data={item} />)
                }
            </div>
            <hr className="electorate-item-hr"/>
        </div>
    )
}