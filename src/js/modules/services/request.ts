const postData = async (url: string, data: any): Promise<string> => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    return await response.text();
}

const getResource = async (url: string): Promise<string> => {
    const response = await fetch(url);

    if(!response.ok) {
        throw new Error(`could not fetch ${url}, status: ${response.status}`);
    }

    return await response.json();
}

export {postData, getResource};