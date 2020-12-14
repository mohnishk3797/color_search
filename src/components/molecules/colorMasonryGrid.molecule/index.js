import React, { useMemo, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ColorCardAtom } from '../../atoms';
export function ColorMasonryGrid({ data }) {
  useEffect(() => {
    console.log('data', data);
  }, [data]);
  const colorCards = useMemo(
    () => (
      <Masonry>
        {data.map((obj) => {
          return <ColorCardAtom colorDetail={obj} />;
        })}
      </Masonry>
    ),
    [data]
  );
  return (
    <Grid>
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          250: 1,
          410: 2,
          600: 3,
          700: 4,
          900: 5,
          1100: 6,
        }}
      >
        {colorCards}
      </ResponsiveMasonry>
    </Grid>
  );
}
