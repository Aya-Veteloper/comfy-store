import {Link} from "react-router-dom"

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.jpeg";

const carouselImages = [hero1, hero2, hero3, hero4]

export default function Hero() {
    return (
        <>
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div>
                    <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">We are changing the way people shop</h1>
                    <p className="mt-8 max-w-xl text-lg leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quis libero ratione voluptatum sint beatae ad quaerat quia aut aliquam perspiciatis dolores consequuntur laborum nostrum natus minima expedita officia ipsum.</p>
                    <div className="mt-10">
                        <Link to="/products" className="btn btn-primary">
                            Our products
                        </Link>
                    </div>
                </div>
                <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
                    {carouselImages.map((img) => {
                        return (
                            <div key={img} className="carousel-item">
                                <img src={img} className="rounded-box h-full w-80 object-cover" />

                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}
