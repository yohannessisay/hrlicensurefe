const logout = (router) => {
    localStorage.clear();
    router.push({path: "/admin"});
}

export default logout;