import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      const band = {
        id: uuid(),
        bands: action.payload
      }

      return { ...state, bands: [...state.bands, band] }

    default:
      return state;
  }
};
