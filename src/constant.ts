import { emilyImg, facebookIcon, galleryCone, galleryMilkbottle, galleryOrange, gallerySugar, instagramIcon, jennieImg, pininterestIcon, thomasImg, twitterIcon } from "./assets"

export interface Testimonies{
    animate: number,
    img: string,
    content: string,
    name: string,
    title: string,
}

export const testimonies: Testimonies[] = [
    {
        animate: 2,
        img: emilyImg,
        content: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
        name: "Emily R.",
        title: "Marketing Director",
    },
    {
        animate: 1,
        img: thomasImg,
        content: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
        name: "Thomas S.",
        title: "Chief Operating Officer",
    },
    {
        animate: 3,
        img: jennieImg,
        content: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
        name: "Jennie F.",
        title: "Business Owner"
    }
]

export const projects = [galleryMilkbottle, galleryOrange, galleryCone, gallerySugar ];

export const socialIcons = [facebookIcon, instagramIcon, twitterIcon, pininterestIcon];