import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { withFirebase } from '../services/Firebase';
import theme from '../Theme';
import Todo from './Todo';
import AddItem from './AddItem';

const ListWrapper = styled.div`
  width: 100%;
  max-width: 360;
  background-color: "limegreen";
`;

const Fridge = (props) => {
  return (
    <>
      <ListWrapper>
        <List>
          {(props.authUser && props.authUser.items) && Object.keys(props.authUser.items)
            .filter(itemId => props.authUser.items[ itemId ].isPurchased)
            .map(itemId => (
              <div key={ `todo-item-${ itemId }` }>
                <Todo item={ props.authUser.items[ itemId ] } />
                <Divider />
              </div>
            ))}
        </List>
      </ListWrapper>
      <AddItem uid={ props.authUser && props.authUser.uid }/>
    </>
  );
};

Fridge.propTypes = {
  firebase: PropTypes.shape({
    getRandomUserItems: PropTypes.func
  })
};

export default withFirebase(Fridge);