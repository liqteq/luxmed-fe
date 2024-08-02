
export const onSubmitForm = async (data: any) => {
    const response = await fetch('/api/s3-upload', {
        method: 'POST',
        body: JSON.stringify(data),
    })
    const res = await response.json()
    console.log("API RESPONSE", res)
    return res
}