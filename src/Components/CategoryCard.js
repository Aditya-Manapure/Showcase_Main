import React from 'react'

const  CategoryCard = ({ImageUrl, Category}) => {
    return (
        <div className = "Category" style ={{display:"flex" ,flexDirection:"column"}}>
            <img className = "Category_Image"src= {ImageUrl} />
            <center><b>{Category}</b></center>
        </div>
    );
}

export default CategoryCard;
