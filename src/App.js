import React, { useEffect } from 'react';
import { ColorListPage } from './components/pages';
import { useDispatch } from 'react-redux';
import api from './redux/services';
import { setColorList } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    api.colorList.getColors().then((result) => {
      result.json().then((colorList) => {
        dispatch(setColorList(colorList));
      });
    });
  });
  return <ColorListPage />;
}

export default App;
