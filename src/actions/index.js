export const selectLibrary = ( libraryID ) => {
    return{
        type: 'selectLibrary',
        payload: libraryID
    };
};