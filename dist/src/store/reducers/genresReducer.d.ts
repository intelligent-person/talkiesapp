import { PayloadAction } from '@reduxjs/toolkit';
import { MovieGenre } from '../../types';
export declare const genresSlice: import("@reduxjs/toolkit").Slice<MovieGenre[], {
    setGenres(state: import("immer/dist/internal").WritableDraft<MovieGenre>[], action: PayloadAction<MovieGenre[]>): MovieGenre[];
}, "genres">;
export declare const setGenres: import("@reduxjs/toolkit").ActionCreatorWithPayload<MovieGenre[], string>;
declare const _default: import("redux").Reducer<MovieGenre[], import("redux").AnyAction>;
export default _default;
