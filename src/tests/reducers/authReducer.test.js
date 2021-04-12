import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe("Pruebas en authReducer", () => {
  test("debe de realizar el login", () => {
    const initState = {};

    const action = {
      type: types.login,
      payload: {
        uid: "abc",
        displayName: "Karen",
      },
    };

    const state = authReducer(initState, action);

    expect(state).toEqual({
      uid: "abc",
      name: "Karen",
    });
  });

  test("debe de realizar el logout", () => {
    const initState = {
      uid: "123dfdf",
      name: "Karen",
    };

    const action = {
      type: types.logout,
    };

    const state = authReducer(initState, action);

    expect(state).toEqual({});
  });

  test("no debe de hacer cambios en el state", () => {
    const initState = {
      uid: "123fsdf",
      name: "Karen",
    };

    const action = {
      type: "asdjkasd",
    };

    const state = authReducer(initState, action);

    expect(state).toEqual(initState);
  });
});
