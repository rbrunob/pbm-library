export const getParams = (
    params: { [key: string]: string | number } | undefined
) => {
    if (params === undefined) return "";

    return (
        "?" +
        Object.keys(params)
            .map((paramter) => paramter + "=" + params[paramter])
            .join("&")
    );
};