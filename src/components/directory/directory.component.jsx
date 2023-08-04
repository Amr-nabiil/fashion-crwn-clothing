import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";


class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
            {
             title: "hats",
             imageUrl:"https://www.bon-clic-bon-genre.eu/image/image/visage-rond.jpg",
             id: 1,
             linkUrl: 'hats'
            },
            {
             title: "jackets",
             imageUrl:"https://nypost.com/wp-content/uploads/sites/2/2022/03/Best-Denim-Jackets-for-Women.jpg?resize=878,585&quality=75&strip=all",
             id: 2  ,
             linkUrl: '' 
            },
            {
             title: "sneakers",
             imageUrl: "https://www.golfposer.com/media/magefan_blog/Nike-Air-Max-90-Flash-Lime-Golf-Shoe-Hero.jpg",
             id: 3    ,
             linkUrl: ''
            },
            {
             title: "womens",
             imageUrl:"https://media.allure.com/photos/57dc1a877b47312c0ad83725/16:9/w_2560%2Cc_limit/model%2520jcrew.jpg",
             size:"large",
             id: 4   ,
             linkUrl: '' 
            },
            {
             title: "mens",
             imageUrl:"https://en.svoboda-williams.com/images/lifestyle_article/1200x630/99546223-resize~fashion-for-men.jpg",
             size:"large",
             id: 5,
             linkUrl: ''
            }    
            ]
        }
    }
    render() {
        return(
            <div className="directory-menu">
                {this.state.sections.map(({ id , ...otherSectionProps} ) => (
                    <MenuItem key={id} {...otherSectionProps} />
                )) }
            </div>
        )
    }
}
export default Directory;