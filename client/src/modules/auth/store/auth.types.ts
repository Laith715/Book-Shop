export enum AuthActionTypes {
    AuthorizationRequested = '@@auth/AuthorizationRequested',
    AuthorizationSuccess = '@@auth/AuthorizationSuccess',
    AuthorizationError = '@@auth/AuthorizationError',
    UnAuthorizedError = '@@auth/UnAuthorizedError',
    RefreshRequested = '@@auth/RefreshRequested',
    RefreshSuccess = '@@auth/RefreshSuccess',
    RefreshError = '@@auth/RefreshError',
}
