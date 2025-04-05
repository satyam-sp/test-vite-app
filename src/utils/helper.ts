


export const setUser = (user: any) => {
    localStorage.setItem('user', JSON.stringify(user))
    return getUser();
}

export const getUser = () => {
    const user = localStorage.getItem('user');
    return user && JSON.parse(user);
}

export const getToken = () =>  getUser().token;


export const isAdmin = () => getUser().role === 'admin';