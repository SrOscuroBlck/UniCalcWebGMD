import { createContext, useContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, createUserDocs } from '../firebase/config';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const signUp = async (email, password) => {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        await createUserDocs(user);
    };

    return (
        <AuthContext.Provider value={{ signUp }}>
            {children}
        </AuthContext.Provider>
    );
}


