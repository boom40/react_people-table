import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import cn from 'classnames';

const Person = ({ item }) => {
  const [selectedTr, setSelectedTr] = useState('');

  useEffect(() => {
  }, [selectedTr]);

  return (
    <tr
      className={
        cn(
          item.sex === 'f' ? 'Person--female' : 'Person--male',
          selectedTr === item.id ? 'Person--selected' : ''
        )
      }
      onClick={() => setSelectedTr(item.id)}
    >
      <td>{item.id}</td>
      <td className={item.born < 1650
        ? 'Person--decoration' : ''}
      >
        {item.name}
      </td>
      <td>{item.sex}</td>
      <td>{item.born}</td>
      <td>{item.died}</td>
      <td className={item.died - item.born >= 65
        ? 'Person--green' : ''}
      >
        {item.died - item.born}
      </td>
      <td className={`Person--lived-in-${Math.ceil(item.died / 100)}`}>
        {Math.ceil(item.died / 100)}
      </td>
      <td>{item.mother}</td>
      <td>{item.father}</td>
    </tr>
  );
};

Person.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropType.object.isRequired,
};

export default Person;
