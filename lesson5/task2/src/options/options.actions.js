export const TOGGLE_OPTION = 'OPTIONS/TOGGLE_OPTION';

export const toggleOption = optionId => {
    return {
      type: TOGGLE_OPTION,
      payload: {
        optionId,
      },
    };
}