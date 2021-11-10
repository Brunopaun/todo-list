import React from 'react';

import Layout from './components/Layout/Layout';
import Wrapper from './components/UI/Wrapper';
import Navigation from './components/Navigation/Navigation';
import Input from './components/Inputs/Input';
import List from './components/List/List';

function App() {
  return (

    <Layout>
      <Wrapper>
      <Navigation/>
      <Input></Input>
      <List></List>
      </Wrapper>
    </Layout>

    );
}

export default App;
