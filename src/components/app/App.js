import React from 'react';
import ContainerGrid from '../container/ContainerGrid';
import SongList from '../songList/SongList';
import SongDetail from '../songDetail/SongDetail';

const App = () => {
  return (
    <ContainerGrid>
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </ContainerGrid>
  );
};

export default App;
