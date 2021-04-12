import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_TECH_LOADING,
} from './types';

export const getTechs = () => async (dispatch) => {
  try {
    setTechLoading();
    const res = await fetch('/techs');
    const data = await res.json();
    dispatch({ type: GET_TECHS, payload: data });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.statusText });
  }
};

export const setTechLoading = () => {
  return {
    type: SET_TECH_LOADING,
  };
};

export const addTech = (tech) => async (dispatch) => {
  try {
    setTechLoading();
    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({ type: ADD_TECH, payload: data });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.statusText });
  }
};

export const deleteTech = (id) => async (dispatch) => {
  try {
    setTechLoading();
    await fetch(`techs/${id}`, {
      method: 'DELETE',
    });
    dispatch({ type: DELETE_TECH, payload: id });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.statusText });
  }
};
