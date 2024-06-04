import React from 'react'

const ShoeCard = ({imageURL, changeBigShoeImage, bigShoeImage}) => {
    const handleClick = () => {
        if (bigShoeImage !== imageURL.bigShoe) {
            changeBigShoeImage(imageURL.bigShoe)
        }
    }

    return (
        <div className={`border-2 rounded-xl 
                ${bigShoeImage === imageURL
                    ? 'border-coral-red'
                    : 'border-transparent'
                }
                cursor-pointer max-sm:flex-1
            `}
            onClick={handleClick}>
            
        </div>
    )
}

export default ShoeCard