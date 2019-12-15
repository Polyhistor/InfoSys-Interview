import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const mockStore = configureStore([thunk]);

// the mock store with initial value
export const makeMockStore = (state = {}) => {
  return mockStore({
    ...state
  });
};

// helper function for targeting classes
export const findByClass = (wrapper, className) => {
  return wrapper.find(`.${className}`);
};

// React 16 Enzyme adapter setup
Enzyme.configure({ adapter: new Adapter() });
export { shallow, mount, render };
export default Enzyme;
