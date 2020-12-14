import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { TextInput } from '../../atoms';
import { useDispatch, useSelector } from 'react-redux';
import { filterColor } from '../../../redux/actions';
import { ColorMasonryGrid } from '../../molecules';
export function ColorListPage() {
  const [colorName, setColorName] = useState('');
  const dispatch = useDispatch();
  const matchedColor = useSelector((state) => state.colorList.matchedColor);
  const handleChange = (value) => {
    setColorName(value);
    dispatch(filterColor(value));
  };
  return (
    <Container>
      <TextInput
        required={true}
        id={'colorName'}
        name={'colorName'}
        value={colorName}
        onChange={(value) => handleChange(value)}
        variant={'outlined'}
        label={'Type To Search Colors'}
        fullWidth={true}
      />
      <ColorMasonryGrid data={matchedColor} />
    </Container>
  );
}
