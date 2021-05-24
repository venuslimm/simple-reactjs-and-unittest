import { createContext } from 'react';

const userContext = createContext();
export default userContext;

/* To use context:
1. createContext and export it
2. Use Provider to wrap around the child components that needs to access it
3. Use useContext to use the context 
Ref: https://www.youtube.com/watch?v=lhMKvyLRWo0 */