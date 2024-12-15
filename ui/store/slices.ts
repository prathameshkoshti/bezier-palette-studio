import type {
  CoordinatesAction,
  CoordinatesState,
  InputsAction,
  InputsState,
  SetFunction,
} from './types';

export const createInputsSlice = (
  set: SetFunction,
): InputsState & InputsAction => ({
  // initial state values
  hue: 0,
  curveType: 'sine',
  curveSubType: 'easeIn',
  stepCount: 3,
  freeHand: false,

  // state update action
  updateHue: (hue) => set({ hue }),
  updateCurveType: (curveType) => set({ curveType }),
  updateCurveSubType: (curveSubType) => set({ curveSubType }),
  updateStepCount: (stepCount) => set({ stepCount }),
  updateFreeHand: (freeHand) => set({ freeHand: !freeHand }),
});

export const createCoordinatesSlice = (
  set: SetFunction,
): CoordinatesState & CoordinatesAction => ({
  // initial state values
  startPoint: {
    x: 95,
    y: 95,
  },
  endPoint: {
    x: 360,
    y: 360,
  },
  startPointHandle: {
    x: 360,
    y: 95,
  },
  endPointHandle: {
    x: 360,
    y: 95,
  },

  // state update action
  updateStartPoint: (startPoint) => set({ startPoint }),
  updateEndPoint: (endPoint) => set({ endPoint }),
  updateStartPointHandle: (startPointHandle) => set({ startPointHandle }),
  updateEndPointHandle: (endPointHandle) => set({ endPointHandle }),
});
