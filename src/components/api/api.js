export const login_Data = async (data) => {
    const response = await fetch(`api/login`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return response.json();
}
export const signup_Data = async (data) => {
    const response = await fetch(`api/signup`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return response.json();
}
export const user_data = async (data) => {
    const response = await fetch(`api/getdetail`, {
        method: "GET",
        headers: { "Authorization": `Bearer ${data.token}` }
    });
    return response.json();
}