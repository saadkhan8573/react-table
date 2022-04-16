import React, { useEffect, useState } from 'react';

export const ImageUpload = ({ fileupload, field }) => {
    const [imageData, setImageData] = useState("");

    useEffect(() => {
        setImageData(field.value)
    }, [field])
    
    const handleChange = (event) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                fileupload('image', reader.result.toString());
            }
        };
        reader.readAsDataURL(event.target.files[0]);
    }
    return (
        <>
            <div className='fileUpload'>
                <img src={imageData || 'https://www.w3schools.com/howto/img_avatar.png'} alt="aaa" />
                <input
                    type="file"
                    onChange={handleChange}
                    accept="image/png, image/jpeg, image/jpg, image/bmp, image/svg"
                />
            </div>
        </>
    )
}