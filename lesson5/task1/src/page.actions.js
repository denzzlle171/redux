export const NEXTPAGE = 'PAGE/NEXT_PAGE';
export const PREVPAGE = 'PREV/PREV_PAGE';


export const nextPage = () => {
  return {
    type: NEXTPAGE,
  };
};

export const prevPage = () => {
  return {
    type: PREVPAGE,
  };
};



